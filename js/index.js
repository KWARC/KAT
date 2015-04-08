$(function(){
  //CHANGE THESE URLS TO CHANGE DOCUMENT AND KANNSPEC
  getKATStarted("content/sample1.html", "KAnnSpecs/omdoc-annotations.xml");
});

function getKATStarted(documentURL, KAnnSpecURL){

  //set up bootstrap
  JOBAD.config.BootstrapScope = "bootstrap";

  /* Set up and insert Annotation Toolkit (sidemenu) */

  //globalVariables
  var hideWidth = '-230px'; //width that will be hidden
  var winHeight = jQuery(window).height(); 
  var collapsibleStatus = false;

  //create collapsible sidemenu & define properties
  var collapsibleMenu = document.createElement('div');
  jQuery(collapsibleMenu).addClass("collapsible")
    .html("<ul class=\"KATMenuItems\"></ul>")
    .css({'position':'fixed','right': hideWidth,'height': winHeight-10});

  // create button to toggle collapse and resurection of sidemenu and define properties
  var collapsibleToggle = document.createElement('button');
  jQuery(collapsibleToggle).html("&laquo;")
    .css({'height': winHeight-10})
    .click(function(){
      if(collapsibleStatus){
          jQuery(this).parent().animate({right: hideWidth}, 300 );
          jQuery(this).html('&laquo;'); //change text of button
          jQuery("body").css({'width': jQuery(window).width()-50});
          collapsibleStatus = false;
      }else{
          jQuery(this).parent().animate({right: "0"}, 300 ); 
          jQuery(this).html('&raquo;'); //change text of button
          jQuery("body").css({'width': jQuery(window).width()-260});
          collapsibleStatus = true;
      }
    });

  //render sidemenu on page ready
  jQuery( document ).ready(function(){
    jQuery( collapsibleMenu ).prepend(collapsibleToggle);
    jQuery( "body" ).prepend(collapsibleMenu);
    jQuery("body").css({'width': jQuery(window).width()-50});
  });

  //define changes to sidemenu when page is resized
  jQuery( window ).resize(function() {
    winHeight = jQuery(window).height();
    jQuery(collapsibleMenu).css({'position':'fixed','right': hideWidth,'height': winHeight-10});
    jQuery(collapsibleToggle).css({'height': winHeight-10});
    jQuery("body").css({'width': jQuery(window).width()-50});
  });

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

function genNewAnnotationForm(selection,concept){
  //console.log(concept);
  fields = concept['fields']
  var fieldIndex;
  
  var newAnnotation = document.createElement('li')
  jQuery(newAnnotation).addClass("currentForm");

  for (fieldIndex = 0; fieldIndex < fields.length; ++fieldIndex) {
      current = fields[fieldIndex];
      if (current['type'] == "text"){
        var value = current['value'];
        jQuery( newAnnotation ).append(value);
        var newTextField = document.createElement('input')
        newTextField.type="text";
        jQuery( newAnnotation ).append(newTextField);
      }
      if (current['type'] == "select"){
        var value = current['value'];
        jQuery( newAnnotation ).append(value);
        var newTextField = document.createElement('p')
        jQuery( newTextField ).html("selectfield");
        jQuery( newAnnotation ).append(newTextField);
      }
     if (current['type'] == "reference"){
        var value = current['value'];
        jQuery( newAnnotation ).append(value);
        var newTextField = document.createElement('p')
        jQuery( newTextField ).html("referencefield");
        jQuery( newAnnotation ).append(newTextField);
      }
  }
  var button = document.createElement('input');
    button.type="submit";
    button.value="Add";
    jQuery( button ).click(function(){
      console.log("click");
      jQuery( ".KATMenuItems" ).children("li:first").remove();
      //var newAnnotation = me.store.addNew(selection, concept);
      //newAnnotation.draw();
  });
  jQuery( newAnnotation ).append(button);
  jQuery( newAnnotation ).prepend("<b> Enter Annotation Details</b><br>");
  jQuery( ".KATMenuItems" ).append(newAnnotation);
};