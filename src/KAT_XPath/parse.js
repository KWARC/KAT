/**
* arange annotation scheme
* ARANGE              = arange(ARANGE_START, ARANGE_END)
* ARANGE_START        = ARANGE_POINT
* ARANGE_END          = ARANGE_POINT
* ARANGE_POINT        = ARANGE_STRINGINDEX | ARANGE_LEFT | ARANGE_RIGHT | XPATH
* ARANGE_STRINGINDEX  = string-index(XPATH, INT)
* ARANGE_LEFT         = left(XPATH)
* ARANGE_RIGHT        = right(XPATH)
* XPATH               = [^,\)]*
* adapted mostly from http://www.tei-c.org/release/doc/tei-p5-doc/en/html/SA.html#SATSRN
**/

// arange(ARANGE_POINT)
var RX_arange = /^arange\((.*)\)$/;
// string-index(XPATH, \d*)
var RX_StringIndex = /^string-index\(([^,]*),\s*(\d+)\)(,|$)/;
// left(XPATH)
var RX_Left = /^left\(([^\)]*)\)(,|$)/;
// right(XPATH)
var RX_Right = /^right\(([^\)]*)\)(,|$)/;
// XPath
var RX_XPath = /^([^,]*)(,|$)/;

/**
 * @brief Parses a arange() scheme into a list of pairs of [XPath, index_or_spec]
 *
 * @param string s String we want to parse
 * @return Returns a list of pairs [XPath, index_or_spec] where index_or_spec is either null (meaning the boundary of the element), a non-negative integer or the string 'left' or 'right'
 * 
 */
var XPointerParse = function(s){
  // pairs we want to return
  var pairs = []; 
  
  // remove the outer range(...)
  var rangeMatch = s.match(RX_arange);
  
  // and check the inner path
  if(!rangeMatch){
    throw new Error("Given string"); 
  }
  
  var substr = rangeMatch[1]; 
  
  var i = 0; 
  
  while (substr.length > 0) {
    
    // trim the string
    substr = substr.trim(); 
    
    // check if we have a string-index
    var siMatch = substr.match(RX_StringIndex); 
    
    if(siMatch){
      // add a new pair
      pairs.push([
        siMatch[1],
        parseInt(siMatch[2]) // offset
      ]); 
      
      // and we are done with this one
      substr = substr.replace(RX_StringIndex, ''); 
      continue; 
    }
    
    // check if we have a left
    var lMatch = substr.match(RX_Left); 
    
    if(lMatch) {
      // add a new pair
      pairs.push([
        lMatch[1],
        'left'
      ]); 
      
      // and we are done with this one
      substr = substr.replace(RX_Left, ''); 
      continue; 
    }
    
    // check if we have a right
    var rMatch = substr.match(RX_Right); 
    if(rMatch) {
      // add a new pair
      pairs.push([
        rMatch[1],
        'right'
      ]); 
      
      // and we are done with this one
      substr = substr.replace(RX_Right, ''); 
      continue; 
    }
    
    // check if we have an xpath
    var xMatch = substr.match(RX_XPath); 
    if(xMatch) {
      // add a new pair
      pairs.push([
        xMatch[1],
        null
      ]); 
      
      // and we are done with this one
      substr = substr.replace(RX_XPath, ''); 
      continue; 
    }
    
    throw Error('XPointer is not a valid arange(...)')
  }
  
  // check that we have 2
  if(pairs.length != 2) {
    throw Error('XPointer is not a valid arange(...)'); 
  }
  
  // return the pairs
  return pairs; 
}

/**
 * @brief Turns a parsed arange() object back into a string
 *
 * @param Array list of pairs [XPath, Index_or_spec] containing the points
 * @return Returns a string
 * 
 */
var XPointerCreate = function(parts){
  
  // create variables needed
  var strParts = []; 
  var xpth, index;
  
  // iterate
  for(var i = 0; i < parts.length; i++) {
    // extract parts
    xpath = parts[i][0]; 
    index = parts[i][1]; 
    
    // reassemble
    if(index === null) {
      strParts.push(xpath)
    } else if (index === 'left') {
      strParts.push('left('+xpath+')')
    } else if (index == 'right') {
      strParts.push('right('+xpath+')')
    } else {
      strParts.push('string-index('+xpath+','+index+')')
    }
  }
  
  // add the outer arange(...) thing
  return 'arange('+strParts.join(',')+')'; 
  
}

// console.log(XPointerParse('arange(//div[1], //div[2])'))
// console.log(XPointerCreate([ [ '//div[1]', null ], [ '//div[2]', null ] ]))
// console.log(XPointerParse('arange(left(//div[1]), right(//div[2]))'))
// console.log(XPointerCreate([ [ '//div[1]', 'left' ], [ '//div[2]', 'right' ] ]))
// console.log(XPointerParse('arange(//div[1], right(//div[2]))'))
// console.log(XPointerCreate([ [ '//div[1]', null ], [ '//div[2]', 'right' ] ]))
// console.log(XPointerParse('arange(string-index(//div[1], 134),//div[2])'))
// console.log(XPointerCreate([ [ '//div[1]', 134 ], [ '//div[2]', null ] ]))