$(function(){

  //some joabd setup for styling.
  JOBAD.config.BootstrapScope = "bootstrap"; //Bootstrap CSS scope

  var start = function(contentElement, specXML){

    //create a collection
    var collection = window.collection = new KAT.model.KAnnSpecCollection();

    //and add a KannSpec, then init
    var KAnnSpec = window.spec = collection.addNewKAnnSpec(specXML);
    collection.init();

    //now create a gui
    var gui = window.gui = new KAT.gui(content, collection);

    //and a store for the gui.
    var store = window.store = new KAT.storage.Store(gui);

    //now we can load jobad.
    var myJOBADInstance = new JOBAD(contentElement);

    //load the KAT element.
    myJOBADInstance.modules.load('KAT.module', [store], function(){
      this.Setup();
    });
  }

  $.get("content/sample1.html", function(data){
    //First load the content element.
    var data = $("#content").html(data);
    $.get("KAnnSpecs/omdoc-annotations.xml", function(xml){
      //and now start
      start(data, xml);
    }, "xml");
  }, "html");
});
