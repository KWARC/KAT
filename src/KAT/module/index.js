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
    var me = this;

    //texts
    var text_new        = "Add new Annotation";
    var text_remove     = "Delete Annotation";
    var text_highlight  = "Highlight Annotation";
    var text_edit       = "Edit Annotation";
    var text_rdf        = "View RDF";
    var annot_modeOn    = "Enable Annotation Mode";
    var annot_modeOff   = "Enable Reading Mode";
    var storage_import  = "Import Annotations";
    var storage_export  = "Export Annotations";


    //the menu to return
    var menu = {};

    // Case A: Annotation Mode is disabled
    if (!KAT.sidebar.annotationMode){

      //Menu item A.1 : Turn on annotation mode
      menu[annot_modeOn] = function(){
          KAT.sidebar.toggleAnnotationMode();
        };

      //Menu item A.2 : Import Annotations
      menu[storage_import] = function(){
        var rdfDoc = prompt("Paste annotations to import here: ");
        me.store.addFromRDF(jQuery(rdfDoc).get(0));
      };

      //Menu item A.3 : Export Annotations
      menu[storage_export] = function(){
        var rdfDoc = me.store.toRDF();
        prompt("Press CTRL+C to export annotations: ", rdfDoc);
      };
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

        //Menu item B1.1 : Turn off annotation mode
        menu[annot_modeOff] = function(){
            KAT.sidebar.toggleAnnotationMode();
        };

        //Menu item B1.2 : Import Annotations
        menu[storage_import] = function(){
          var rdfDoc = prompt("Paste annotations to import here: ");
          me.store.addFromRDF(jQuery(rdfDoc).get(0)); 
        };

        //Menu item B1.3 : Export Annotations
        menu[storage_export] = function(){
          var rdfDoc = me.store.toRDF();
          prompt("Press CTRL+C to export annotations: ", rdfDoc);
        };

        /* Subcase B2:
          User has not made a selection
          Right click is on an annotation
        */

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
              KAT.sidebar.generateAnnotationForm(me,annotation.edit,annotation,annotation.selection,annotation.concept);
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
              //load new Annotation form
              var values = KAT.sidebar.generateAnnotationForm(me,me.store.addNew.bind(me.store),0,selection,concept);
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
