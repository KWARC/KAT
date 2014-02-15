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

/*
 * Creates and controls the annotation displays.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.Display", {
  /**
   * Class constructor
   * @param {Array[Object{idBase, idExtent, content}]} annotations The array of
   * annotations to be displayed.
   * @param {String} specialClass The class to be added to the words having
   * annotations bound.
   */
  init      : function (annotations, annotationRegsitry, conceptRegsitry, specialClass) {
    this.setAnnotations(annotations);
    if (specialClass) {
      this.setSetSpecialClass(specialClass);
    }
    this._annotationRegistry = annotationRegsitry;
    this._conceptRegistry = conceptRegsitry;
  },
  properties: {
    annotations : {
      value: []
    },
    specialClass: {
      value: kat.Constants.Display.SpecialClass
    }
  },
  methods   : {
    /**
     * Adds an annotation to the display
     */
    addAnnotation         : function (annotation) {
      this.$annotations.push(annotation);
    },
    /**
     * Removes an annotation from the display
     */
    deleteAnnotation      : function (id) {
      for (var i = 0; i < this.$annotations.length; i++) {
        if (this.$annotations[i]["id"] == id) {
          this.$annotations.splice(i, 1);
        }
      }
    },
    /**
     * Adds the class to the spans having annotations bound
     */
    addSpecialClassToSpans: function () {
      for (var i = 0; i < this.getAnnotations().length; i++) {
        var annotation = this.$annotations[i];
        var id1 = annotation["idBase"];
        var id2 = annotation["idExtent"];

        //exchange if necessary, to start from the smallest
        if ($("#" + id1).index() > $("#" + id2).index()) {
          var aux = id2;
          id2 = id1;
          id1 = aux;
        }
        console.log("ids ", id1, id2);
        var annotatedIds = $("#" + id1).nextUntil("#" + id2).andSelf().add($('#' + id2));
        console.log(annotatedIds);
        var ontologyClass = 'ontology-' + annotation.ontology;
        var conceptClass = 'concept-' + annotation.concept.replace(/\./g, '-');
        var classes = [this.getSpecialClass(), ontologyClass, conceptClass].join(" ");
        var currentAnnotationId = annotation["id"];
        annotatedIds.wrapAll("<span " +
          "id='" + currentAnnotationId + "' " +
          "class='" + classes + "' " +
          "ontology='" + annotation.ontology + "' " +
          "concept='" + annotation.concept + "'>"
        );
        annotation["id"] = currentAnnotationId;
        if (annotation["style"] != null) {
          var rules = annotation["style"].split(";");
          for (var j = 0; j < rules.length; j++) {
            var rule = rules[j].split(":");
            if (rule.length == 2) {
              $("#" + currentAnnotationId).css(rule[0].trim(), rule[1].trim());
            }
          }
        }

      }
    },
    createTooltipDisplays : function () {
      for (var i = 0; i < this.getAnnotations().length; i++) {
        var editButton = '<i title="Edit" class="icon-edit pull-right edit-annotation" id="edit-annotation-' + this.$annotations[i].id + '"></i>';
        var closeButton = '<i title="Close" class="icon-remove"></i>';
        var tooltipsterOptions = {
          //"trigger": kat.Constants.Display.Triger,
          //"interactive": true,
          "title"    : 'Annotation <button type="button" class="close" id="close-' + this.$annotations[i].id + '" aria-hidden="true">' + closeButton + '</button>' + editButton,
          "html"     : true,
          "placement": "bottom",
          "content"  : this.$annotations[i].content
        }
        var currentAnnotation = this._annotationRegistry.getAnnotation(this.$annotations[i].id);
        if (currentAnnotation.getExtraData().referenceId) {
          this.createReferenceArrow(currentAnnotation, this.$annotations[i].id);
        }
        $("#" + this.$annotations[i].id).popover(tooltipsterOptions);
        var annotationId = "#" + this.$annotations[i].id;
        var annotationCloseId = "#" + 'close-' + this.$annotations[i].id;
        (function (annotationId, annotationCloseId) {
          $("body").delegate(annotationCloseId, "click", function () {
            $(annotationId).popover('hide');
          })
        })(annotationId, annotationCloseId)
      }
      this._registerEditAnnotationCallback();
    },

    createReferenceArrow: function (currentAnnotation, annotationId) {
      var self = this;
      var baseAnnotationSpan = jQuery("#" + currentAnnotation.getIdBase());
      var pointingAnnotationSpan = jQuery("#" + self._annotationRegistry.getAnnotation(currentAnnotation.getExtraData().referenceId).getIdBase());
      var arrow = new kat.display.ArrowConnector(baseAnnotationSpan, pointingAnnotationSpan);
      $("#" + annotationId).on('shown', function () {
        arrow.render();
      })
      $("#" + annotationId).on('hide', function () {
        arrow.destroy();
      });
    },

    /**
     * Encapsulates the behavior of the Display by adding classes to
     * annotated spans and creating display handlers.
     */
    run   : function () {
      this.addSpecialClassToSpans();
      this.createTooltipDisplays();
    },
    /**
     * Resets the display object
     */
    reset : function () {
      //remove the popovers
      for (var i = 0; i < this.$annotations.length; i++) {
        $("#" + this.$annotations[i].id).popover('destroy');
      }
      //remove the special class span
      $("." + this.getSpecialClass()).each(function () {
        $(this).children().unwrap();
      })
    },
    /**
     * Updates the display
     */
    update: function () {
      this.reset();
      this.run();
    }
  },

  internals: {
    registerEditAnnotationCallback: function () {
      var self = this;
      $("body").off("click.kat", ".edit-annotation");
      $("body").on("click.kat", ".edit-annotation", function () {
        var id = $(this).attr('id').split('edit-annotation-');
        id = id[1];
        $("#" + id).popover('hide');
        var annotation = self._annotationRegistry.getAnnotation(id);
        var concept = self._conceptRegistry.lookupConcept(annotation["$concept"]);
        var annotationEditForm = new kat.display.AnnotationEditForm(annotation, concept, self._annotationRegistry, self._conceptRegistry, self);
        annotationEditForm.run();
      });
    },

    annotationRegistry: null,
    conceptRegistry   : null
  }
});
