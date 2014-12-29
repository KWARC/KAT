$(function(){
    $.get("content/sample1.html", function(data){

        //load the content
        var content = $("#content").html(data)
        .annotator();

        //add the right plugins
        content
        .annotator('addPlugin', 'KATOntology')
        .annotator('addPlugin', 'KATStore');
    }, "html");
    $.get("/ontologies/sample.xml", function(xml){
      try{
        window.store = new KAT.model.OntologyStore();
        window.ontology = window.store.addNewOntology(xml, "OMDoc");
        window.store.init(); //intialise this store.
        window.store.init(); //do it again => this is an error until this is implemented. 
      } catch(e){
        console.log("Error", e.message, "Node", e.node);
      }
    }, "xml").fail(function(e){
      console.log("Unable to load xml!");
    });
});
