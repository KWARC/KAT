/**
 * Class to describe an annotation type
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.AnnotationType", {

  init: function (name, stringOntology) {
    this.setName(name);
    this.setXmlOntology(new kat.util.XMLDoc(stringOntology));
  },


  properties: {
    name       : {
      value: null
    },
    xmlOntology: {
      value: null
    }
  }


})
