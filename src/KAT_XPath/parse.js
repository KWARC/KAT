var arange = (function(){

  /**
    * arange annotation scheme
    * ARANGE              = arange(ARANGE_START, ARANGE_END)
    * ARANGE_START        = ARANGE_POINT
    * ARANGE_END          = ARANGE_POINT
    * ARANGE_POINT        = ARANGE_STRINGINDEX | XPATH
    * ARANGE_STRINGINDEX  = string-index(XPATH, INT)
    * XPATH               = // any XPath
    * INT                 = // any integer
    * adapted mostly from http://www.tei-c.org/release/doc/tei-p5-doc/en/html/SA.html#SATSRN
    **/

  // strings for regular expression
  var res_IN = '(\\-?\\d+)'; // any integer
  var res_XP = '([^,]*[^\\s,])'; // any xpath
  var res_SI = 'string\\-index\\(\\s*'+res_XP+'\\s*,\\s*'+res_IN+'\\s*\\)'; // string-index(XPATH,INT)
  var res_PT = '('+res_SI+'|'+res_XP+')'; // STRINGINDEX | XPATH
  var res_AR = 'arange\\(\\s*'+res_PT+'\\s*,\\s*'+res_PT+'\\s*\\)'; // arange(ARANGE_POINT, ARANGE_POINT)

  // make a regular expression
  var re_AR = new RegExp('^'+res_AR+'$');

  return {
    /**
     * @brief Parses a arange() scheme into a list of pairs of [XPath, index_or_spec]
     *
     * @param string s String we want to parse
     * @return Returns a list of pairs [XPath, index_or_spec] where omdex is either null (meaning the boundary of the element) or an integer
     *
     */
    'parse': function(s){

      // match against the regular expression
      var m = s.match(re_AR);

      // if we do not match, it is not an arange
      if (!m) {
        return null;
      }

      // initialise starting and ending point
      var start = [null, null];
      var end   = [null, null];

      // read in start
      if(m[2]){
        start[0] = m[2];
        start[1] = parseInt(m[3]);
      } else {
        start[0] = m[1];
      }

      // read in end
      if(m[6]){
        end[0] = m[6];
        end[1] = parseInt(m[7]);
      } else {
        end[0] = m[5];
      }

      // and return
      return [start, end];
    },

    /**
     * @brief Turns a parsed arange() object back into a string
     *
     * @param Array d list of pairs [XPath, Index_or_spec] containing the points
     * @return Returns a string
     *
     */
    'compose': function(d){

      // extract start && end
      var start = d[0];
      var end = d[1];

      // assemble start string
      var starts = (start[1] !== null)?('string-index('+start[0]+', '+start[1]+')'):start[0];

      // assemble end string
      var ends = (end[1] !== null)?('string-index('+end[0]+', '+end[1]+')'):end[0];

      // and return a string
      return 'arange('+starts+', '+ends+')';
    }
  }
})();

// FOR TESTING
// THESE COME IN PAIRS, THEY ARE OPPOSITES OF EACH OTHER

// console.log(arange.parse('arange(//div[1], //div[2])'))
// console.log(arange.compose([ [ '//div[1]', null ], [ '//div[2]', null ] ]))
//
// console.log(arange.parse('arange(string-index(//div[1], 134), //div[2])'))
// console.log(arange.compose([ [ '//div[1]', 134 ], [ '//div[2]', null ] ]))
//
// console.log(arange.parse('arange(//div[1], string-index(//div[2], 134))'))
// console.log(arange.compose([ [ '//div[1]', null ], [ '//div[2]', 134 ] ]))
//
// console.log(arange.parse('arange(string-index(//div[1], 134), string-index(//div[2], 134))'))
// console.log(arange.compose([ [ '//div[1]', 134 ], [ '//div[2]', 134 ] ]))
