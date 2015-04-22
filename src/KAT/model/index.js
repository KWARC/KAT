/**
* Namespace for models used by KAT.
* @namespace
* @alias KAT.model
*/
KAT.model = {};

/**
* A regular expression (in string form) for names. May not have a capturing group.
* @type {string}
* @name KAT.model.nameRegExS
*/
KAT.model.nameRegExS = "(?:\\w|\\d|\\-|\\_|\\+)+";

/**
* A regular expression for a single name.
* @type {RegEx}
* @name KAT.model.nameRegEx
*/
KAT.model.nameRegEx = new RegExp("^"+KAT.model.nameRegExS+"$");

/**
* A regular expression for a double name.
* @type {RegEx}
* @name KAT.model.nameRegEx2
*/
KAT.model.nameRegEx2 = new RegExp("^("+KAT.model.nameRegExS+")\\.("+KAT.model.nameRegExS+")$");

/**
* A regular expression for a triple name.
* @type {RegEx}
* @name KAT.model.nameRegEx3
*/
KAT.model.nameRegEx3 = new RegExp("^("+KAT.model.nameRegExS+")\\.("+KAT.model.nameRegExS+")\\.("+KAT.model.nameRegExS+")$");


/** Resolves a relative URI with namespace.
*
* @param {string} uri - URI to resolve
* @param {document} xml - Top level xml node with namespaces contained.
* @name KAT.model.resolveWithNameSpace
* @static
*/
KAT.model.resolveWithNameSpace = function(uri, xml){
  var uriparts = uri.split(":");

  // check if we have exactly 2 parts.
  if(uriparts.length == 2){
    return $(xml).attr("xmlns:"+uriparts[0])+uriparts[1];
  } else {
    return uri;
  }

}


/**
* Normalises a theory name.
*
* @param {string} name - The name to normalise.
* @returns {string} - the normalised name.
*
* @static
* @function
* @memberof KAT.model
*/
KAT.model.nameNormaliser = function(name){
  //does nothing.
  //we might want to use this later or just remove it.
  return name;
};


/** Represents a parsing error.
*
* @param {string} message - Message of the error.
* @param {document} xml_element - The XML node where the parsing error occured.
* @name KAT.model.ParsingError
* @this {KAT.model.ParsingError}
* @Alias KAT.model.ParsingError
* @class
*/
KAT.model.ParsingError = function (message, xml_element) {
  var tmp = Error.apply(this, [message]);

  /**
  * The name of this error.
  *
  * @type {string}
  * @name KAT.model.ParsingError#name
  */
  tmp.name = this.name = 'KAT.model.ParsingError';

  /**
  * The xml node where this error occurs.
  *
  * @type {document}
  * @name KAT.model.ParsingError#node
  */
  tmp.node = this.node = xml_element;

  //We want an actual document.
  if(xml_element instanceof jQuery){
    tmp.node = this.node = xml_element.toArray();
  }

  /**
  * Message for this Error.
  *
  * @type {string}
  * @name KAT.model.ParsingError#message
  */
  this.message = tmp.message;

  Object.defineProperty(this, 'stack', {
    get: function() {
      return tmp.stack;
    }
  });

  return this;
};

(function(){
  var IntermediateInheritor = function() {};
  IntermediateInheritor.prototype = Error.prototype;
  KAT.model.ParsingError.prototype = new IntermediateInheritor();
})();
