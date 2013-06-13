/**
 * A FormProcessor object takes an annotation ontology form definition as an xml node and returns
 * an HTML string form that can be added inside a document
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.KATService", {
  init : function(ontologyDocString){
    this._ontologyDocString = new kat.util.XMLDoc(ontologyDocString);
    console.log(this._ontologyDocString);
  },

  internals :{
    ontologyDocString : null
  }
})
