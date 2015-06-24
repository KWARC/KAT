/**
* Namespace for KAT JOBAD module.
* @namespace
* @alias KAT.module
*/

KAT.module = {
  /* Module Info / Meta Data */
  info:{
    'identifier':   'KAT.module',
    'title':    'KAT module',
    'author':   'The KWARC group',
    'description':  'A module for KAT',
    'url': 'http://kwarc.github.io/KAT',
    'version':  '2.0',
    'dependencies': [],
    'externals': {
      "js": [],
      "css": []
    },
    'async': false,
    'hasCleanNamespace': false
  },
  init: function(JOBADInstance, annotationStore){
    this.store = annotationStore; // KAT.storage.Store
    this.gui = this.store.gui; // KAT.gui
  },
  hoverText: function(target, JOBADInstance){
    // return element to display

  }, 

  contextMenuEntries: function(target, JOBADInstance){
    // reference to self
    var me = this;

    // Lots of Text
    var text_new        = "Add new Annotation";
    var text_remove     = "Delete Annotation";
    var text_highlight  = "Highlight Annotation";
    var text_edit       = "Edit Annotation";
    var text_rdf        = "View RDF";
    var annot_modeOn    = "Enable Annotation Mode";
    var annot_modeOff   = "Enable Reading Mode";
    var storage_import  = "Import Annotations";
    var storage_export  = "Export Annotations";

    // TODO: Callbacks.

    // the menu to return
    var menu = {};

    var initializeMenuBar = function(annotationModeBool) {

      var importAnnotations = function(){

        var rdfDoc = prompt("Paste annotations to import here: ");
        var annots = me.store.addFromRDF(jQuery(rdfDoc).get(0));

        //and draw them
        for(var i=0;i<annots.length;i++){
          annots[i].draw();
        }

      };

      var exportAnnotations = function() {

          var rdfDoc = me.store.toRDF();
          var dialog = KAT.gui.dialog("Export Annotation", rdfDoc, ["OK"], function(){this.close();});

      };

      //Menu item 1 : Toggle annotation mode
      
      if(annotationModeBool) {
        menu[annot_modeOff] = function(){
          KAT.sidebar.toggleAnnotationMode();
        };
      } else {
        menu[annot_modeOn] = function(){
          KAT.sidebar.toggleAnnotationMode();
        };
      }

      //Menu item 2
      menu[storage_import] = importAnnotations;

      //Menu item 3
      menu[storage_export] = exportAnnotations;

  };

    // Case A: Annotation Mode is disabled
    if (!KAT.sidebar.annotationMode){

      initializeMenuBar(false);

    }

    // Case B: Annotation Mode is enabled
    else {

      var selection;

      try{
        selection = this.gui.getSelection();
      } catch(e){}


      if(!selection || selection.isEmpty){

        /* Subcase B1:
          User has not made a selection
          Right click is not on an annotation
        */

        initializeMenuBar(true);

        //find all the annotations.
        var annots = this.store.findfromElement(target);

        if(annots.length !== 0){
          menu = {};
          menu[text_remove] = {};
          menu[text_highlight] = {};
          menu[text_edit] = {};

          //iterate over all the annotations.
          $.each(annots, function(i, annotation){

            //Menu item B2.1 : Delete annotation
            menu[text_remove][annotation.uuid] = function(){
              annotation.delete();
            };

            //Menu item B2.2 : Highlight annotation
            menu[text_highlight][annotation.uuid] = function(){
              annotation.flash();
            };

            //Menu item B2.3 : Edit annotation
            menu[text_edit][annotation.uuid] = function(){
              annotation.edit(me);
            };
          });
        }
      } else {
        /* Subcase B3:
          User has made a selection
        */
         if(!(selection.start == selection.end && selection.startOffset == selection.endOffset)){

          //Menu item B3.n : Add annotation with nth concept found in Kannspec
          $.each(this.gui.collection.findConcepts(), function(index, concept){
            menu[concept.getFullName()] = function(){
              // create a new annotation form.
              KAT.sidebar.generateAnnotationForm(
                me,
                me.store.addNew.bind(me.store),
                undefined,
                selection,
                concept
              );
            };
          });
        }
      }
    }

    //return the menu.
    return menu;
  }
};


JOBAD.modules.register(KAT.module); //register the module.
