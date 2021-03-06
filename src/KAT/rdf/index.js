/**
 * Namespace for RDF functionality used by KAT.
 * @namespace
 * @alias KAT.rdf
 */
KAT.rdf = {};

/** XML Namespace for KAT.
 * @name KAT.rdf.kat_namespace
 * @type {string}
 */
KAT.rdf.kat_namespace = "https://github.com/KWARC/KAT/";

/** XML Namespace for RDF.
 * @name KAT.rdf.kat_namespace
 * @type {string}
 */
KAT.rdf.rdf_namespace = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";

/** Creates an RDF element.
 *
 * @param {string} name - Name of element to create.
 * @name KAT.rdf.create
 * @static
 * @returns {document}
 */
KAT.rdf.create = function(name) {
  // create a namespaced attribute
  // so that we keep the capitalisation.
  return document.createElementNS(KAT.rdf.rdf_namespace, name);
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
KAT.rdf.attr = function(element, name, value) {
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
KAT.rdf.resolveWithNameSpace = function(uri, xml) {
  var uriparts = uri.split(":");

  // check if we have exactly 2 parts.
  if (uriparts.length == 2) {

    var annotationElement = $(xml).find("annotation").eq(0);

    return annotationElement.attr("xmlns:" + uriparts[0]) + uriparts[1];
  } else {
    return uri;
  }
};

/** Builds a namespaced version of a URI.
 *
 * @param {string} uri - URI to resolve
 * @param {document} xml - Top level xml node with namespaces contained.
 * @name KAT.rdf.resolveWithNameSpace
 * @static
 * @returns {string}
 */
KAT.rdf.buildNameSpace = function(uri, xml) {

  // find the annotation element, fallback to just the element itself. 
  var annEl = $(xml).find("annotation").get(0) || $(xml).get(0);
  var attr, name, suffix;

  // iterate through the attributes
  for (var i = 0; i < annEl.attributes.length; i++) {
    attr = annEl.attributes[i];

    // which are a namespace.
    if (attr.name.substring(0, "xmlns".length) == "xmlns") {
      name = attr.name.split(":")[1] || "";

      // if the uri starts with the right string
      if (uri.startsWith(attr.value)) {

        // we get the suffix of the uri
        suffix = uri.substring(attr.value.length);

        //and return it with namespace if needed
        return name !== "" ? (name + ":" + suffix) : suffix;
      }
    }
  }

  return uri;
};

/**
 * Finds an rdf:Description by RDF id.
 *
 * @param {jQuery} rdf - RDF element to look inside
 * @param {string} íd - Id to look for.
 *
 * @function
 * @static
 * @name KAT.rdf.findById
 * @memberof KAT.rdf
 * @return {jQuery} - jQuery object representing the given node.
 */
KAT.rdf.findById = function(rdf, id) {
  return jQuery('rdf\\:Description', rdf)
    .filter(function() {
      return jQuery(this).attr('rdf:nodeID') === id;
    });
};
