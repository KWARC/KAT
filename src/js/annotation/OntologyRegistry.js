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
 * A registry to keep track of all available ontologies for this document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.OntologyRegistry", {

  init: function () {
    if (window.localStorage.getItem(this.KLocalStorageRegistryKey)) {
      this._loadRegistry();
    }
    else {
      this._registry = {};
    }
  },

  methods: {
    /**
     * Adds a concept to the registry
     * @param {kat.annotation.Concept} concept the concept to be added
     */
    addOntology: function (concept) {
      this._registry[concept.getName()] = concept;
      this._saveRegistry();
    },

    /**
     * Looks up an annotation concept in the registry
     * @param {String} concept the annotation type name
     * @return {kat.annotation.Concept}
     */
    lookupOntology: function (concept) {
      return this._registry[concept];
    },

    /**
     * Removes an annotation concept from the registry.
     * @param {String} conceptName the name of the concept
     */
    removeOntology: function (ontologyName) {
      delete this._registry[ontologyName];
      this._saveRegistry();
    },

    /**
     * Returns all the concepts in the registry as an array
     * @return {kat.annotation.Concept[]}
     */
    getAllOntologies: function () {
      var concepts = [];
      for (var name in this._registry) {
        concepts.push(this._registry[name]);
      }
      return concepts;
    },

    /**
     * Removes all entries from the registry
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
    }
  },

  internals: {
    registry: {},

    /**
     * Saves the registry to the medium of storage
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
    },

    /**
     * Loads the registry from the medium of storage
     */
    loadRegistry: function () {
      var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
      for (var name in values) {
        this._registry[name] = kat.annotation.Ontology.fromSerializedString(values[name]);
      }
    }
  },

  statics: {
    KLocalStorageRegistryKey: "ontologiesRegistry"
  }

})
