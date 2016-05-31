/** @brief Regular expression to match html-tags */
var regex = /(<.*?>)/;

/** @brief Class for highlight spans */
var highlightClass = "highlight";


function isHTMLTag(str) {
  return regex.test(str);
}

KAT = {};

/**
 * @brief Constructor
 *
 * @param root - Root of DOM
 */
KAT.AnnotationHighlighter = function() {
  /**
   * All annotations that are currently highlighted.
   * @type {dictionary}
   * @name KAT.AnnotationHighlighter#annotations
   */
  this.annotations = [];

  //node/root
};

/**
 * @brief Gets the offset of the text (innerHTML) of the given element to
 *   the start of the outerHTML of given ancestor.
 *
 * @param element Element we want to compute the offset for.
 * @param ancestor Element to which offset is computed.
 * @return Character offset of element to ancestor.
 */
KAT.AnnotationHighlighter.prototype.getRelativeOffset = 
    function (element, ancestor) {

  var anchor = "TOO_WEIRD_TO_OCCUR_IN_AN_ACTUAL_DOCUMENT";
  element.innerHTML = anchor + element.innerHTML;

  var offset = ancestor.outerHTML.search(anchor);

  element.innerHTML = element.innerHTML.substring(anchor.length);
  return offset;
}

/**
 * @brief Gets the offset of actual text to the beginning of the next element.
          Effectively just jumps highlight-spans.
 * @param startOffset Offset from getRelativeOffset
 * @param commonAncestor Element to which startOffset is
 * @param offset Number of text characters to be offset
 * @return New relative offset.
 */
KAT.AnnotationHighlighter.prototype.getRelativeOffsetSpans = function (startOffset, commonAncestor, offset) { 
  var text = commonAncestor.outerHTML;
  text = text.substring(startOffset, text.length);
  
  var arr = text.split(regex);

  var answer = 0;
  var count = 0;
  var i = 0;
  while(count < offset && i < arr.length) {
    var el = arr[i];
    if(isHTMLTag(el)) {
      answer += el.length;
    } else {
      if((count + el.length) >= offset) { answer += offset; break; }
      else { answer += el.length; count += el.length; }
    }
    ++i;     
  }

  if(i >= arr.length) {
    console.log("Error in getRelativeOffsetSpans: Offset out of bounds");
    return 0;
  }

  return answer;
}

function isMathML(element) {
    /* Makes critical assumption here that MathML
     * can be recognized by initial m
     */
    return (element.substring(0,5) !== "<math" && 
     element.substring(0,6) !== "</math") &&
     (element.substring(0,2) === "<m" ||
      element.substring(0,3) === "</m");
}

KAT.AnnotationHighlighter.prototype.applyColor =
function (arr, id)
{
  function isOpeningTag(str) {
    //also shouldn't be mrow as otherwise too much is colored
    return (str[1] !== "/" && str.substring(0,5) !== "<mrow");
  }

  function isOpeningMarkup(el) {
    return isOpeningTag(el) && $(el).hasClass(highlightClass);
  }
  
  function isClosingMarkup(el) {
    return el == "</span>";
  }

  var buffer = "";
  $.each(arr, function(index, el) {
    if (isHTMLTag(el)) {
      if(isMathML(el) && isOpeningTag(el)) {
        //add class to math
        //TODO: add css rule for merging colors -> just check over hashtable (what about efficiency?)
        var dummyObject = $(el).addClass("math").addClass(id)[0];
        var tag = dummyObject.outerHTML.match(regex)[0];
        buffer += tag;
      } else {
        buffer += el;
      }
    } else {
      /* @bug this might be inaccurate sometimes
       * (what happens if there is L,</math> ?)
       */
      //skip if next AND prev are highlighted
      var prev = arr[Math.max(0, index-1)];
      var next = arr[Math.min(arr.length-1, index+1)];
      if(!(isMathML(prev) || isMathML(next))) {
        var newSpan = $("<span>").addClass("highlight").addClass(id)[0];
        newSpan.innerHTML = el;
        buffer += newSpan.outerHTML;
      } else {
        buffer += el;
      }
    }
  });

  return buffer;
}

/**
 * @brief Highlights the given interval on an xml document.
 *        Currently doesn't work with multiple annotations that have
 *        the same least common ancestor.
 * 
 * @param start Start of the interval. Consists of an array of an XPath
 *              pointing to an element and an integer representing an 
 *              offset.
 * @param end   End of the interval. Format as for start.
 * @return Void.
 */
