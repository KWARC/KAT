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
 * Class to describe an annotation concept. Annotation concepts describe the annotation model (i.e. the fields contained
 * by the annotation) and the behaviour of the annotation (i.e. user interaction and display).
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Concept", {

  /**
   * Constructor for the class
   * @param {String} name the name of the concept
   * @param {String} definition the definition in xml format of the concept
   * @param {String} ontology definition
   */
  init: function (name, definition, ontology) {
    this.setName(name);
    this.setConceptName(name.slice(name.indexOf('.') + 1));
    this.setDefinition(new kat.util.XMLDoc(definition));
    this.setOntology(ontology);
  },


  properties: {
    name      : {
      value: null
    },
    conceptName : {
      value: null,
    },
    definition: {
      value: null
    },
    ontology: {
      value: null
    }
  },

  methods: {
    /**
     * Serializes the concept into a JSON representation.
     * @return {String} json representation of the concept
     */
    serialize: function () {
      return JSON.stringify({
        name      : this.getName(),
        definition: this.getDefinition().toString(),
        ontology  : this.getOntology()
      })
    }
  },

  statics: {
    /**
     * Constructs a new Concept from a json representation
     * @param {String} json the json representation
     * @return {kat.annotation.Concept}
     */
    fromSerializedString: function (json) {
      var obj = JSON.parse(json);
      return new kat.annotation.Concept(obj.name, obj.definition, obj.ontology);
    }
  }

})
