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
  init: function(JOBADInstance, collection_or_kannspec_and_url, documentURL){

    // first of all create a collection
    var collection;

    // if a collection has been parsed, we have it already.
    if(collection_or_kannspec_and_url instanceof KAT.model.KAnnSpecCollection){
      collection = collection_or_kannspec_and_url;
    } else {
      // if not, we still need to create that.
      collection = new KAT.model.KAnnSpecCollection();
      collection.addNewKAnnSpec(collection_or_kannspec_and_url[0], collection_or_kannspec_and_url[1]);
    }

    // create a new gui bound to the right element.
    this.gui = new KAT.gui(JOBADInstance.element, collection);

    //create a store with the right documentURL
    this.store = new KAT.storage.Store(this.gui, documentURL);

    // initialise the tooltip libarary
    JOBADInstance.element.tooltip();

    // initialise the gui
    KAT.sidebar.init(this.store);

    //initialise gui collection
    collection.init();
    collection.assignDisplayColour();
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
      menu[storage_import] = me.store.showImportDialog.bind(me.store);

      //Menu item 3
      menu[storage_export] = me.store.showExportDialog.bind(me.store);

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
