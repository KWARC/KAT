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
        window.ontology = new KAT.model.Ontology(xml);
      } catch(e){
        console.log("Error", e.message, "Node", e.node); 
      }
    }, "xml").fail(function(e){
      console.log("Unable to load xml!");
    });
});