KAT.AnnotationHighlighter.prototype.highlight = 
function (annotation)
{
  this.annotations.push(annotation);
  var start = annotation.start;
  var end = annotation.end;

  //TODO: split function up into subtasks

  var startElement = resolveXPath(document, start[0]);
  var startText = startElement.innerHTML;

  var endElement = resolveXPath(document, end[0]);
  var endText = endElement.innerHTML;

  var commonAncestor = $(startElement).parents().has(endElement).first()[0];

  var commonHTML = commonAncestor.outerHTML;

  /* Find offsets relative to least common ancestor. */  
  var startOffset = this.getRelativeOffset(startElement, commonAncestor);
  startOffset += this.getRelativeOffsetSpans(startOffset, commonAncestor, start[1]);
  var endOffset = this.getRelativeOffset(endElement, commonAncestor);
  endOffset += this.getRelativeOffsetSpans(endOffset, commonAncestor, end[1]);

  /* Split string around interval */
  var beforeIntervalString = commonHTML.substring(0, startOffset);
  var intervalString = commonHTML.substring(startOffset, endOffset);
  var afterIntervalString = commonHTML.substring(endOffset, 
                            commonHTML.length);

  var buffer = beforeIntervalString;

  /* Split string into html-tags and strings. */
  var arr = intervalString.split(regex);
  arr = arr.filter(function(element) { return element !== ""; });

  buffer += this.applyColor(arr, annotation["id"]);
  buffer += afterIntervalString;

  commonAncestor.outerHTML = buffer;
  $("span."+annotation["id"]).css("background-color", annotation["color"]);

  $(".math").filter("."+annotation["id"]).attr("mathbackground", annotation["color"]);

  console.log(end[0]);
  var s = getXPath(document, endElement);
  console.log(s);
}

/** @brief Remove the highlighting for a certain annotation again.
 *  @param {string} id The id of the annotation to be removed.
 *  @return Void.
 */
KAT.AnnotationHighlighter.prototype.removeAnnotation = 
function (id)
{
  //remove highlighting on math
  $(".math").filter("."+id).removeAttr("mathbackground").removeClass(id); 

  //remove highlighting of normal text
  $("span."+id).remove()

  //TODO: remove annotation from annotations-dictionary 
  //  delete removeStuff;
}

var resolveXPath = function(from, path) {
  //try and match for id
  var match = path.match(/^\/\/\*\[@id='([^']+)'\]$/);

  //if we have a match, return that one.
  if (match) {
    return document.getElementById(match[1]);
  }

  var element = $(from).get(0);
  var parts = path.split("/").splice(1);

  var part, tagName, elementIndex, _element;

  var compare = function(e) {
    if(((e.tagName || e.nodeName).toLowerCase() == "span") &&
         e.classList.contains(highlightClass)) {
      return false;
    }
    return (e.tagName || e.nodeName).toLowerCase() == tagName.toLowerCase();
  };

  for (var i = 0; i < parts.length; i++) {
    //extract tagName and elementIndex
    part = parts[i];
    tagName = part.split("[")[0];
    elementIndex = parseInt((part.split("[")[1] || "1]").split("]")[0]) - 1;

    //cache the old element
    _element = element;

    //find the next element
    element = Array.prototype.filter.call(element.children, compare)[
      elementIndex];

    //woops, it's undefined
    if (element === undefined) {
      console.log("undefined", _element, part, tagName, elementIndex);
      return undefined;
    }

  }

  return element;
};

var getXPath = function(from, to) {

  //the elements we start and end at.
  var element = $(to).get(0);
  var base = $(from).get(0);

  // check if have an id
  // return the id expression
  if (element.hasAttribute("id")) {
    return "//*[@id='" + element.id + "']";
  }

  /*
   adapted from the Firebug source code
   which is

   Copyright (c) 2009, Mozilla Foundation
   All rights reserved.
  */

  var paths = [];

  // Use nodeName (instead of localName) so namespace prefix is included (if any).
  for (; element && element !== base; element = element.parentNode) {
    var index = 0;
    for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
      // Ignore document type declaration.
      if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE) {
        continue;
      }

      if(((sibling.tagName || sibling.nodeName).toLowerCase() == "span") &&
         sibling.classList.contains("highlight")) {
        continue;
      }

      if (sibling.nodeName == element.nodeName)
        ++index;
    }

    var tagName = element.nodeName.toLowerCase();
    var pathIndex = (index ? "[" + (index + 1) + "]" : "");
    paths.splice(0, 0, tagName + pathIndex);
  }

  return paths.length ? "/" + paths.join("/") : null;
};

