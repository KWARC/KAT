/** Creates a new Editor instance.
*
* @param {jQuery} element - The element this editor is bound to.
* @param {KAT.model.KAnnSpecCollection} KAnnSpecCollection - The KAnnSpecCollection this editor can annotate.
*
* @Alias KAT.gui
* @class
*/
KAT.gui = function(element, KAnnSpecCollection){

  //intialise and make sure everything is set up
  KAnnSpecCollection.init();

  /**
  * The KAnnSpecCollection this editor can annotate.
  *
  * @type {KAT.model.KAnnSpecCollection}
  * @name KAT.gui#collection
  */
  this.collection = KAnnSpecCollection;

  /**
  * The element this editor is bound to.
  *
  * @type {jQuery}
  * @name KAT.gui#element
  */
  this.element = element;
};

/**
* gets the current selection.
*
*
* @function
* @instance
* @name getSelection
* @memberof KAT.gui
*/
KAT.gui.prototype.getSelection = function(){
  var selection = window.getSelection().getRangeAt(0);
  var theElement = this.element;

  var container = KAT.gui.getXPath(theElement, selection.commonAncestorContainer);
  var start = KAT.gui.getXPath(theElement, selection.startContainer.parentElement);
  var end = KAT.gui.getXPath(theElement, selection.endContainer.parentElement);

  var sel = {
    "container": container,
    "start": start,
    "startOffset": selection.startOffset,
    "end": end,
    "endOffset": selection.endOffset,
    "isEmpty": false
  };

  if (start == end && selection.startOffset == selection.endOffset){
    sel.isEmpty = true;
  }

  return sel;
};

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

  //the elements we start and end at.
  var element = $(to).get(0);
  var base = $(from).get(0);

  // check if have an id
  // return the id expression
  if(element.hasAttribute("id")){
    return "//*[@id='"+element.id+"']";
  }

  /*
   adapted from the Firebug source code
   which is

   Copyright (c) 2009, Mozilla Foundation
   All rights reserved.
  */

  var paths = [];

  // Use nodeName (instead of localName) so namespace prefix is included (if any).
  for (; element && element !== base; element = element.parentNode)
  {
    var index = 0;
    for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling)
    {
      // Ignore document type declaration.
      if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
      continue;

      if (sibling.nodeName == element.nodeName)
      ++index;
    }

    var tagName = element.nodeName.toLowerCase();
    var pathIndex = (index ? "[" + (index+1) + "]" : "");
    paths.splice(0, 0, tagName + pathIndex);
  }

  return paths.length ? "/" + paths.join("/") : null;
};

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

  //try and match for id
  var match = path.match(/^\/\/\*\[@id='([^']+)'\]$/);

  //if we have a match, return that one.
  if(match){
    return document.getElementById(match[1]);
  }

  var element = $(from).get(0);
  var parts = path.split("/").splice(1);

  var part, tagName, elementIndex, _element;


  var compare = function(e){
    return (e.tagName || e.nodeName).toLowerCase() == tagName.toLowerCase();
  };

  for(var i=0;i<parts.length;i++){
    //extract tagName and elementIndex
    part = parts[i];
    tagName = part.split("[")[0];
    elementIndex = parseInt((part.split("[")[1] || "1]").split("]")[0]) - 1;

    //cache the old element
    _element = element;

    //find the next element
    element = Array.prototype.filter.call(element.children, compare)[elementIndex];



    //woops, it's undefined
    if(element === undefined){
      console.log("undefined", _element, part, tagName, elementIndex);
      return undefined;
    }

  }

  return element;
};

KAT.gui.prototype.getRange = function(selection){

  //get the container
  var container = $(KAT.gui.resolveXPath(this.element, selection.container));

  //and the elements inside
  var containedElements = container.find("*").andSelf();

  //find the start index
  var startIndex = containedElements.index(
    KAT.gui.resolveXPath(this.element, selection.start)
  );

  //find the end element
  var endElement = $(KAT.gui.resolveXPath(this.element, selection.end));

  //find the end index
  var endIndex = containedElements.index(endElement);

  //restrict to elements in this range.
  containedElements = containedElements.slice(startIndex, endIndex);

  //and remove all elements who do not have all children
  return containedElements.filter(function(index, element){
    var children = $(element).children();

    //do we contain all children?
    return children.length == containedElements.filter(children).length;
  }).add(endElement.find("*").andSelf());
};

/**
* Checks if a node is contained in the given range.
*
* @param {range} range - Range to check.
* @param {node} node - Node to check.
*
* @returns {boolean}
* @function
* @static
* @name nodeInRange
* @memberof KAT.gui
*/
KAT.gui.nodeInRange = function(range, node){
  //adapted from http://stackoverflow.com/a/1483487

  var nodeRange;
  if (range.intersectsNode) {
      return range.intersectsNode(node);
  } else {
      nodeRange = node.ownerDocument.createRange();
      try {
          nodeRange.selectNode(node);
      } catch (e) {
          nodeRange.selectNodeContents(node);
      }

      return range.compareBoundaryPoints(Range.END_TO_START, nodeRange) == -1 &&
          range.compareBoundaryPoints(Range.START_TO_END, nodeRange) == 1;
  }
};

