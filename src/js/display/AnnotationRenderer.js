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
 * Class for handling the display of a singe annotation.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationRenderer", {
  init: function(annotation, conceptRegsitry) {
    this._annotation = annotation;
    this._conceptRegistry = conceptRegsitry;
  },
  methods: {
    render: function() {
      return {
        ontology: this._annotation.getOntology(),
        concept: this._annotation.getConcept(),
        idBase: this._annotation.getIdBase(),
        idExtent: this._annotation.getIdExtent(),
        content: this._buildContent(),
        id: this._annotation.getId(),
        style: this._style
      }
    }
  },
  internals: {
    annotation: null,
    conceptRegistry: null,
    style: null,

    buildContent: function() {
      var annotationType = this._conceptRegistry.lookupConcept(this._annotation.getConcept());
      var display = annotationType.getDefinition().getXmlDoc().getElementsByTagName("template");
      if(!display.length){
        throw Error("Each annotation concept must define a display!");
      }
      //get the eventual style definition
      var style = annotationType.getDefinition().getXmlDoc().getElementsByTagName("style");
      if(style.length){
          this._style = style[0].textContent.trim();
      }
      var template = display[0].textContent;
      var replacements = this._annotation.getAnnotationValues();
      for (var name in replacements) {
        template = template.replace(new RegExp("{" + name + "}", "g"), replacements[name]);
      }
      return template;
    },

    displayReference: function(){

    }
  }

})
