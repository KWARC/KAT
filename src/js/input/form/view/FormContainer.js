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
 * Describes a class that acts as a container for an annotation form and a concept selector.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.view.FormContainer", {

  /**
   * Constructor for the class
   * @param {String[]} fields
   */
  init: function (fields) {
    this._fields = fields;
  },

  methods: {
    /**
     * Renders the container with both the concept selector and annotation form
     */
    render: function () {
      this._createContainer();
      this._createSelector();
      this._createForm();
    }
  },

  internals: {
    fields: null,

    /**
     * Creates the concept selector
     */
    createSelector: function () {
      var selector = new kat.form.view.ConceptSelector($("#" + this.KSelectorContainerId), this._form);
      selector.render();
    },

    /**
     * Creates the container in which the selector and annotation form will be rendered
     */
    createContainer: function () {
      var template = this.KContainerTemplate.replace("id", this.KContainerId)
        .replace("{title}", kat.util.ConfigManager.getNewAnnotationFormTitle())
        .replace("{conceptSelectorId}", this.KSelectorContainerId)
        .replace("{annotationFormId}", this.KAnnotationFormId);
      $("body").append(template);
    },

    /**
     * Creates the annotation form
     */
    createForm: function () {
      var form = new kat.form.view.Form($("#" + this.KAnnotationFormId), fields);
      form.render();
    }
  },

  statics: {
    KContainerId        : 'kat-form-container',
    KSelectorContainerId: 'kat-form-concept-selector',
    KAnnotationFormId   : 'kat-form-annotation-form',
    KContainerTemplate  : '<div id="{id}" class="modal hide fade">' +
      '<div class="modal-header">' +
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
      '<h3>{title}</h3>' +
      '</div>' +
      '<div class="modal-body">' +
      '<div id="{conceptSelectorId}"></div> ' +
      '<div id="{annotationFormId}"></div> ' +
      '</div>' +
      '<div class="modal-footer"><a href="#" class="btn">Close</a><a href="#" id="kat-form-save" class="btn btn-primary">Save</a></div>' +
      '</div>'
  }

})
