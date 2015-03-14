/**
Copyright (c) 2014-15 by the KWARC Group (http://kwarc.info)

KAT is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

KAT is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with KAT.  If not, see <http://www.gnu.org/licenses/>
*/

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
    'description':  'A template you may use as a starting point for writing other modules. ', //A human readable description of the module.
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
  hoverText: function(target, JOBADInstance){
    //find the current annotations.
    var annots = this.store.findfromElement(target);

    //TODO: Make this smarter
    annots = annots[0];

    //if there is no annotation, do nothing
    if(!annots){
      return;
    }

    //TODO: Return content
    return annots.uuid; 
  },
  contextMenuEntries: function(target, JOBADInstance){
    var me = this;

    //texts
    var text_new        = "Add new Annotation";
    var text_remove     = "Delete Annotation";
    var text_ginfo      = "Display Annotation";
    var text_highlight  = "Highlight Annotation";
    var text_edit       = "Edit Annotation";

    //the menu to return
    var menu = {};

    //add the text
    menu[text_new] = false;
    menu[text_remove] = {};
    menu[text_highlight] = {};
    menu[text_ginfo] = {};
    menu[text_edit] = {};

    //MENUITEM for new item
    try{
      var selection = this.gui.getSelection();
    } catch(e){}

    if(selection){
      if(!(selection.start == selection.end && selection.startOffset == selection.endOffset)){
        menu[text_new] = {};

        $.each(this.gui.collection.findConcepts(), function(index, concept){
          menu[text_new][concept.getFullName()] = function(){
            //add a new Annotation
            var newAnnotation = me.store.addNew(selection, concept);

            //and draw it.
            newAnnotation.draw();
          }
        });
      }
    }

    //find all the annotations.
    var annots = this.store.findfromElement(target);

    if(annots.length != 0){
      //iterate over all the annotations.
      for(var i=0;i<annots.length;i++){
        (function(i){
          //add a menu item for each of the actions.
          var annotation = annots[i];
          menu[text_remove][annotation.uuid] = function(){
            annotation.delete();
          };
          menu[text_highlight][annotation.uuid] = function(){
            annotation.flash();
          };
          menu[text_edit][annotation.uuid] = function(){
            annotation.edit();
          };
          menu[text_ginfo][annotation.uuid] = function(){
            alert(
              "UUID:    "+annotation.uuid+"\n"+
              "Concept: "+annotation.concept.getFullName()+"\n"
            );
          };
        })(i);
      }

    } else {
      menu[text_remove] = false;
      menu[text_highlight] = false;
      menu[text_ginfo] = false;
      menu[text_edit] = false;
    }

    //return the menu.
    return menu;
  }
};

JOBAD.modules.register(KAT.module); //register the module.
