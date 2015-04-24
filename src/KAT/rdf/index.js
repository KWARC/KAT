/**
* Namespace for RDF functionality used by KAT.
* @namespace
* @alias KAT.rdf
*/
KAT.rdf = {};

/** Creates an RDF element.
*
* @param {string} name - Name of element to create.
* @name KAT.rdf.create
* @static
* @returns {document}
*/
KAT.rdf.create = function(name){
  // create a namespaced attribute
  // so that we keep the capitalisation.
  return document.createElementNS("http://www.w3.org/1999/02/22-rdf-syntax-ns#", name);
};

/** Sets an RDF attribute.
*
* @param {jQuery|document} element - Element to modify.
* @param {string} name - Name of element to create.
* @param {string} value - Value of element to set.
* @name KAT.rdf.attr
* @static
* @returns {document|jQuery}
*/
KAT.rdf.attr = function(element, name, value){
  // set the rdf attribute
  // we use the html function directly for this.

  $(element).get(0).setAttribute(name, value);
  // and return the original value.
  return element;
};

/** Resolves a relative URI with namespace.
*
* @param {string} uri - URI to resolve
* @param {document} xml - Top level xml node with namespaces contained.
* @name KAT.rdf.resolveWithNameSpace
* @static
* @returns {string}
*/
KAT.rdf.resolveWithNameSpace = function(uri, xml){
  var uriparts = uri.split(":");

  // check if we have exactly 2 parts.
  if(uriparts.length == 2){
    return $(xml).attr("xmlns:"+uriparts[0])+uriparts[1];
  } else {
    return uri;
  }
};
