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
    this.store = annotationStore;
    this.gui = this.store.gui;
  },
  contextMenuEntries: function(target, JOBADInstance){
    var me = this;

    //texts
    var text_new        = "Add new Annotation";
    var text_remove     = "Delete Annotation";
    var text_highlight  = "Highlight Annotation";
    var text_edit       = "Edit Annotation";
    var text_rdf        = "View RDF";

    //the menu to return
    var menu = {};

    //add the text
    menu[text_new] = false;
    menu[text_remove] = {};
    menu[text_highlight] = {};
    menu[text_edit] = {};

    //MENUITEM for new item
    var selection;

    try{
      selection = this.gui.getSelection();
    } catch(e){}

    if(selection){
      if(!(selection.start == selection.end && selection.startOffset == selection.endOffset)){
        menu[text_new] = {};

        $.each(this.gui.collection.findConcepts(), function(index, concept){
          menu[text_new][concept.getFullName()] = function(){
            //load new Annotation form


            var values = KAT.sidebar.genNewAnnotationForm(me,selection,concept);
            //var newAnnotation = me.store.addNew(selection, concept);
            //and draw it.
            //newAnnotation.draw();
          };
        });
      }
    }

    //find all the annotations.
    var annots = this.store.findfromElement(target);

    if(annots.length !== 0){
      //iterate over all the annotations.
      $.each(annots, function(i, annotation){
        //add a menu item for each of the actions.
        menu[text_remove][annotation.uuid] = function(){
          annotation.delete();
        };
        menu[text_highlight][annotation.uuid] = function(){
          annotation.flash();
        };
        menu[text_edit][annotation.uuid] = function(){
          annotation.edit();
        };
      });

    } else {
      menu[text_remove] = false;
      menu[text_highlight] = false;
      menu[text_edit] = false;
    }

    menu.Storage = {
      "Import": function(){
        var json = prompt("Paste the annotations below: ");

        if(json){
          //parse the json
          json = JSON.parse(json);

          for(var i=0;i<json.length;i++){
            //add the new annotation
            json[i] = me.store.addFromJSON(json[i]);
            //and draw it.
            json[i].draw();
          }

        }
      },
      "Export": function(){
        var rdfDoc = me.store.toRDF();
        console.log(rdfDoc);
        prompt("Press CTRL+C to export annotations: ", rdfDoc);
      }
    };

    //return the menu.
    return menu;
  }
};

JOBAD.modules.register(KAT.module); //register the module.