/**
* Creates a new dialog.
*
* @param {string} title - Title of dialog
* @param {string} text - Content of dialogs
* @param {string[]} buttons - Text of buttons
* @param {KAT.gui~buttonCallback} on_button - callback when presisng a button. Gets the text of the button and the index.
*
* @returns {KAT.gui.DialogObject} - a dialog element
* @function
* @static
* @name dialog
* @memberof KAT.gui
*/
KAT.gui.dialog = function(title, content, buttons, on_button){

  var $self = {};

  //Crate Buttons
  var $buttons = $([]);

  $.each(buttons, function(i){
    $buttons = $buttons.add(
      $("<button class='btn btn-"+(i===0?"primary":"default")+"'>")
      .text(buttons[i])
      .click(function(){
        on_button.call($self, buttons[i], i);
      })
    );
  });

  //reverse the array.
  $buttons = $($buttons.get().reverse());

  //set up other things.
  var $title = $('<h4 class="modal-title"></h4>').text(title);
  var $content = $("<p>").text(content);

  //Create the element.
  var $dialog = $('<div class="modal hide large">')
  .append(
    $('<div class="modal-dialog">').append(
      $('<div class="modal-content">')
      .append(
        $('<div class="modal-header>').append(
          $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>').click(function(){
            on_button.call($self, "", -1);
            return false;
          }),
          $title
        ),
        $('<div class="modal-body">').append($content),
        $('<div class="modal-footer">').append($buttons)
      )
    )
  );

  //append the dialog
  $dialog.appendTo(
    $("<div>").BS().appendTo("body")
  ).modal()
  .on("hidden", function(){
    //BS Cleanup
    JOBAD.UI.BSStyle();
  });

  //Some bootstrap magic
  //to show the dialog properly.
  JOBAD.UI.BSStyle();

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
  };

  return $self;
};

/**
* Creates a new select dialog.
*
* @param {string} title - Title of dialog
* @param {string} query - Query the user should answer.
* @param {string[]} options - Options available to the user.
* @param {string[]|function} [descriptions] - Descriptions for each option or a callback that delivers a description.
* @param {KAT.gui~selectCallback} callback - callback when the dialog is closed.
*
* @returns {KAT.gui.DialogObject} - the underlying dialog element.
* @function
* @static
* @name selectDialog
* @memberof KAT.gui
*/
KAT.gui.selectDialog = function(title, query, options, descriptions, callback){
  var selectedIndex = 0; //the currently selectedIndex
  var redraw;

  if(typeof descriptions == "function" && typeof callback == "undefined"){
    callback = descriptions;
    descriptions = function(){
      return "";
    };
  }
  if(Array.isArray(descriptions)){
    var oldDescriptions = descriptions;
    descriptions = function(text, index){
      return oldDescriptions[index];
    };
  }

  //build the dialog.
  $self = KAT.gui.dialog(title, query, ["OK", "Cancel"], function(text, id){
    //close the dialog.
    $self.close();

    if(id === 0){
      callback.call($self, options[selectedIndex], selectedIndex);
    } else {
      //We canceled or just closed.
      callback.call($self, "", -1);
    }
  });

  var $span = $("<span>");
  var $textspan = $("<span style='margin-left: 10px; '>");
  var $ul = $('<ul class="dropdown-menu" role="menu">');

  var $div = $("<div class='dropdown'>").append(
    $('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">').append(
      $span,
      '<span class="caret"></span>'
    ),
    $ul,
    $textspan
  );

  $.each(options, function(i, e){
    $ul.append(
      $('<li role="presentation">').append(
        $('<a role="menuitem" tabindex="-1" href="#">')
        .text(e)
        .click(function(){
          selectedIndex = i;
          redraw();
        })
      )
    );
  });

  $self.$content.empty().append(
    $("<h3>").text(query),
    $div
  );

  //a drawing method.
  redraw = function(){
    $span.text(options[selectedIndex]);
    $textspan.text(descriptions(options[selectedIndex], selectedIndex));
  };

  //and draw it again.
  redraw();

  return $self;
};

/**
* A dialog object.
* @typedef {Object} KAT.gui.DialogObject
* @property {jQuery} $dialog - The dialog element.
* @property {jQuery} $title - The title element ( use .text() to change the title)
* @property {jQuery} $content - The content element (use .html() or equivalent to change content)
* @property {jQuery} $buttons - A list of button elements.
* @property {function} close - When called, closed the dialog.
*/


/**
* Represents a text selection.
* @typedef {Object} KAT.gui.selection
* @property {jQuery} container - XPath to smallest element the entire selection is contained in.
* @property {string} start - XPath to the start element of the selection.
* @property {number} startOffset - Offset in the start element where the selection begins.
* @property {string} end - XPath to the end element of the selection.
* @property {number} endOffset - Offset in the end element where the selection ends.
*/


/**
* Called when a button is clicked.
* @callback KAT.gui~buttonCallback
* @param {string} selectedButton - Text of button selected or an empty string.
* @param {number} selectedIndex - Index of button clicked or -1.
*/


/**
* Called when a selection is made.
* @callback KAT.gui~selectCallback
* @param {string} selectedButton - Text of option selected or an empty string.
* @param {number} selectedIndex - Index of option clicked or -1.
*/
