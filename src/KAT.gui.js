/**
Copyright (c) 2014 by the KWARC Group (http://kwarc.info)

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

/** Creates a new Editor instance.
*
* @param {jQuery} element - The element this editor is bound to.
* @param {KAT.model.OntologyCollection} ontologyCollection - The ontologyCollection this editor can annotate.
*
* @Alias KAT.gui
* @class
*/
KAT.gui = function(element, ontologyCollection){

  //intialise and make sure everything is set up
  ontologyCollection.init();

  /**
  * The ontologyCollection this editor can annotate.
  *
  * @type {KAT.model.OntologyCollection}
  * @name KAT.gui#collection
  */
  this.collection = ontologyCollection;

  /**
  * The element this editor is bound to.
  *
  * @type {jQuery}
  * @name KAT.gui#element
  */
  this.element = element;

  /**
  * Currently open bubble element.
  *
  * @type {jQuery}
  * @name KAT.gui#bubble
  */
  this.bubble = $([]);

  /**
  * Indicates if this KAT.gui is currently intialised.
  *
  * @type {boolean}
  * @name KAT.gui#flagAlive
  */
  this.flagAlive = false;

  /**
  * Indicates if this KAT.gui currently has an open Bubble element.
  *
  * @type {boolean}
  * @name KAT.gui#flagBubbleOpen
  */
  this.flagBubbleOpen = false;

  /**
  * Indicates if this KAT.gui currently has an open Dialog element.
  *
  * @type {boolean}
  * @name KAT.gui#flagDialogOpen
  */
  this.flagDialogOpen = false;

}

/**
* Initalises the GUI
*
*
* @function
* @instance
* @name init
* @memberof KAT.gui
*/
KAT.gui.prototype.init = function(){
  //we are already alive.
  if(this.flagAlive){
    return;
  }

  KAT.gui.prototype.init._01.bind(this)(function(selection){
    if(!this.flagDialogOpen){
      //TODO: Check if the selection is within the bubble.

      if(this.flagBubbleOpen){
        this.closeBubble(); //force close the bubble
      }

      this.showBubble(selection);
    }
    // a dialog is open, so we don't care.
  });

}

KAT.gui.prototype.init._01 = function(handler){
  var theElement = this.element;
  var me = this;

  var getSelection = function(){
    var selection = window.getSelection().getRangeAt(0);

    var within = KAT.gui.getXPath(theElement, selection.commonAncestorContainer);
    var start = KAT.gui.getXPath(theElement, selection.startContainer.parentElement);
    var end = KAT.gui.getXPath(theElement, selection.endContainer.parentElement);

    return {
      "within": within || start,
      "start": start,
      "startOffset": selection.startOffset,
      "end": end,
      "endOffset": selection.endOffset
    }
  }

  var pollSelectionChange = function(){
    var selection = getSelection();

    if(!selection.within){
      return false;
    }

    if(selection.start == selection.end && selection.startOffset === selection.endOffset){
      //we have start === end, so no selection
      return false;
    }

    handler.call(me, selection);
  }

  theElement.on("mousedown.KAT.selectionChange", function(){
    theElement.one("mouseup.KAT.selectionChange", function(){
      pollSelectionChange();
    });
  });
}


/**
* Deinitalises the GUI
*
*
* @function
* @instance
* @name deinit
* @memberof KAT.gui
*/
KAT.gui.prototype.deinit = function(){
  if(!this.flagAlive){
    return;
  }

  KAT.gui.prototype.deinit._01.bind(this)();
}

KAT.gui.prototype.deinit._01 = function(){
  this.element.off("mousedown.KAT.selectionChange", "mouseup.KAT.selectionChange");
}


/**
* Shows a bubble.
*
* @param {Object} selection - current selection
*
* @function
* @instance
* @name showBubble
* @memberof KAT.gui
*/
KAT.gui.prototype.showBubble = function(selection){

  var me = this;

  //the element where we will put the bubble
  var bubbleElement = $(KAT.gui.resolveXPath(this.element, selection.start));

  //we do not seem to have a container
  //so no selection
  //this should not happen, but some of the APIs seem buggy.
  if(bubbleElement.length == 0){
    return;
  }

  //we have opened the bubble or will do so asap
  this.flagBubbleOpen = true;

  //the Size of the bubble, in pixels
  var bubbleSize = 40;

  //the margin of the bubble, in pixels
  var bubbleMargin = 10;


  //find the position of the element
  var position = bubbleElement.position();

  //Check that we are not to far on the top
  position.top = Math.max(bubbleMargin, position.top - (bubbleSize + bubbleMargin));

  //Check that we are not to far left
  position.left = Math.max(0, position.left);

  //TODO: Check right, up, down


  //Create the bubble
  //and append it to the body
  this.bubble = $("<div>").css({
    "position": "absolute",
    "width": 40,
    "height": 40,
    "background-color": "red"
  }).css(position).appendTo("body").click(function(){
    //close the bubble
    me.closeBubble();

    //show a new annotation dialog.
    me.showNewAnnotationDialog();
  });

  //We want to close the bubble
  //whenever we have clicked anywhere else.
  $("body").on("mousedown.KAT.bubble", function(evt){
    if(me.bubble.is(evt.target)){
      //we are the bubble => do nothing
      return;
    }
    me.closeBubble();
  });
}

