/** @brief Regular expression to match html-tags */
var regex = /(<.*?>)/;

/**
 * @brief Gets the offset of the text (innerHTML) of the given element to
 *   the start of the outerHTML of given ancestor.
 *
 * @param element Element we want to compute the offset for.
 * @param ancestor Element to which offset is computed.
 * @return Character offset of element to ancestor.
 */
function getRelativeOffset(element, ancestor) {
  var anchor = "TOO_WEIRD_TO_OCCUR_IN_AN_ACTUAL_DOCUMENT";
  element.innerHTML = anchor + element.innerHTML;

  var offset = ancestor.outerHTML.search(anchor);

  element.innerHTML = element.innerHTML.substring(anchor.length);
  return offset;
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

function applyColor(arr, color) {
  function isHTMLTag(str) {
    return regex.test(str);
  }
  
  function isOpeningTag(str) {
    //also shouldn't be mrow as otherwise too much is colored
    return (str[1] !== "/" && str.substring(0,5) !== "<mrow");
  }

  var buffer;

  $.each(arr, function(index, el) {
    if (isHTMLTag(el)) {
      if(isMathML(el) && isOpeningTag(el)) {
        var dummyObject = $(el).attr("mathbackground", color)[0];
        var tag = dummyObject.outerHTML.match(regex)[0];
        buffer += tag;
      } else {
        buffer += el;  
      }
    } else {
      /* @bug this might be inaccurate sometimes
       * (what happens if there is L,</math> ?)
       */
      if(!(isMathML(arr[Math.max(0, index-1)]) ||
           isMathML(arr[Math.min(arr.length-1, index+1)]))) {
        buffer += "<span class='highlight'>" + el + "</span>";
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
 * @bug For some XPaths the element cannot be resolved (involve MathML).
 */
function highlight(start, end)
{
  //TODO: split function up into subtasks
  console.log(start + "\n" + end);

  var startIterator = document.evaluate(start[0], document, null,
    XPathResult.ANY_TYPE, null);
  var startElement = startIterator.iterateNext();
  var startText = startElement.innerHTML;

  var endIterator = document.evaluate(end[0], document, null,
    XPathResult.ANY_TYPE, null);
  var endElement = endIterator.iterateNext();
  var endText = endElement.innerHTML;

  var commonAncestor = $(startElement).parents().has(endElement).first()[0];

  var shadow = commonAncestor.createShadowRoot();
  var commonHTML = commonAncestor.outerHTML;

  /* Find offsets relative to least common ancestor. */  
  var startOffset = getRelativeOffset(startElement, commonAncestor) + start[1];
  var endOffset = getRelativeOffset(endElement, commonAncestor) + end[1];

  /* Split string around interval */
  var beforeIntervalString = commonHTML.substring(0, startOffset);
  var intervalString = commonHTML.substring(startOffset, endOffset);
  var afterIntervalString = commonHTML.substring(endOffset, 
                            commonHTML.length);

  var shadowBuffer = beforeIntervalString;

  /* Split string into html-tags and strings. */
  var arr = intervalString.split(regex);
  arr = arr.filter(function(element) { return element !== ""; });

  shadowBuffer += applyColor(arr, "#FF0000");
  shadowBuffer += afterIntervalString;

  shadow.innerHTML = shadowBuffer;
  shadow.innerHTML += '<style>' +
    '.highlight {background-color: #FF0000;}' +
    '</style>';
}
