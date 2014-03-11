/*
 * This file is part of KAT, the KWARC Annotation Tool,
 * see https://github.com/KWARC/KAT
 *
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 *
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Provides a split-pane viewer of the document for review.
 *
 * @author <a href="mailto:steven.mirea@gmail.com">Stefan Mirea</a>
 */

(function ($) {

  FlancheJs.defineClass("kat.review.ReviewViewer", {
    /**
     * Instantiates the review viewer.
     * @param  {kat.main.KATService} service An instance of the service.
     */
    init: function (service) {
      this._service = service;
      this._target = service._coretexRetriever._container;
      this._ontologies = service._ontologyRegistry.getAllOntologies();
    },

    methods: {
      /**
       * Enable the Viewer on the DOM.
       */
      apply: function () {
        var structure = {
          container: jqElem('div').addClass('reviewViewer'),
          panels: {
            source: this._makePanel('source'),
            mirror: this._makePanel('mirror'),
          },
        };

        // source is panel containing this._target
        var source = structure.panels.source;

        // mirror will be our cloned object.
        var mirror = structure.panels.mirror;

        // Add to the DOM.
        structure.container.insertBefore(this._target);

        source.content.append(this._target);
        mirror.content.append(this._target.clone());

        structure.container.append(structure.panels.source.container);
        structure.container.append(structure.panels.mirror.container);

        // Add events.
        source.content.on('scroll', function (event) {
          mirror.content.scrollTop(source.content.scrollTop());
        });

        // Save the objects.
        this._structure = structure;

        // Trigger events.
        source.actions.find('.reviewViewer-action').eq(0).click();
        mirror.actions.find('.reviewViewer-action').eq(0).click();

        // Monkey-patch the annotation creation function
        var _addAnnotation = this._service._annotationRegistry.addAnnotation;
        this._service._annotationRegistry.addAnnotation = function (annotation) {
          // Add a mirror annotation
          this._mirrorAnnotate(
            annotation.getIdBase(),
            annotation.getIdExtent(),
            annotation.getId(),
            annotation.getOntology(),
            annotation.getConcept()
          );

          // play nice...
          return _addAnnotation.apply(this._service._annotationRegistry, arguments);
        }.bind(this);

        // Rename IDs so you don't have conflicts
        var idSuffix = this._idSuffix;
        mirror.content.find(this._wordSelector).each(function () {
          $(this).attr('id', $(this).attr('id') + idSuffix);
        });

        // Remove any previous annotations cloned from the source.
        mirror.content.find('.kat-annotated').each(function () {
          $(this).replaceWith($(this).html());
        });

        // Migrate all current annotations over to the mirror panel.
        source.content.find('.kat-annotated').each(function (index, elem) {
          var $elem = $(elem);
          this._mirrorAnnotate(
            ($elem.children().first().attr('id') || '').replace(/\./g, '\\.'),
            ($elem.children().last().attr('id') || '').replace(/\./g, '\\.'),
            $elem.attr('id'),
            $elem.attr('ontology'),
            $elem.attr('concept')
          );
        }.bind(this));
      },

      /**
       * Cleanup function.
       */
      destroy: function () {
        if (!this._structure) return;

        this._target.insertBeofre(this._structure.container);
        for (var name in this._structure) {
          this._structure[name].remove();
        }
      },
    },

    internals: {
      // All tokens in the mirror content should be matched by this selector.
      wordSelector: '.ltx_word',

      // This will be appended to every ID token in the mirror content so no duplicate IDs exist.
      idSuffix: '-mirror',

      service: null,
      target: null,
      structure: null,
      ontologies: [],

      mirrorAnnotate: function (startId, endId, id, ontology, concept) {
        var ontologyClass = 'ontology-' + ontology;
        var conceptClass = 'concept-' + concept.replace(/\./g, '-');
        var classes = ['kat-annotated-mirror', ontologyClass, conceptClass].join(" ");
        var mirror = this._structure.panels.mirror;

        var annotatedIds = mirror.content.
          find("#" + startId + this._idSuffix).
          nextUntil("#" + endId + this._idSuffix).
          andSelf().
          add(mirror.content.find('#' + endId + this._idSuffix));

        if (startId === endId) {
          annotatedIds = mirror.content.find('#' + startId + this._idSuffix);
        }

        var $elem = jqElem('span');
        $elem.attr({
          id: id + this._idSuffix,
          class: classes,
          ontology: ontology,
          concept: concept,
          conceptName: concept.slice(concept.indexOf('.') + 1),
        });

        // HACK: for some reason this doesn't work otherwise.
        // Deferred to a later time when I have more time ...
        setTimeout(function () {
          $elem.insertBefore(annotatedIds.eq(0));
          $elem.append(annotatedIds);
          this._update_annotation_counters();
          this._structure.panels.source.content.find('.kat-annotated').each(function () {
            var cpt = $(this).attr('concept');
            $(this).attr('conceptName', cpt.slice(cpt.indexOf('.') + 1));
          });
        }.bind(this), 200);
      },

      /**
       * Sets the ontology for the given panel.
       * @param {String} panelName
       * @param {String} ontologyName
       */
      setOntology: function (panelName, ontologyName) {
        var panel = this._structure.panels[panelName];
        panel.stylesheet.reset();
        // Source rules
        panel.stylesheet.addRule(
          '.kat-annotated:not(.ontology-' + ontologyName + ')',
          'background:transparent; cursor:auto;'
        );
        panel.stylesheet.addRule(
          '.kat-annotated:not(.ontology-' + ontologyName + '):before',
          'display:none;'
        );
        // Mirror rules
        panel.stylesheet.addRule(
          '.kat-annotated-mirror:not(.ontology-' + ontologyName + ')',
          'background:transparent; cursor:auto;'
        );
        panel.stylesheet.addRule(
          '.kat-annotated-mirror:not(.ontology-' + ontologyName + '):before',
          'display:none;'
        );
      },

      /**
       * Returns an object containing the components of a panel.
       * @param  {String} name
       * @return {Object}
       */
      makePanel: function (name) {
        var $actions = jqElem('div').addClass('reviewViewer-panel-actions');
        var $content = jqElem('div').addClass('reviewViewer-panel-content');
        var $container = jqElem('div').addClass('reviewViewer-panel');

        var self = this;

        // Build the actions menu.
        $actions.html('Profile:');
        if (self._ontologies.length == 0) {
          $actions.html(
            '<div class="alert">' +
              ' Add some ontologies from the KAT Control Panel and refresh the page.' +
            '</div>'
          );
        } else {
          self._ontologies.forEach(function (ontology) {
            var ontologyName = ontology.getName();
            var $elem = jqElem('a');
            $elem.
              attr('href', 'javascript:void(0)').
              addClass('reviewViewer-action').
              data('ontology-name', ontologyName).
              html(ontologyName + '<span class="reviewViewer-counter">0</span>').
              on('click.setOntology', function (event) {
                event.preventDefault();
                event.stopPropagation();
                self._setOntology(name, ontologyName);
                $actions.find('.reviewViewer-action').removeClass('reviewViewer-selected');
                $elem.addClass('reviewViewer-selected');
              });

            $actions.append($elem);
          });
        }

        var stylesheet = {
          element: null,

          reset: function () {
            this.element && this.element.remove();
            this.element = jqElem('style').addClass('reviewViewer-style');
            this.element.appendTo($container);
          },

          addRule: function (selector, rules) {
            selector = '#' + $container.attr('id') + ' ' + selector;
            this.element.append(selector + '{ ' + rules + '} ');
          },
        };

        stylesheet.reset();

        $container.
          data('panel-name', name).
          attr('id', 'panel-' + Math.floor(Math.random() * 100000000)).
          append($actions, $content);

        return {
          container: $container,
          actions: $actions,
          content: $content,
          stylesheet: stylesheet,
        };
      },

      update_annotation_counters: function () {
        var structure = this._structure;
        structure.container.find('.reviewViewer-counter').each(function () {
          var ontology = $(this).parent().data('ontology-name');
          $(this).html(
            structure.panels.source.content.
              find('.kat-annotated.ontology-' + ontology).
              length
          );
        });
      },
    },
  });

  /**
   * Returns a new jQuery DOM Node
   * @param  {String} type
   * @return {jQuery}
   */
  function jqElem (type) {
    return $(document.createElement(type));
  }

})(jQuery);
