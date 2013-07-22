/**
 * Class to describe an annotation ontology. Annotation ontologies describe the annotation model (i.e. the fields contained
 * by the annotation) and the behaviour of the annotation (i.e. user interaction and display).
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Ontology", {

  /**
   * Constructor for the class
   * @param {String} name the name of the ontology
   * @param {String} definition the definition in xml format of the concept
   */
  init: function (name, definition) {
    this.setName(name);
    if(definition){
      this.setDefinition(new kat.util.XMLDoc(definition));
    }
    else{
      this.setDefinition("");
    }
  },


  properties: {
    name      : {
      value: null
    },
    definition: {
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
        definition: this.getDefinition().toString()
      })
    }
  },

  statics: {
    /**
     * Constructs a new Concept from a json representation
     * @param {String} json the json representation
     * @return {kat.annotation.AnnotationType}
     */
    fromSerializedString: function (json) {
      var obj = JSON.parse(json);
      return new kat.annotation.Ontology(obj.name, obj.definition);
    }
  }

})


