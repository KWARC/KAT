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
 * The Form class decides which fields to be displayed in the current form.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.Form", {

  /**
   * Constructor for the class
   * @param {kat.annotation.ConceptRegistry} conceptsRegistry a registry containing the available concepts
   * @param {kat.annotation.AnnotationRegistry} annotationRegistry an annotation registry where the submitted annotation will be added
   */
  init: function (conceptsRegistry, annotationRegistry) {
    this.$conceptsRegistry = conceptsRegistry;
    this.$annotationRegistry = annotationRegistry;
    this._conceptName = this.getConceptsRegistry().getAllConcepts()[0].getName();
  },

  methods: {
    run: function () {

    }
  },

  properties: {
    conceptsRegistry  : {value: null, writable: false},
    annotationRegistry: {value: null, writable: false}
  },

  internals: {
    concept: null,

    setConceptName: function (conceptName) {
      this._conceptName = conceptName;
    },

    parseForm : function(){
      var parser = new kat.form.FormParser();
      return parser.getFields();
    },

    /**
     * Handler for the change event on the select box component of the selector
     */
    registerSelectorChangeHandler: function () {
      var self = this;
      jQuery("#" + kat.form.Concept.KSelectorId).on("change", function () {
        var conceptName = $(this).val();
        self._setConceptName(conceptName);
      });
    }

  }

})
