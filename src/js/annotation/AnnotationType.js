/**
 * Class to describe an annotation type. It is characterized by the ontology name and the ontology definition.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.AnnotationType", {

  /**
   * Constructor for the class
   * @param name - the name of the ontology
   * @param stringOntology - an xml ontology in string format
   */
  init: function (name, stringOntology) {
    this.setName(name);
    this.setXmlOntology(new kat.util.XMLDoc(stringOntology));
    this.setXmlOntologyString(stringOntology);
  },


  properties: {
    name             : {
      value: null
    },
    xmlOntology      : {
      value: null
    },
    xmlOntologyString: {
      value: null
    }
  },

  methods: {
    /**
     * Serializes the annotation type to be stored into the registry
     * @return {String}
     */
    serialize: function () {
      return JSON.stringify({
        name             : this.getName(),
        xmlOntologyString: this.getXmlOntologyString()
      })
    }
  },

  statics: {
    /**
     * Transforms a json string into an annotation type
     * @param json the json description of the annotation type
     * @return {kat.annotation.AnnotationType}
     */
    fromSerializedString: function (json) {
      var obj = JSON.parse(json);
      return new kat.annotation.AnnotationType(obj.name, obj.xmlOntologyString);
    }
  }

})
