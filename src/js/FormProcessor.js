/**
 * A FormProcessor object takes an annotation ontology form definition as an xml node and returns
 * an HTML string form that can be added inside a document
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.FormProcessor", {

  /**
   * Constructor for the class
   * @param {kat.util.XMLDoc} annotationDefinition an annotation:input xml element from which the form should be extracted
   */
  init: function (annotationDefinition) {
    this._annotationDefinition = annotationDefinition;
  },

  methods: {
    /**
     * Parses the annotation:input and return an html form as string
     */
    parse: function () {
      console.log(this._annotationDefinition);
    }

  },

  internals: {
    annotationDefinition: null,

    parseByType : function(annotationField){

    }
  }

})
