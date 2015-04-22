$(function(){
  //CHANGE THESE URLS TO CHANGE DOCUMENT AND KANNSPEC
  getKATStarted("content/sample1.html", "KAnnSpecs/omdoc-annotations.xml");
});

function getKATStarted(documentURL, KAnnSpecURL){

  //set up bootstrap
  JOBAD.config.BootstrapScope = "bootstrap";

  //load sidebar
  var sidebar = new KAT.sidebar();

  //load the document
  $.get(documentURL, function(documentData){

    //some contants
    var data = $("#content").html(documentData);

    //load the KAnnSpec
    $.get(KAnnSpecURL, function(KannSpecXML){
      //build all the things we need

      /*
      * Build all of the needed objects
      */

      //now we can load jobad.
      var myJOBADInstance = new JOBAD(data);

      //create a collection
      var collection = window.collection = new KAT.model.KAnnSpecCollection();

      //now create a gui
      var gui = window.gui = new KAT.gui(data, collection);

      //and a store for the gui.
      var store = window.store = new KAT.storage.Store(gui);

      //and add a KannSpec, then init
      var KAnnSpec = window.spec = collection.addNewKAnnSpec(KannSpecXML);
      collection.init();

      //load the KAT element.
      myJOBADInstance.modules.load('KAT.module', [store], function(){
        this.Setup();
      });
    });
  });



};