/**
* Closes the bubble.
*
*
* @function
* @instance
* @name closeBubble
* @memberof KAT.gui
*/
KAT.gui.prototype.closeBubble = function(){
  //we have closed the bubble
  this.flagBubbleOpen = false;

  //remove the bubble
  this.bubble.remove();

  //reset the bubble property
  this.bubble = $([]);

  //we do not need to click it anymore
  $("body").off("mousedown.KAT.bubble");
}

/**
* Shows a new annotation dialog.
*
* @param {object} selection - Current selection
*
* @function
* @instance
* @name showNewAnnotationDialog
* @memberof KAT.gui
*/
KAT.gui.prototype.showNewAnnotationDialog = function(selection){
  if(this.flagDialogOpen){
    return;
  }

  //there is a dialog open
  this.flagDialogOpen = true;

  console.log("NEW DIALOG");

}

/**
* Gets an XPath from one element to another.
*
* @param {jQuery} from - The element to start at.
* @param {jQuery} to - The element to end at.
*
* @returns {string} - the xPath
* @function
* @static
* @name getXPath
* @memberof KAT.gui
*/
KAT.gui.getXPath = function(from, to){
  var start = $(from);
  var end = $(to);

  if(start.find(end).length == 0){
    return false;
  }

  var path = "";
  var currentElement = end.get(0);
  var currentParent = undefined;
  var tagName = undefined;
  var currentChildren = [];

  while(!currentElement.isSameNode(start.get(0))){

    //set the parent
    currentParent = currentElement.parentNode;

    //find what type the child is.
    tagName = (currentElement.tagName || currentElement.nodeName).toLowerCase();

    //find all the children of that type
    currentChildren = Array.prototype.filter.call(currentParent.children,
      function(e){
        return (e.tagName || e.nodeName).toLowerCase() == tagName.toLowerCase();
      }
    );

    //find the index of the currentElement
    for(var i=0;i<currentChildren.length; i++){
      if(currentChildren[i].isSameNode(currentElement)){
        break;
  var index = -1;
      }
    }

    //xpaths are one-based
    i++;

    //and add to the path
    path = "/"+tagName+"["+i+"]" + path;


    //and next one.
    currentElement = currentParent;
  }

  return path;
}

/**
* Gets an XPath from one element to another.
*
* @param {jQuery} from - The element to start at.
* @param {string} path - XPath to walk along.
*
* @returns {document} - the element.
* @function
* @static
* @name resolveXPath
* @memberof KAT.gui
*/
KAT.gui.resolveXPath = function(from, path){

  var element = $(from).get(0);
  var parts = path.split("/").splice(1);
  var part, tagName, elementIndex;

  for(var i=0;i<parts.length;i++){
    //extract tagName and elementIndex
    part = parts[i];
    tagName = part.split("[")[0];
    elementIndex = parseInt((part.split("[")[1] || "1]").split("]")[0]) - 1;

    //find the next element
    element = Array.prototype.filter.call(element.children,
      function(e){
        return (e.tagName || e.nodeName).toLowerCase() == tagName.toLowerCase();
      }
    )[elementIndex];

    //woops, it's undefined
    if(element === undefined){
      console.log(_element, part);
      return undefined;
    }

  }

  return element;
}

/**
* Creates a new dialog.
*
* @param {string} title - Title of dialog
* @param {string} text - Content of dialogs
* @param {string[]} buttons - Text of buttons
* @param {function} on_close - callback on close.
*
* @returns {object} - a dialog element
* @function
* @static
* @name dialog
* @memberof KAT.gui
*/
KAT.gui.dialog = function(title, content, buttons, on_button){

  //TODO: Documentation on $self. 

  var $self = {};

  //Crate Buttons
  var $buttons = $([]);

  for(var i=0;i<buttons.length;i++){
    (function(i){
      $buttons = $buttons.add(
        $("<button class='btn btn-"+(i==0?"primary":"default")+"'>")
        .text(buttons[i])
        .click(function(){
          on_button.call($self, buttons[i], i);
        })
      );
    }).call(this, i)
  }

  //reverse the array.
  $buttons = $($buttons.get().reverse())

  //set up other things.
  var $title = $('<h4 class="modal-title"></h4>').text(title);
  var $content = $("<p>").text(content);

  //Create the element.
  var $dialog = $('<div class="modal fade">')
  .append(
    $('<div class="modal-dialog">').append(
      $('<div class="modal-content">')
      .append(
        $('<div class="modal-header>').append(
          $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>').click(function(){
            on_button.call($self, "", -1);
          }),
          $title
        ),
        $('<div class="modal-body">').append($content),
        $('<div class="modal-footer">').append($buttons)
      )
    )
  )

  var $title = $("<div>");

  //append the dialog.
  $dialog.appendTo("body").modal({
    backdrop: true,
    keyboard: true
  });

  $self = {
    "$dialog": $dialog, //the dialog element
    "$title": $title, //the title element
    "$content": $content,  //the content element.
    "$buttons": $buttons, // buttons
    "close": function(){ //function to close the dialog.
      $dialog
      .one("hidden.bs.modal", function(){
        $dialog.remove();
      }).modal("hide");
    }
  }

  return $self;
}
