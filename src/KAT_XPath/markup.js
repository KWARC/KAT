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

  var commonAncestor = $(startElement).parents().has(endElement).first();

  var shadow = commonAncestor.context.createShadowRoot();
  var commonHTML = commonAncestor.context.outerHTML;

  /* Find absolute offsets relative to least common ancestor. 
   * @bug This will not always work. 
   */  
  var startOffset = commonHTML.search(startText) + start[1];
  var endOffset = commonHTML.search(endText) + end[1];

  /* Split string around interval */
  var beforeIntervalString = commonHTML.substring(0, startOffset);
  var intervalString = commonHTML.substring(startOffset,
                       commonHTML.length - endOffset);
  var afterIntervalString = commonHTML.substring(commonHTML.length - endOffset, 
                            commonHTML.length);

  shadow.innerHTML = beforeIntervalString;

  console.log(beforeIntervalString);
  console.log(intervalString);
  console.log(afterIntervalString);

  /* Should match every html-tag. */
  var regex = /(<.*?>)/g;
  
  /* Split string into html-tags and strings and wrap strings. */
  var arr = intervalString.split(regex);
  $.each(arr, function(index, el) {
    if(regex.test(el)) {
      shadow.innerHTML += el;  
    } else {
      shadow.innerHTML += "<span>" + el + "</span>";
    }
  });

  shadow.innerHTML += afterIntervalString;

  shadow.innerHTML += '<style>' +
    'span {color: Red;}' +
    '</style>';
}
