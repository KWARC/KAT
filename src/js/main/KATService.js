/**
 * A FormProcessor object takes an annotation ontology form definition as an xml node and returns
 * an HTML string form that can be added inside a document
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.KATService", {
  init : function(ontologyDocString){
    this._ontologyDoc = new kat.util.XMLDoc(ontologyDocString);
  },

  methods : {
    run : function(){
      this._processAnnotationForm();
    }
  },

  internals :{
    ontologyDoc : null,

    processAnnotationForm : function(){
      var formProcessor = new kat.input.form.FormParser(this._ontologyDoc.filter(this.KAnnotationInputFilter)[0]);
      $("body").append(formProcessor.parse());
    }
  },

})
