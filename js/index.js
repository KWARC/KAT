$(function(){
    $.get("KAnnSpecs/omdoc-annotations.xml", function(xml){
      try{
        var collection = window.collection = new KAT.model.KAnnSpecCollection();
        var KAnnSpec = window.spec = collection.addNewKAnnSpec(xml);

        collection.init(); //intialise this store.

        $.get("content/sample1.html", function(data){

          //load the content
          var content = $("#content").html(data);

          var gui = window.gui = new KAT.gui(content, collection);
          var store = window.store = new KAT.storage.Store(gui);

        }, "html");
      } catch(e){
        console.log("Error", e.message, "Node", e.node);
        console.log(e.stack);
      }
    }, "xml").fail(function(e){
      console.log("Unable to load xml!");
    });
});
