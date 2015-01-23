$(function(){
    $.get("KAnnSpecs/omdoc-annotations.xml", function(xml){
      try{
        var collection = window.collection = new KAT.model.KAnnSpecCollection();
        var KAnnSpec = collection.addNewKAnnSpec(xml);

        collection.init(); //intialise this store.

        $.get("content/sample1.html", function(data){

          //load the content
          var content = $("#content").html(data);

          var gui = new KAT.gui(content, collection);

        }, "html");
      } catch(e){
        console.log("Error", e.message, "Node", e.node);
        console.log(e.stack);
      }
    }, "xml").fail(function(e){
      console.log("Unable to load xml!");
    });
});
