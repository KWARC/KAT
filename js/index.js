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
    $.get("ontologies/omdoc-annotations.xml", function(xml){
      try{
        window.collection = new KAT.model.OntologyCollection();
        window.ontology = window.collection.addNewOntology(xml, "OMDoc");
        window.collection.init(); //intialise this store.
      } catch(e){
        console.log("Error", e.message, "Node", e.node);
        console.log(e.stack);
      }
    }, "xml").fail(function(e){
      console.log("Unable to load xml!");
    });
});
