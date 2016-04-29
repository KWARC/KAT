/**
 * @brief Gets the offset of the text (innerHTML) of the given element to
 *   the start of the outerHTML of given ancestor.
 *
 * @param element Element we want to compute the offset for.
 * @param ancestor Element to which offset is computed.
 */
function getRelativeOffset(element, ancestor) {
  var anchor = "TOO_WEIRD_TO_OCCUR_IN_AN_ACTUAL_DOCUMENT";
  element.innerHTML = anchor + element.innerHTML;

  var offset = ancestor.outerHTML.search(anchor);

  element.innerHTML = element.innerHTML.substring(anchor.length);
  return offset;
}

/**
 * @brief Highlights the given interval on an xml document.
 * 
 * @param start Start of the interval. Consists of an array of an XPath
 *              pointing to an element and an integer representing an 
 *              offset.
 * @param end   End of the interval. Format as for start.
 * @return Void.
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

  /* Find absolute offsets relative to least common ancestor. 
   */  
  var startOffset = getRelativeOffset(startElement, commonAncestor) + start[1];
  var endOffset = getRelativeOffset(endElement, commonAncestor) + end[1];

  /* Split string around interval */
  var beforeIntervalString = commonHTML.substring(0, startOffset);
  var intervalString = commonHTML.substring(startOffset, endOffset);
  var afterIntervalString = commonHTML.substring(endOffset, 
                            commonHTML.length);

  var shadowBuffer = beforeIntervalString;

  /* Should match every html-tag. */
  var regex = /(<.*?>)/g;
  
  /* Split string into html-tags and strings and wrap strings. */
  var arr = intervalString.split(regex);
  console.log(arr);
  $.each(arr, function(index, el) {
    if(regex.test(el)) {
      shadowBuffer += el;  
    } else {
      shadowBuffer += "<span class='highlight'>" + el + "</span>";
    }
  });
  shadowBuffer += afterIntervalString;

  shadow.innerHTML = shadowBuffer;
  shadow.innerHTML += '<style>' +
    '.highlight {color: Red;}' +
    '</style>';
}
