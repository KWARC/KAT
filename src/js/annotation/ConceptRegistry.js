/**
 * A registry to keep track of all available concepts for this document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.ConceptRegistry", {

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
    addConcept: function (concept) {
      this._registry[concept.getName()] = concept;
      this._saveRegistry();
    },

    /**
     * Looks up an annotation concept in the registry
     * @param {String} concept the annotation type name
     * @return {kat.annotation.Concept}
     */
    lookupConcept: function (concept) {
      console.log("lookup result is: ", this._registry[concept]);
      return this._registry[concept];
    },

    /**
     * Removes an annotation concept from the registry.
     * @param {String} conceptName the name of the concept
     */
    removeConcept: function (conceptName) {
      delete this._registry[conceptName];
      this._saveRegistry();
    },

    /**
     * Returns all the concepts in the registry as an array
     * @return {kat.annotation.Concept[]}
     */
    getAllConcepts: function () {
      var concepts = [];
      for (var name in this._registry) {
        concepts.push(this._registry[name]);
      }
      return concepts;
    },
    
    /**
     * Returns all the concepts corresponding to the given ontology
     * @return {kat.annotation.Concept[]}
     */
    getConceptsByOntology: function(ontology) {
      var concepts = [];
      for (var name in this._registry) {
        if(this._registry[name].getOntology() == ontology){
          concepts.push(this._registry[name]);
        }
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
        this._registry[name] = kat.annotation.Concept.fromSerializedString(values[name]);
      }
    }
  },

  statics: {
    KLocalStorageRegistryKey: "conceptsRegistry"
  }

})
