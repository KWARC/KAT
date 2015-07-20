/**
Copyright (c) 2014-15 by the KWARC Group (http://kwarc.info)

KAT is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

KAT is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with KAT.  If not, see <http://www.gnu.org/licenses/>
*/


(function(exports,global){global["KAT"]=exports;
// define the global KAT object we will export.
var KAT = exports;

// make sure $ is available as jQuery.
var $ = global.jQuery;

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
KAT.rdf.create = function(name){
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

    var annotationElement = $(xml).find("annotation").eq(0);

    return annotationElement.attr("xmlns:"+uriparts[0])+uriparts[1];
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
KAT.rdf.buildNameSpace = function(uri, xml){

  // find the annotation element, fallback to just the element itself. 
  var annEl = $(xml).find("annotation").get(0) || $(xml).get(0);
  var attr, name, suffix;

  // iterate through the attributes
  for(var i=0;i<annEl.attributes.length; i++){
    attr = annEl.attributes[i];

    // which are a namespace.
    if(attr.name.substring(0, "xmlns".length) == "xmlns"){
      name = attr.name.split(":")[1] || "";

      // if the uri starts with the right string
      if(uri.startsWith(attr.value)){

        // we get the suffix of the uri
        suffix = uri.substring(attr.value.length);

        //and return it with namespace if needed
        return name!==""?(name+":"+suffix):suffix;
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
KAT.rdf.findById = function(rdf, id){
  return jQuery('rdf\\:Description', rdf)
  .filter(function(){
    return jQuery(this).attr('rdf:nodeID') === id;
  });
};

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

KAT.model.KAnnSpecCollection = function(){
  /**
  * KAnnSpecs stored in this KAnnSpecCollection
  *
  * @type {KAT.model.KAnnSpec[]}
  * @name KAT.model.KAnnSpecCollection#KAnnSpecs
  */
  this.KAnnSpecs = [];
};

/** Adds an onology to this KAnnSpecCollection.
*
* @param {KAT.model.KAnnSpec} KAnnSpec - KAnnSpec to add
*
* @function
* @instance
* @name addKAnnSpec
* @memberof KAT.model.KAnnSpecCollection
* @return {KAT.model.KAnnSpec|boolean} - newly added KAnnSpec or false in case of errors
*/
KAT.model.KAnnSpecCollection.prototype.addKAnnSpec = function(KAnnSpec){

  //check if we already have it.
  if(this.getKAnnSpec(KAnnSpec.name)){
    return false;
  }

  //push the KAnnSpec
  this.KAnnSpecs.push(KAnnSpec);

  //and return it.
  return KAnnSpec;
};

/** Creates a new KAnnSpec instance and adds it to this KAnnSpecCollection.
*
* @param {document} xml - XML document representing KAnnSpec.
* @param {string} url - URL of KAnnSpec represented by the XML. 
*
* @function
* @instance
* @name addNewKAnnSpec
* @memberof KAT.model.KAnnSpecCollection
* @return {KAT.model.KAnnSpec|boolean} - newly created KAnnSpec or false in case of errors
*/
KAT.model.KAnnSpecCollection.prototype.addNewKAnnSpec = function(xml, url){
  return this.addKAnnSpec(new KAT.model.KAnnSpec(xml, url, this));
};

/** Initialises this KAnnSpecCollection. Should be called once all KAnnSpecs have been added.
*
* @function
* @instance
* @name init
* @memberof KAT.model.KAnnSpecCollection
* @return {KAT.model.KAnnSpec} - this KAnnSpec store
*/
KAT.model.KAnnSpecCollection.prototype.init = function(){
  //iterate over the fields
  //this may take a while
  $.each(this.KAnnSpecs, (function(i, spec){
    $.each(spec.concepts, (function(j, concept){
        $.each(concept.fields, (function(k){
          if(this.type == KAT.model.Field.types.reference){
            for(var l=0;l<this.validation.length;l++){
              var name = this.validation[l];

              //it is already referenced, get the name out of it
              if(name instanceof KAT.model.Concept){
                name = name.getFullName();
              }

              //find the concept, try it within this KAnnSpec first
              var concept = this.concept.KAnnSpec.getConcept(name);

              //and then do it in the KAnnSpecCollection
              if(!concept){
                concept = this.concept.KAnnSpec.collection.getConcept(name);
              }

              if(!concept){
                throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Concept not found: '"+name+"'). ", this.xml);
              }

              //store the concept in the validation.
              this.validation[l] = concept;
            }
          }
        }).bind(concept));
      }).bind(spec));
    }));

  return this;
};


/**
* Finds an KAnnSpec by name.
*
* @param {string} name - Name of KAnnSpec to search for.
*
* @function
* @instance
* @name getKAnnSpec
* @memberof KAT.model.KAnnSpecCollection
* @return {KAT.model.KAnnSpec|boolean} - the KAnnSpec searched for or false.
*/
KAT.model.KAnnSpecCollection.prototype.getKAnnSpec = function(name){
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if(!KAT.model.nameRegEx.test(name)){
    return false;
  }

  //Search for the name
  for(var i=0;i<this.KAnnSpecs.length;i++){
    if(this.KAnnSpecs[i].name == name){
      return this.KAnnSpecs[i];
    }
  }

  //return false if not found.
  return false;
};

/**
* Finds a concept by name.
*
* @param {string} name - Name of concept to search for. Should be of the form KAnnSpecName.ConceptName
*
* @function
* @instance
* @name getConcept
* @memberof KAT.model.KAnnSpecCollection
* @return {KAT.model.Concept|boolean} - the concept searched for or false.
*/
KAT.model.KAnnSpecCollection.prototype.getConcept = function(name){
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if(!KAT.model.nameRegEx2.test(name)){
    return false;
  }

  //match the name regex
  name = name.match(KAT.model.nameRegEx2);

  //get the KAnnSpec
  var KAnnSpec = this.getKAnnSpec(name[1]);

  if(!KAnnSpec){
    return false;
  }

  //get the concept
  return KAnnSpec.getConcept(name[2]);
};

/**
* Finds all concepts in this KAnnSpecCollection
*
*
* @function
* @instance
* @name getKAnnSpec
* @memberof KAT.model.KAnnSpecCollection
* @return {Kat.model.Concept[]} - concepts found
*/
KAT.model.KAnnSpecCollection.prototype.findConcepts = function(){
  var concepts = [];

  for(var i=0;i<this.KAnnSpecs.length;i++){
    for(var j=0;j<this.KAnnSpecs[i].concepts.length;j++){
      concepts.push(this.KAnnSpecs[i].concepts[j]);
    }
  } 

  return concepts;
};

/**
* Finds a field by name.
*
* @param {string} name - Name of field to search for. Should be of the form KAnnSpecName.ConceptName.FieldName
*
* @function
* @instance
* @name getField
* @memberof KAT.model.KAnnSpecCollection
* @return {KAT.model.Field|boolean} - the field searched for or false.
*/
KAT.model.KAnnSpecCollection.prototype.getField = function(name){
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if(!KAT.model.nameRegEx3.test(name)){
    return false;
  }

  //match the name regex
  name = name.match(KAT.model.nameRegEx3);

  //get the KAnnSpec
  var KAnnSpec = this.getKAnnSpec(name[1]);

  if(!KAnnSpec){
    return false;
  }

  //get the concept
  var concept = KAnnSpec.getConcept(name[2]);

  if(!concept){
    return false;
  }

  //get the field
  return concept.getField(name[3]);
};

/**
* Assigns colours to each concept in this KAnnSpecCollection
*
*
* @function
* @instance
* @name assignDisplayColour
* @memberof KAT.model.KAnnSpecCollection
*/
KAT.model.KAnnSpecCollection.prototype.assignDisplayColour = function(){
  
  //byte2Hex and RGB2Color are used to convert from RGB to hex.
  var byte2Hex = function(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
  };

  var RGB2Color = function(r, g, b) {
      return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  };

  //This function give a palette of 56 colours going accross the rainbow
  var makeColorGradient = function(frequency, phase1, phase2, phase3) {
    var center = 128;
    var width = 127;
    var len = 56;

    var colourValues = [];

    for (var i = 0; i < len; ++i) {
        var red = Math.sin(frequency * i + phase1) * width + center;
        var grn = Math.sin(frequency * i + phase2) * width + center;
        var blu = Math.sin(frequency * i + phase3) * width + center;
        colourValues.push(RGB2Color(red, grn, blu));
    }
    return colourValues;
  };

  //This function returns equidistant array indices
  var evenlySplitPalette = function(colorsNeeded, maxVal) {
    var diff = Math.floor(maxVal / colorsNeeded);
    var values = [];
    var nextVal = diff;
    while (nextVal <= maxVal) {
        values.push(nextVal);
        nextVal = diff + values[values.length - 1];
    }
    var expectedMidVal = Math.floor(maxVal / 2);
    var currentMidVal = values[Math.floor(values.length / 2)];
    var deviation = currentMidVal - expectedMidVal;
    if (values.length % 2 === 0) {
        deviation = Math.floor(deviation / 2);
    }
    values.forEach(function (entry, index) {
        values[index] = entry - deviation;
    });
    return values;
  };

  //Here we use the equidistant indices to access equidistant colours from the colour palette
  var colours = function(colorsNeeded) {
    var range = makeColorGradient(0.1, 0, 2, 4);
    var indices = evenlySplitPalette(colorsNeeded, range.length);
    var result = [];
    for (i = 0; i < indices.length; i++) {
        result.push(range[indices[i]]);
    }
    return result;
  };

  //concepts in current KAnnSpecCollection
  var concepts = this.findConcepts();
  var numberOfConcepts = concepts.length;

  //We get colours for each concept, and assign it to a concept
  var coloursSelected = colours(numberOfConcepts);
  for (i = 0; i < numberOfConcepts; i++) {
    concepts[i].displayColour = coloursSelected[i];
  }
};
KAT.model.KAnnSpec = function(xml, url, collection){
  var me = this;

  //parse the XML
  try{
    /**
    * XML document representing KAnnSpec.
    *
    * @type {document}
    * @name KAT.model.KAnnSpec#xml
    */
    this.xml = jQuery(xml);
  } catch(e){
    throw new KAT.model.ParsingError("KAT.model.KAnnSpec: Invalid XML (Unable to parse XML). ", this.xml);
  }

  //check the top level element
  if(this.xml.children().length != 1 || !this.xml.children().eq(0).is("annotation")){
    throw new KAT.model.ParsingError("KAT.model.KAnnSpec: Invalid XML (Expected exactly one top-level <annotation>). ", this.xml);
  }

  /**
  * URL of the KAnnSpec
  *
  * @type {string}
  * @name KAT.model.KAnnSpec#url
  */
  this.url = KAT.storage.resolve(url);

  /**
  * Name of this KAnnSpec.
  *
  * @type {string}
  * @name KAT.model.KAnnSpec#name
  */
  this.name = KAT.model.nameNormaliser(this.xml.children().eq(0).attr("name"));

  /**
  * RDF Node ID of KAnnSpec.
  *
  * @type {string}
  * @name KAT.model.KAnnSpec#rdf_nodeid
  */
  this.rdf_nodeid = "KAT_"+(new Date().getTime())+"_"+this.name;

  //Check if the name is valid.
  if(!this.name || !KAT.model.nameRegEx.test(this.name)){
    throw new KAT.model.ParsingError("KAT.model.KAnnSpec: Unable to create KAnnSpec ('"+this.name+"' is not a valid name). ", this.xml);
  }

  //validate the sub tags
  var annotRoot = this.xml.children().eq(0);

  if(annotRoot.children().length <= 1 || !annotRoot.children().eq(0).is("documentation")){
    throw new KAT.model.ParsingError("KAT.model.KAnnSpec: Invalid XML for KAnnSpec '"+this.getFullName()+"' (Expected exactly one <documentation>). ", annotRoot);
  }

  /**
  * KAnnSpecCollection this KAnnSpec belongs to.
  *
  * @type {KAT.model.KAnnSpecCollection}
  * @name KAT.model.KAnnSpec#collection
  */
  this.collection = collection;

  /**
  * Documentation for this KAnnSpec.
  *
  * @type {string}
  * @name KAT.model.KAnnSpec#documentation
  */
  this.documentation = annotRoot.children().eq(0).text().trim();

  /**
  * Concepts defined in this KAnnSpec.
  *
  * @type {KAT.model.Concept[]}
  * @name KAT.model.KAnnSpec#concepts
  */
  this.concepts = [];

  //find the concepts
  annotRoot.children().slice(1).each((function(i, e){
    e = $(e);
    if(!e.is("concept")){
      throw new KAT.model.ParsingError("KAT.model.KAnnSpec: Invalid XML for KAnnSpec '"+this.getFullName()+"' (Expected child tag <concept>). ", e);
    }

    //and add them to the right thing.
    this.concepts.push(new KAT.model.Concept(e, this));
  }).bind(this));

};

/**
* Gets the full name of this KAnnSpec.
*
* @function
* @instance
* @name getFullName
* @memberof KAT.model.KAnnSpec
* @return {string} - full Name of this KAnnSpec
*/
KAT.model.KAnnSpec.prototype.getFullName = function(){
  return this.name;
};

/**
* Finds a concept by name.
*
* @param {string} name - Name of concept to search for.
*
* @function
* @instance
* @name getConcept
* @memberof KAT.model.KAnnSpec
* @return {KAT.model.Concept|boolean} - the concept searched for or false.
*/
KAT.model.KAnnSpec.prototype.getConcept = function(name){
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if(!KAT.model.nameRegEx.test(name)){
    return false;
  }

  //Search for the name
  for(var i=0;i<this.concepts.length;i++){
    if(this.concepts[i].name == name){
      return this.concepts[i];
    }
  }

  //return false if not found.
  return false;
};


/**
* Finds a field by name.
*
* @param {string} name - Name of field to search for. Should be of the form ConceptName.FieldName
*
* @function
* @instance
* @name getField
* @memberof KAT.model.KAnnSpec
* @return {KAT.model.Field|boolean} - the field searched for or false.
*/
KAT.model.KAnnSpec.prototype.getField = function(name){
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if(!KAT.model.nameRegEx2.test(name)){
    return false;
  }

  //match the name regex
  name = name.match(KAT.model.nameRegEx2);

  //get the concept
  var concept = this.getConcept(name[1]);

  if(!concept){
    return false;
  }

  //get the field
  return concept.getField(name[2]);
};

KAT.model.Concept = function(xml, KAnnSpec){
  var me = this;

  //parse the XML
  try{
    /**
    * XML document representing concept.
    *
    * @type {document}
    * @name KAT.model.Concept#xml
    */
    this.xml = jQuery(xml);
  } catch(e){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Unable to parse XML). ", this.xml);
  }

  /**
  * KAnnSpec this concept was declared in.
  *
  * @type {KAT.model.KAnnSpec}
  * @name KAT.model.Concept#KAnnSpec
  */
  this.KAnnSpec = KAnnSpec;

  // check if we have a name
  if(typeof this.xml.attr("name") != "string"){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid Invalid XML (Missing name attribute for <concept>). ", this.xml);
  }

  // check if we have an rdftype
  if(typeof this.xml.attr("rdftype") != "string"){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid Invalid XML (Missing rdftype attribute for <concept>). ", this.xml);
  }

  /**
  * Name of this concept
  *
  * @type {string}
  * @name KAT.model.Concept#name
  */
  this.name = KAT.model.nameNormaliser(this.xml.attr("name"));

  //Check if the name is valid.
  if(!KAT.model.nameRegEx.test(this.name)){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML ('"+this.getFullName()+"' is not a valid name). ", this.xml);
  }

  //Check if this concept already exists
  if(this.KAnnSpec.getConcept(this.name)){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Concept '"+this.getFullName()+"' already exists). ", this.xml);
  }

  /**
  * RDF Type attribute for this concept.
  *
  * @type {string}
  * @name KAT.model.Concept#rdf_type
  */
  this.rdf_type = KAT.rdf.resolveWithNameSpace(this.xml.attr("rdftype"), this.KAnnSpec.xml);

  //validation
  if(this.xml.length != 1 || !this.xml.is("concept")){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML for concept '"+this.getFullName()+"' (Expected exactly one <concept> tag). ", this.xml);
  }

  /**
  * Documentation of this concept
  *
  * @type {string}
  * @name KAT.model.Concept#documentation
  */
  this.documentation = "";

  /**
  * Fields declared in this concept.
  *
  * @type {KAT.model.Field[]}
  * @name KAT.model.Concept#fields
  */
  this.fields = [];

  /**
  * Hex code for colour used to draw an annotation of this concept.
  *
  * @type {string}
  * @name KAT.model.Concept#displayColour
  */
  this.displayColour = "";

  /**
  * Display to generate for this element.
  *
  * @type {string}
  * @name KAT.model.Concept#display
  */
  this.display = "";

  //validate the children
  var children = this.xml.children();

  //We want to check indexing, so we need this.
  var index = 0;

  //right length
  if(children.length < 2) {
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML for concept '"+this.getFullName()+"' (Expected at least 2 of <documentation>, <field>, <display> and <rdf:rdf>). ", children);
  }

  //documentation
  if(children.eq(index).is("documentation")){
    this.documentation = children.eq(index).text().trim();
    index++;
  }

  //do we have a field
  var hasField = false;

  //fields
  while(children.eq(index).is("field") && index < children.length){
    hasField = true;
    this.fields.push(new KAT.model.Field(children.eq(index), this));
    index++;
  }

  if(!hasField){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML for concept '"+this.getFullName()+"' (Missing at least one declared <field>). ", children);
  }

  //display
  if(children.eq(index).is("display")){
    var display = children.eq(index);

    //Set the display
    if(display.children().length != 1 || !display.children().eq(0).is("template")){
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML for concept '"+this.getFullName()+"' (Missing <template>). ", display);
    } else {
      this.display = display.children().html().trim();
    }

    index++;
  } else {
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML for concept '"+this.getFullName()+"' (Missing required <display>). ", children);
  }

  //rdf:RDF
  if(index < children.length){
    if(children.eq(index).prop("tagName") == "rdf:RDF"){
      this.rdf = children.eq(index).html().trim();
      index++;
    } else {
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML for concept '"+this.getFullName()+"' (Expected <rdf:rdf> in final position. ). ", children);
    }
  }

  //whats happened? We're too long!
  if(index != children.length){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML for concept '"+this.getFullName()+"' (Expected at least 2 of <documentation>, <fields>, <display> and <rdf:RDF>). ", children);
  }
};

/**
* Gets default values for this concept.
*
* @function
* @instance
* @name getDefault
* @memberof KAT.model.Concept
* @return {object} - JSOn representing default for this concept.
*/
KAT.model.Concept.prototype.getDefault = function(){
  var defaultValues = {};

  $.each(this.fields, function(field){
    if(field.type == KAT.model.Field.types.text){
      //the default is simply a text
      defaultValues[field.value] = field.default;
    } else if(field.type == KAT.model.Field.types.select){
      //the default is an option
      //either the specefied one
      //or the first one.
      defaultValues[field.value] = (field.default === "")?field.validation[0]:field.default;
    } else if(field.type == KAT.model.Field.types.reference){
      //we do want a reference, but it may be an empty reference.
      //we neccessarily want this so we can avoid conflicts.
      defaultValues[field.value] = "";
    }
  });

  return defaultValues;
};

/**
* Gets the full name of this concept.
*
* @function
* @instance
* @name getFullName
* @memberof KAT.model.Concept
* @return {string} - full Name of this concept
*/
KAT.model.Concept.prototype.getFullName = function(){
  return this.KAnnSpec.getFullName()+"."+this.name;
};

/**
* Finds a field by name.
*
* @param {string} name - Name of field to search for.
*
* @function
* @instance
* @name getField
* @memberof KAT.model.Concept
* @return {KAT.model.Field|boolean} - the field searched for or false.
*/
KAT.model.Concept.prototype.getField = function(name){
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if(!KAT.model.nameRegEx.test(name)){
    return false;
  }

  //Search for the name
  for(var i=0;i<this.fields.length;i++){
    if(this.fields[i].name == name){
      return this.fields[i];
    }
  }

  //return false if not found.
  return false;
};

KAT.model.Field = function(xml, concept){
  var me = this;

  //parse the XML
  try{
    /**
    * XML document representing field.
    *
    * @type {document}
    * @name KAT.model.Field#xml
    */
    this.xml = jQuery(xml);
  } catch(e){
    throw new KAT.model.Field("KAT.model.Field: Invalid XML (Unable to parse XML). ", this.xml);
  }

  /**
  * Concept this field was declared in.
  *
  * @type {document}
  * @name KAT.model.Field#concept
  */
  this.concept = concept;

  //do we have the name attribute.
  if(typeof this.xml.attr("name") != "string"){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Missing name attribute for <field>). ", this.xml);
  }

  /**
  * Name of this field
  *
  * @type {string}
  * @name KAT.model.Field#name
  */
  this.name = KAT.model.nameNormaliser(this.xml.attr("name"));

  //Check for a valid name
  if(!KAT.model.nameRegEx.test(this.name)){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML ('"+this.getFullName()+"' is not a valid name). ", this.xml);
  }

  //Check if this field already exists
  if(this.concept.getField(this.name)){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Field '"+this.getFullName()+"' already exists). ", this.xml);
  }

  //do we have the type attribute.
  if(typeof this.xml.attr("type") != "string"){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Missing type attribute for <field>). ", this.xml);
  }

  //do we have the rdfpref attribute.
  if(typeof this.xml.attr("rdfpred") != "string"){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Missing rdfpred attribute for <field>). ", this.xml);
  }



  //do we know the type
  if(!KAT.model.Field.types.hasOwnProperty(this.xml.attr("type"))){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Unknown <field> type). ", this.xml);
  }

  /**
  * Type of this field
  *
  * @type {KAT.model.Field.types}
  * @name KAT.model.Field#type
  */
  this.type = KAT.model.Field.types[this.xml.attr("type")];

  /**
  * RDF Predicate of this field.
  *
  * @type {string}
  * @name KAT.model.Field#rdf_pred
  */
  this.rdf_pred = KAT.rdf.resolveWithNameSpace(this.xml.attr("rdfpred"), this.concept.KAnnSpec.xml);

  /**
  * Minimum number of times this field should be used.
  *
  * @type {number}
  * @name KAT.model.Field#minimum
  */
  this.minimum = 1;

  /**
  * Maximum number of times this field should be used.
  *
  * @type {number}
  * @name KAT.model.Field#maximum
  */
  this.maximum = 1;

  /**
  * Value for this field.
  *
  * @type {string}
  * @name KAT.model.Field#value
  */
  this.value = "";

  /**
  * Default value for this field.
  *
  * @type {string}
  * @name KAT.model.Field#default
  */
  this.default = "";

  /**
  * Documentation for this field.
  *
  * @type {string}
  * @name KAT.model.Field#documentation
  */
  this.documentation = "";

  /**
  * Validation for this field, stores
  * regex for KAT.model.Field.types.text,
  * KAT.model.Option[] for KAT.model.Field.types.select,
  * KAT.model.Concept[] for KAT.model.Field.types.reference and
  * string[] for KAT.model.Field.types.reference while the reference is undefined.
  *
  * @type {string[]|regex|KAT.model.Option[]|KAT.model.Concept[]}
  * @name KAT.model.Field#validation
  */
  this.validation = undefined;

  //what do we have here
  var hasValue = false;
  var hasDefault = false;
  var hasValidation = false;
  var hasNumber = false;
  var hasDocumentation = false;

  if(this.type == KAT.model.Field.types.text){
    this.validation = new RegExp(".*");
  } else {
    this.validation = [];
  }

  this.xml.children().each((function(i, e){
    e = $(e);

    if(e.is("value")){

      //did we have this already
      if(hasValue){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Double <value> tag). ", e);
      }

      //no, so now store it.
      hasValue = true;
      this.value = e.text();
    } else if(e.is("number")){
      //did we have this already?
      if(hasNumber){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Double <number> tag). ", e);
      }

      //ok, now store it
      hasNumber = true;


      // TODO: Ensure min and max are sane. 

      //minimum
      if(typeof e.attr("atleast")){
        try{
          this.minimum = parseInt(e.attr("atleast"));
        } catch(f){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (atleast property must be a number). ", e);
        }
      }

      //maximum
      if(typeof e.attr("atmost")){
        try{
          this.maximum = parseInt(e.attr("atmost"));
        } catch(f){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (atmost property must be a number). ", e);
        }
      }
    } else if(e.is("documentation")){

      //did we have this already?
      if(hasDocumentation){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Double <documentation> tag). ", e);
      }

      //we had it now
      hasDocumentation = true;
      this.documentation = e.text().trim();
    } else if(e.is("default") && this.type == KAT.model.Field.types.text){
      //did we have this already?
      if(hasDefault){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Double <default> tag). ", e);
      }

      //no, so we can store it
      hasDefault = true;
      this.default = e.text();
    } else if(e.is("validation") && this.type == KAT.model.Field.types.text){
      //did we have this already?
      if(hasValidation){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Double <validation> tag). ", e);
      }

      //no, so we can store it
      hasValidation = true;

      // store the validation
      this.validation = e.text();

      // make sure we have a start marker
      if(this.validation[0] != "^"){
        this.validation = "^"+this.validation;
      }

      // make sure we have an end marker
      if(this.validation[this.validation.length - 1] != "$"){
        this.validation = this.validation+"$";
      }

      try{
        this.validation = new RegExp(this.validation);
      } catch(f){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Unregonised regular expression). ", e);
      }
    } else if(e.is("referencedType") && this.type == KAT.model.Field.types.reference){
      this.validation.push(e.text());
    } else if(e.is("option") && this.type == KAT.model.Field.types.select){
      this.validation.push(new KAT.model.Option(e, this));
    } else if(e.is("defaultoption") && this.type == KAT.model.Field.types.select){
      this.validation.push(new KAT.model.Option(e, this));
    } else {
      throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Unexpected tag '"+e.prop("tagName")+"'). ", e);
    }
  }).bind(this));

  //we did not have the value.
  if(!hasValue){
    this.value = this.name;
  }

  if(this.type == KAT.model.Field.types.select && this.validation.length === 0){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (KAT.model.Field.types.select must have a non-empty list of options. ). ", e);
  }

  //Check that value is unique
  for(var i=0;i<this.concept.fields.length;i++){
    if(this.concept.fields[i].value == this.value){
      throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Value '"+this.value+"' already used by field '"+this.concept.fields[i].getFullName()+"'). ", this.xml);
    }
  }

};

/**
* Gets the full name of this field.
*
* @function
* @instance
* @name getFullName
* @memberof KAT.model.Field
* @return {string} - full Name of this field
*/
KAT.model.Field.prototype.getFullName = function(){
  return this.concept.getFullName()+"."+this.name;
};

/**
* Field Types known to KAT.
*
* @memberof KAT.model.Field
* @alias KAT.model.Field.types
* @enum {number}
*/
KAT.model.Field.types = {
  /** A Reference */
  "reference": "reference",
  /** A finite set of options */
  "select": "select",
  /** Text */
  "text": "text"
};

KAT.model.Option = function(xml, field){
  //parse the XML
  try{
    /**
    * XML document representing concept.
    *
    * @type {document}
    * @name KAT.model.Option#xml
    */
    this.xml = jQuery(xml);
  } catch(e){
    throw new KAT.model.ParsingError("KAT.model.Option: Invalid XML (Unable to parse XML). ", this.xml);
  }

  /**
  * Field this concept was declared in.
  *
  * @type {Kat.model.Field}
  * @name KAT.model.Option#field
  */
  this.field = field;

  if(this.xml.find("value").length != 1){
    throw new KAT.model.ParsingError("KAT.model.Option: Invalid XML (Expected exactly one <value>. )", this.xml);
  }

  /**
  * Value for this option.
  *
  * @type {string}
  * @name KAT.model.Option#value
  */
  this.value = this.xml.find("value").text();

  //Check that value is unique
  for(var i=0;i<this.field.validation.length;i++){
    if(this.field.validation[i].value == this.value){
      throw new KAT.model.ParsingError("KAT.model.Option: Invalid XML (Value '"+this.value+"' already used). ", this.xml);
    }
  }


  if(this.xml.is("defaultoption")){
    if(this.field.default !== ""){
      throw new KAT.model.ParsingError("KAT.model.Option: Invalid XML (Default already exists)", this.xml);
    }
    this.field.default = this.value;
  }

  /**
  * RDF Obj for this Option or false.
  *
  * @type {string|boolean}
  * @name KAT.model.Option#rdf_obj
  */
  this.rdf_obj = false;

  if(typeof this.xml.attr("rdfobj") === "string"){
    this.rdf_obj = KAT.rdf.resolveWithNameSpace(this.xml.attr("rdfobj"), this.field.concept.KAnnSpec.xml);
  }

  /**
  * Documentation for this option.
  *
  * @type {string}
  * @name KAT.model.Option#documentation
  */
  this.documentation = this.xml.find("documentation").text();

  //check we do not have anything else.
  if(this.xml.children().length > 2){
    throw new KAT.model.ParsingError("KAT.model.Option: Invalid XML (Too many children. )", this.xml);
  }

};

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

  var getNode = function(node){
    if(node.nodeType == 3){
      // if it is a text node,
      // return the parent.
      return node.parentElement;
    } else {
      // else return the node itself
      return node;
    }
  }; 

  var container = KAT.gui.getXPath(theElement, getNode(selection.commonAncestorContainer));
  var start = KAT.gui.getXPath(theElement, getNode(selection.startContainer));
  var end = KAT.gui.getXPath(theElement, getNode(selection.endContainer));

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
  var $dialog = $('<div class="modal fade">')
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
    $("<div>").appendTo("body")
  ).modal();

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

KAT.sidebar = {};

/**
* Set up and insert Annotation Toolkit sidemenu
*
* @param {KAT.Storage.Store} store - Annotation Store to bind to.
*
* @function
* @static
* @name init
* @memberof KAT.sidebar
*/
KAT.sidebar.init = function(store){

  //mode of the sidebar.
  var mode;

  //which is either Reading or Annotation.
  if (KAT.sidebar.annotationMode){ mode = "Reading"; } else { mode = "Annotation"; }

  //get the height of the window.
  var winHeight = jQuery(window).height();

  //create a button to toggle annotations
  KAT.sidebar.modeToggleButton = $("<button>")
  .text("Enable " +mode+ " Mode")
  .addClass("annotationToggle")
  .addClass("btn btn-default").BS()
  .click(function(){
    KAT.sidebar.toggleAnnotationMode();
  });

  //create collapsible sidebar
  var collapsibleMenu = jQuery('<div>').addClass("collapsible")

  .append(
    //add a heading
    $("<div>").addClass("KATTitle").html("<h3>KWARC Annotation Tool</h3>"),

    // and a lot of buttons
    $("<div>").addClass("KATSidebarButtons")
    .append(
      //to toggle the mode
      KAT.sidebar.modeToggleButton,
      "<br/>",
      "<br/>",

      //to import annotations
      $("<button>")
      .text("Import Annotations")
      .addClass("helpButton")
      .addClass("btn btn-default")
      .click(function(){
        store.showImportDialog();
      }),
      "<br/>",
      "<br/>",

      // to export annotations
      $("<button>")
      .text("Export Annotations")
      .addClass("helpButton")
      .addClass("btn btn-default")
      .click(function(){
        store.showExportDialog();
      }),
      "<br/>",
      "<br/>",
      "<br/>"
    ),
    $("<ul>").addClass("KATMenuItems")
  )
  .css({
    'position':'fixed',
    'right': KAT.sidebar.hideWidth,
    'height': winHeight-10
  }).prependTo("body");

  // create button to toggle collapse and resurection of sidemenu and define properties
  var collapsibleToggle = $("<button>")
  .text("«")
  .addClass("collapseToggle")
  .css({'height': winHeight-10})
  .click(KAT.sidebar.toggleSidebar).prependTo(collapsibleMenu); //adapted from init function below

  //Make sure to show the sidebar
  KAT.sidebar.showSidebar();

  // define changes to sidemenu when page is resized
  // this seems hacky, try to make it all relative with global CSS
  jQuery( window ).resize(function() {
    winHeight = jQuery(window).height();

    collapsibleMenu.css({
      'position':'fixed',
      'right': KAT.sidebar.hideWidth,
      'height': winHeight-10
    });

    collapsibleToggle.css({
      'height': winHeight-10
    });
  });
};

/**
* Shows the sidebar.
*
* @function
* @static
* @name hideSidebar
* @memberof KAT.sidebar
*/
KAT.sidebar.showSidebar = function(){
  KAT.sidebar.extended = true;

  jQuery(".collapseToggle")
  .text("»")
  .parent().animate({right: "0"}, KAT.sidebar.animateLength );
};

/**
* Hides the sidebar.
*
* @function
* @static
* @name hideSidebar
* @memberof KAT.sidebar
*/
KAT.sidebar.hideSidebar = function(){
  KAT.sidebar.extended = false;

  jQuery(".collapseToggle")
  .text("«") // Change text of button.
  .parent().animate({right: KAT.sidebar.hideWidth}, KAT.sidebar.animateLength);
};

/**
* Toggles the state of the sidebar.
*
* @function
* @static
* @name toggleSidebar
* @memberof KAT.sidebar
*/
KAT.sidebar.toggleSidebar = function(){
  if (KAT.sidebar.extended){
    //we are now hidden
    KAT.sidebar.hideSidebar();
  } else {
    //we are now visible
    KAT.sidebar.showSidebar();
  }
};

/**
* Toggles the annotation mode of KAT.
*
* @function
* @static
* @name toggleAnnotationMode
* @memberof KAT.sidebar
*/
KAT.sidebar.toggleAnnotationMode = function(){
  KAT.sidebar.annotationMode = !KAT.sidebar.annotationMode;

  var mode;
  if (KAT.sidebar.annotationMode){
    mode = "Reading";
    KAT.sidebar.showSidebar();
  } else {
    mode = "Annotation";
  }
  KAT.sidebar.modeToggleButton.text("Enable " +mode+ " Mode");
};

/**
* Stores if the sidebar is extended.
* Should be read-only.
*
* @type {boolean}
* @name KAT.sidebar.extended
*/
KAT.sidebar.extended = false;

/**
* Stores if KAT is in annotation Mode.
* Should be readonly.
*
* @type {boolean}
* @name KAT.sidebar.annotationMode
*/
KAT.sidebar.annotationMode = false;

/**
* Width of the sidebar that will be hidden
*
* @type {integer}
* @default -480
* @name KAT.sidebar.hideWidth
*/
KAT.sidebar.hideWidth = -480;

/**
* Duration of animation
*
* @type {integer}
* @default 100
* @name KAT.sidebar.animateLength
*/
KAT.sidebar.animateLength = 100;

/**
* Contains a reference to the mode toggle button in the sidebar.
*
* @type {jQuery}
* @name KAT.sidebar.modeToggleButton
*/
KAT.sidebar.modeToggleButton = undefined;

/**
* Contains a reference to the mode toggle button in the sidebar.
*
* @type {jQuery}
* @name KAT.sidebar.modeToggleButton
*/
KAT.sidebar.modeToggleButton = undefined;

KAT.sidebar.generateAnnotationReferenceField = function(current, env, wrapper, annotation, validations, revalidate){

  //read minimum and maximum field repetitions
  var atleast = current.minimum || 1;
  var atmost = current.maximum || atleast;
  var numFields = 0; // current number of fields

  // generate a container to contain all the text fields.
  var container = $("<div>")
  .appendTo(wrapper);

  validations.push(function(){
    // TODO: validate properly.
    // for now everything is just fine.
    wrapper.addClass("has-success");
    return true;
  });

  // a group for selects
  var selectGroup;

  function createReference(addMinusButtonBool) {

    // we want to add another field
    // but only if we do not have the max already.
    if(numFields < atmost) {

      // do we want to add a minus button?
      addMinusButtonBool = addMinusButtonBool || false;

      // create a new group to append these controls to
      selectGroup = $("<div class='btn-group' role='group'>")
      .appendTo(container);

      // create a new select to add the options to
      // TODO: Make it bootstrap
      newField = jQuery("<select>")
      .addClass("form-control")
      .appendTo(selectGroup);

      //Find all the allowed concepts
      var allowedAnnotations = env.store.filterByConcept.apply(env.store, current.validation);

      // filter the allowed annotations
      jQuery.each(allowedAnnotations, function (i, annot){
        jQuery("<option>")
        .text(annot.uuid)
        .val(annot.uuid)
        .appendTo(newField);
      });

      // and add some spacing.
      $("<br>").appendTo(container);

      // do we have to add a minus button?
      if(addMinusButtonBool) {

        // create a minus button and register a handler for it.
        var minusButton = $("<button class='btn btn-default minusButton " + current.name + "' >")
        .on("click", function(event){ // called to remove field
          event.preventDefault();

          var group = $(event.target).parent();

          // remove the br and input group
          group.prev("br").remove();
          group.remove();

          // show the plusButton from above
          wrapper.find(".plusButton."+current.name).removeAttr("disabled");

          // update the field counter
          numFields--;

          // and revalidate
          revalidate();
        })
        .text("-")
        .prependTo(selectGroup);
      }

      // and increase the counter for the fields.
      numFields++;

      // disable the plus button if it makes sense.
      if(numFields == atmost) {
        wrapper.find(".plusButton."+current.name).attr("disabled", "true");
      }

      // and revalidate
      revalidate();
    }
  }

  // create the initial fields
  // until we have the minimum number of fields
  while(numFields < atleast) {
    createReference(); // create a select field
  }

  // add a plus button to the first field
  // if it makes sense to add it.
  if(numFields < atmost) {
    $("<button class='btn btn-default plusButton " + current.name + "' >")
    .on("click", function(e){
      e.preventDefault();
      createReference(true);
    })
    .text("+")
    .prependTo(selectGroup);

  }

  // set the previous value for the form if available.
  if (typeof annotation !== "undefined"){

    // read the previous value
    var prevValue = annotation.values[current.value].slice();
    var count = 0;
    var val, fields;

    // keep adding each value that we have stored.
    while(prevValue.length !== 0){

      //grab the value from the beginning
      val = prevValue.shift();

      // and increase our counter
      count++;

      // if we do not yet have a
      if(container.find('select').length < count){
        createReference(true);
      }

      // and the set the right value for the select field
      container.find('select').eq(count - 1).val(val.uuid);
    }
  }
};


/**
* generates a new select field in the annotation form.
*
* @param {KAT.model.Field} current - Field to generate.
* @param {jQuery} wrapper - Wrapper element to append the text field to.
* @param {KAT.Store.annotation} annotation - Annotation currently being edited (if available).
* @param {function[]} validations - Validation function array
* @param {function} revalidate - Function to call when revalidating.
* @function
* @static
* @name generateAnnotationSelectField
* @memberof KAT.sidebar
*/
KAT.sidebar.generateAnnotationSelectField = function(current, wrapper, annotation, validations, revalidate){

  //read minimum and maximum field repetitions
  var atleast = current.minimum || 1;
  var atmost = current.maximum || atleast;
  var numFields = 0; // current number of fields

  // generate a container to contain all the text fields.
  var container = $("<div>")
  .appendTo(wrapper);

  validations.push(function(){
    // we do not need to validate.
    // because the user will have to select one of the options anyways.
    wrapper.addClass("has-success");
    return true;
  });

  // a group for selects
  var selectGroup;

  function createSelect(addMinusButtonBool) {

    // we want to add another field
    // but only if we do not have the max already.
    if(numFields < atmost) {

      // do we want to add a minus button?
      addMinusButtonBool = addMinusButtonBool || false;

      // create a new group to append these controls to
      selectGroup = $("<div class='btn-group' role='group'>")
      .appendTo(container);

      // create a new select to add the options to
      // TODO: Make it bootstrap
      newField = jQuery("<select>")
      .addClass("form-control")
      .appendTo(selectGroup);

      // set up all the different options correctly.
      jQuery.each(current.validation, function(j, opt){
        jQuery("<option>")
        .text(opt.value)
        .val(j)
        .appendTo(newField);
      });

      // and add some spacing.
      $("<br>").appendTo(container);

      // do we have to add a minus button?
      if(addMinusButtonBool) {

        // create a minus button register a handler for it.
        var minusButton = $("<button class='btn btn-default minusButton " + current.name + "' >")
        .on("click", function(event){ // called to remove field
          event.preventDefault();

          var group = $(event.target).parent();

          // remove the br and input group
          group.prev("br").remove();
          group.remove();

          // show the plusButton from above
          wrapper.find(".plusButton."+current.name).removeAttr("disabled");

          // update the field counter
          numFields--;

          // and revalidate
          revalidate();
        })
        .text("-")
        .prependTo(selectGroup);
      }

      // and increase the counter for the fields.
      numFields++;

      // disable the plus button if it makes sense.
      if(numFields == atmost) {
        wrapper.find(".plusButton."+current.name).attr("disabled", "true");
      }

      // and revalidate
      revalidate();
    }
  }

  // create the initial fields
  // until we have the minimum number of fields
  while(numFields < atleast) {
    createSelect(); // create a select field
  }

  // add a plus button to the first field
  // if it makes sense to add it.
  if(numFields < atmost) {
    $("<button class='btn btn-default plusButton " + current.name + "' >")
    .on("click", function(e){
      e.preventDefault();
      createSelect(true);
    })
    .text("+")
    .prependTo(selectGroup);
  }

  // set the previous value for the form if available.
  if (typeof annotation !== "undefined"){

    // read the previous value
    var prevValue = annotation.values[current.value].slice();
    var count = 0;
    var val, fields;

    // keep adding each value that we have stored.
    while(prevValue.length !== 0){

      //grab the value from the beginning
      val = prevValue.shift();

      // and increase our counter
      count++;

      // if we do not yet have a
      if(container.find('select').length < count){
        createSelect(true);
      }

      // and the set the right value for the select field
      var selectField = container.find('select').eq(count - 1);

      // by iterating over all the options.
      for(var i=0;i<current.validation.length;i++){
        if(current.validation[i].value === val.value){
          selectField.val(i);
        }
      }
    }
  }
};

/**
* generates a new text field in the annotation form.
*
* @param {KAT.model.Field} current - Field to generate.
* @param {jQuery} wrapper - Wrapper element to append the text field to.
* @param {KAT.Store.annotation} annotation - Annotation currently being edited (if available).
* @param {function[]} validations - Validation function array
* @param {function} revalidate - Function to call when revalidating.
* @function
* @static
* @name generateAnnotationTextField
* @memberof KAT.sidebar
*/
KAT.sidebar.generateAnnotationTextField = function(current, wrapper, annotation, validations, revalidate){

  //read minimum and maximum field repetitions
  var atleast = current.minimum || 1;
  var atmost = current.maximum || atleast;
  var numFields = 0; // current number of fields

  // generate a container to contain all the text fields.
  var container = $("<div>")
  .appendTo(wrapper);

  // parse the RegEx we want to valiate against.
  var RegExpression = current.validation;

  // add our validation function.
  validations.push(function(){
    // we need to validate everything.
    var isFieldOK = true;

    container.children().each(function(){
      // we go over the sub wrapper.
      var subWrapper = $(this);
      var newField = subWrapper.find("input[type=text]");

      // if we do not have a field, just skip it.
      if(newField.length === 0){
        return;
      }

      // remove the validation classes
      subWrapper.removeClass("has-success has-error");

      // if we pass validation
      if(RegExpression.test(newField.val())) {

        // add a success class
        subWrapper.addClass("has-success");
        isFieldOK = isFieldOK && true;
      } else {
        // else add an error class
        subWrapper.addClass("has-error");
        isFieldOK = false; //  isFieldOK && false;
      }
    });

    return isFieldOK;
  });

  // a group of inputs
  var inputGroup;

  function createTextField(addMinusButtonBool) {

    // we want to add another field
    // but only if we do not have the max already.
    if(numFields < atmost) {

      // do we want to add a minus button?
      addMinusButtonBool = addMinusButtonBool || false;

      // create a new input group for this set of controls
      inputGroup = $("<div>")
      .addClass("input-group")
      .appendTo(container);

      // and create a text field
      $("<input type='text'>")
      .addClass("tfield")
      .addClass("form-control")

      // append it to the inputGroup
      .appendTo(inputGroup)

      // and revalidate upon changing something.
      .keyup(function(){
        revalidate();
      });

      // create an info button
      var addon = $("<span>")
      .addClass("input-group-btn")
      .appendTo(inputGroup);

      // and add a message to it.
      // TODO: Add how many times we may have this field.
      var info = "<p>"+current.documentation + "</p><p>" +
      "You are expected to match the following Regular Expression: </br>" +RegExpression +"</p>";

      // that we want to have as a popover.
      var popover = $("<button type='button' class='btn btn-default'>")
      .attr("title","Information")
      .text("?")
      .popover({html:true, toggle:"popover", placement:"top", content:info, container: "#"+current.name})
      .appendTo(addon);

      // add some spacing
      $("<br>").appendTo(container);

      // do we have to add a minus button?
      if(addMinusButtonBool) {

        // create a minus button.
        var span = $("<span class='input-group-btn'>")
        .prependTo(inputGroup);

        // and register a handler for it.
        var minusButton = $("<button class='btn btn-default minusButton " + current.name + "' >")
        .on("click", function(event){ // called to remove field
          event.preventDefault();

          var group = $(event.target).parent().parent();

          // remove the br and input group
          group.prev("br").remove();
          group.remove();

          // show the plusButton from above
          wrapper.find(".plusButton."+current.name).removeAttr("disabled");

          // update the field counter
          numFields--;

          // and revalidate
          revalidate();
        })
        .text("-")
        .appendTo(span);
      }

      // and increase the counter for the fields.
      numFields++;

      // disable the plus button if it makes sense.
      if(numFields == atmost) {
        wrapper.find(".plusButton."+current.name).attr("disabled", "true");
      }

      // and revalidate
      revalidate();

    }
  }

  // create the initial fields
  // until we have the minimum number of fields
  while(numFields < atleast) {
    createTextField(); // create a text field
  }

  // add a plus button to the first field
  // if it makes sense to add it.
  if(numFields < atmost) {
    $("<span class='input-group-btn'>").append(
      $("<button class='btn btn-default plusButton " + current.name + "' >")
      .on("click", function(e){
        e.preventDefault();
        createTextField(true);
      })
      .text("+")
    )
    .prependTo(inputGroup);
  }

  // set the previous value for the form if available.
  if (typeof annotation !== "undefined"){

    // read the previous value
    var prevValue = annotation.values[current.value].slice();
    var count = 0;
    var val, fields;

    // keep adding each value that we have stored.
    while(prevValue.length !== 0){

      //grab the value from the beginning
      val = prevValue.shift();

      // and increase our counter
      count++;

      // if we do not yet have a text field, create it
      if(container.find('input[type="text"]').length < count){
        createTextField(true);
      }

      // and the set the right value.
      container.find('input[type="text"]').eq(count - 1).val(val);
    }
  }
};

/**
* Set up and insert Annotation Toolkit sidemenu
*
* @param {JOBAD.modules.loadedModule} env - JOBAD loaded Module instance
* @param {function} callback - Callback that is called once the form is closed. Should return an annotation.
* @param {KAT.Store.annotation} annotation - Annotation currently being edited (if available).
* @param {KAT.gui.selection} selection - The selection to create an annotation for.
* @param {KAT.model.Concept} concept - Concept to generate annotation for.
* @function
* @static
* @name genNewAnnotationForm
* @memberof KAT.sidebar
*/
KAT.sidebar.generateAnnotationForm = function(env, callback, annotation, selection, concept){
  // make sure the sidebar is extended.
  if(!KAT.sidebar.extended){
    KAT.sidebar.toggleSidebar();
  }

  var values;
  var task;

  // get the task name based on if the annotation is defined or not.
  if (typeof annotation === "undefined"){
    task = "Enter";
  } else {
    task = "Edit";
    values = annotation.values;
  }

  // create a new element to add to the sidebar.
  var newAnnotation = $("<li>").append("<h4> "+concept.name+" - "+task+" Annotation Details</h4>")
  .appendTo(".KATMenuItems");

  // a list of validation functions to run.
  var validations = [];

  // only if all of them return true,
  // we enable the save button.
  var revalidate = function(){
    var result = true;

    // loop over the validations.
    jQuery.each(validations, function(i, validate){
      result = result && validate();
    });

    // if all of the validations are OK,
    // we can unlock the 'save' button
    if(result){
      saveButton.removeAttr("disabled");
    } else {
      // else we need to disable it.
      saveButton.attr("disabled", "disabled");
    }

    return result;
  };

  // add a new form
  var newForm = $("<form>").addClass("form-inline").appendTo(newAnnotation).on("submit", function(e){

    // prevent form submission
    e.preventDefault();

    // click the save button
    saveButton.click();

    return false;
  });

  // create a submit control group for the form
  var submitGroup = $("<div>").addClass("btn-group");

  // create a save button
  // so we can submit the form.
  var saveButton = $("<button type='submit'>").addClass("btn btn-primary").text("Save").click(function(e){

    // prevent form submission
    e.preventDefault();

    // if we can not validate the form,
    // just return.
    if(!revalidate()){
      return;
    }

    // The result JSON
    // TODO: Make this smarter.
    var valuesJSON = {};

    // go over the input fields and gather the values.
    $.each(concept.fields, function(i, field){

      //also get the current input field.
      var infield = inputFieldGroups[i];

      // store the value in the valueJSON as an array
      if(field.type == KAT.model.Field.types.reference){
        // for references, find the actual UUID.
        valuesJSON[field.value] = infield.find("select").map(function(){return env.store.find($(this).val()); }).get().slice();
      } else if(field.type == KAT.model.Field.types.select){
        // for option, store the selected option.
        valuesJSON[field.value] = infield.find("select").map(function(){return field.validation[$(this).val()]; }).get().slice();
      } else {
        // for text, simply store the values of the text fields
        valuesJSON[field.value] = infield.find("input[type=text]").map(function(){return $(this).val(); }).get().slice();
      }
    });

    //close all popovers
    $('.popover').popover('destroy').remove();

    // remove the entire form
    newAnnotation.remove();

    // callback
    var theannotation = callback(selection, concept, valuesJSON, annotation);
    theannotation.draw();

    return false;
  }).appendTo(submitGroup);

  // create a cancel button
  // to cancel editing when needed
  var cancelButton = $("<button type='button'>").addClass("btn btn-danger").text("Cancel").click(function(){
    //close all popovers
    $('.popover').popover('destroy').remove();

    // remove the entire form
    newAnnotation.remove();
  }).appendTo(submitGroup);


  // map over the input fields
  var inputFieldGroups = jQuery.map(concept.fields, function(current){

    // create a new group
    // to append to the <form>
    var fieldGroup = $("<div>").appendTo(newForm);

    // create a wrapper for it.
    var wrapper = $("<div id='" + current.name + "'>")
    .addClass("form-group")
    .appendTo(fieldGroup)
    .css({'overflow':'auto'})
    .append(
      $("<label>").addClass("control-label").text(current.value), // add a label
      "&nbsp;" //and some spacing.
    );

    // and create groups for them
    // depending on the type
    if(current.type === KAT.model.Field.types.text){
      KAT.sidebar.generateAnnotationTextField(current, wrapper, annotation, validations, revalidate);
    } else if(current.type === KAT.model.Field.types.select) {
      KAT.sidebar.generateAnnotationSelectField(current, wrapper, annotation, validations, revalidate);
    } else if(current.type === KAT.model.Field.types.reference) {
      KAT.sidebar.generateAnnotationReferenceField(current, env, wrapper, annotation, validations, revalidate);
    }

    // return our group of fields
    return fieldGroup;
  });

  // append the submit group and stuff
  newForm.append(
    "<br />",
    submitGroup
  );

  // and re-validate the form
  revalidate();
};

KAT.storage = {};

/**
  * Resolves a relative url.
	* @param {string} url	Url to resolve
	* @param {string} [base = "."]	Optional. Base url to use.
	* @param {boolean} [isDir = false]	Optional. If set to true, will return a directory name ending with a slash.

  * @returns {string} - An absolute (resolved) url.
  * @function
  * @static
  * @name resolve
  * @memberof KAT.storage
  */
KAT.storage.resolve = function(url, base, isDir){

  // read in parameters
	var resolveWithBase = false;
	var baseUrl, oldBase, newBase;

  // do we have a base to resolve first?
	if(typeof base === "string"){
		resolveWithBase = true;

    //resolve the <base>
		baseUrl = arguments.callee(base, true);

		oldBase = jQuery("base").detach();
		newBase = jQuery("<base>").attr("href", baseUrl).appendTo("head");
	}

  // create a link with the right url.
  // TODO: Cleanup this code.
  var el = document.createElement('div');
  el.innerHTML = '<a href="'+jQuery('<span/>').text(url).html()+'">x</a>';

  // take the absolute url from the div.
  var absUrl = el.firstChild.href;

  // remove the base if it was added.
  if(resolveWithBase){
  	newBase.remove();
  	oldBase.appendTo("head");
  }

  // add a slash to the directory.
  if( (base === true || isDir === true ) && absUrl[absUrl.length - 1] != "/"){
    absUrl = absUrl + "/";
  }

  // return the absolute URL.
  return absUrl;
}; 

KAT.storage.Store = function(gui, docURL){
  /**
  * KAnnSpecCollection this store instance knows.
  *
  * @type {KAT.model.KAnnSpecCollection}
  * @name KAT.storage.Store#collection
  */
  this.collection = gui.collection;

  /**
  * The GUi associated to this Store.
  *
  * @type {KAT.gui}
  * @name KAT.storage.Store#gui
  */
  this.gui = gui;

  /**
  * URL of document currently loaded.
  *
  * @type {string}
  * @name KAT.storage.Store#docURL
  */
  this.docURL = KAT.storage.resolve(docURL);

  /**
  * Stored annotations in this Store.
  *
  * @type {KAT.storage.Annotation[]}
  * @name KAT.storage.Store#annotations
  */
  this.annotations = [];
};

/** Adds a new annotation to this Store.
*
* @param {KAT.gui.selection} selection - Selection of new Annotation.
* @param {KAT.model.concept} concept - Concept of the new Annotation.
* @returns {KAT.storage.Annotation} - the new annotation
*
* @function
* @instance
* @name addNew
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.addNew = function(selection, concept, values){
  //create new annotation.
  var newAnnotation = new KAT.storage.Annotation(this, selection, concept, values );

  //store it in this store.
  this.annotations.push(newAnnotation);

  //and return it.
  return newAnnotation;
};

/** Adds a new annotation to this Store based on a JSON object.
*
* @param {KAT.storage.Annotation~JSON} json - Serialised annotation to add.
*
* @function
* @instance
* @name addFromJSON
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.addFromJSON = function(json){

  //create new annotation.
  var newAnnotation = new KAT.storage.Annotation(this, KAT.storage.Store.UUID2Selection(json.uuid), this.collection.getConcept(json.concept));

  //load the values.
  newAnnotation.values = json.values;

  //store it in this store.
  this.annotations.push(newAnnotation);

  //and return it.
  return newAnnotation;
};

/** Filters all annotations by a certain name.
*
* @param {string} concept - Concept of annotation to find.
* @returns {KAT.storage.Annotation[]} - List of annotations.
*
* @function
* @instance
* @name filterByConcept
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.filterByConcept = function(concept){
  //the filtered annotation we want to find.
  var filteredAnnotations = [];

  //we want to look over the arguments
  var conceptNames = jQuery.makeArray(arguments);
  var showAll = (conceptNames.length === 0);

  //and check that we can find the right annotations.
  jQuery.each(this.annotations, function(index, annot){
    if(showAll || conceptNames.indexOf(annot.concept.name) != -1){
      filteredAnnotations.push(annot);
    }
  });

  //return the annotations.
  return filteredAnnotations;
};

/** Finds an annotation if it exists.
*
* @param {string} uuid - UUID of annotation to find.
* @returns {KAT.storage.Annotation|undefined} - The given annotation if found.
*
* @function
* @instance
* @name find
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.find = function(uuid){

  //look for the annotation by uuid.
  for(var i=0;i<this.annotations.length;i++){
    if(this.annotations[i].uuid == uuid){
      return this.annotations[i];
    }
  }

  //nope, we want empty.
  return undefined;
};

/** Returns all (drawn) annotations which match a certain element.
*
* @param {jQuery} element - Element of annotation to find.
* @returns {KAT.storage.Annotation[]} - The given annotations if found.
*
* @function
* @instance
* @name findfromElement
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.findfromElement = function(element){
  var elements = $(element).parentsUntil(this.element).andSelf().add(this.element);
  var ids = [];

  var results = [];

  for(var i=elements.length - 1; i >= 0; i--){
    //find all the current ones.
    var annotations = elements.eq(i).data("KAT.Annotation.UUID") || [];

    for(var j=0;j<annotations.length;j++){
      //add them by id if we do not already have it.
      if(ids.indexOf(annotations[j]) == -1){
        ids.push(annotations[j]);
        results.push(this.find(annotations[j]));
      }
    }
  }

  return results;
};


/** Updates all references.
*
* @function
* @instance
* @name updateReferences
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.updateReferences = function(){

  // have a reference to me.
  var me = this;

  //go over all the annotations.
  jQuery.map(this.annotations, function(annot){

    //and their fields
    jQuery.map(annot.concept.fields, function(field){

      //and check the references.
      if(field.type === KAT.model.Field.types.reference){
        jQuery.map(annot.values[field.value], function(e, i){
          // if it is a string, set the reference properly.
          if(typeof e === "string"){
            annot.values[field.value][i] = me.find(e);
          }
        });
      }
    });
  });
};

/** Exports all the annotations in this store to RDF.
*
* @function
* @instance
* @name toRDF
* @memberof KAT.storage.Store
* @return {document} - returns
*/
KAT.storage.Store.prototype.toRDF = function(){
  //self-reference
  var me = this;

  // Create the top-level rdf document.
  var rdfTopLevel = $(KAT.rdf.create("rdf:RDF"))
  .attr("xmlns:kat", KAT.rdf.kat_namespace)
  .attr("xmlns:rdf", KAT.rdf.rdf_namespace);

  // Create a run element.
  // TODO: Read this when importing and store this?
  var runID = "kat_run";


  rdfTopLevel.append(

    // referencing to the blank node
    $(KAT.rdf.create("rdf:Description")).append(
      KAT.rdf.attr($(KAT.rdf.create("kat:annotation")), "rdf:nodeID", runID)
    ),

    // create the blanknode
    KAT.rdf.attr(
      $(KAT.rdf.create("rdf:Description")),
      "rdf:nodeID",
      runID
    ).append(
      KAT.rdf.attr(
        $(KAT.rdf.create("rdf:type")),
        "rdf:resource",
        "kat:run"
      ),
      KAT.rdf.attr(
        $("<kat:date />").text((new Date()).toISOString()),
        "rdf:datatype",
        "xs:dateTime"
      ),
      $("<kat:tool>").text("KAT"),
      $("<kat:runid>").text("0") //TODO: Have a better runID
    )
  );

  //stores KannSpecs already run.
  var specsRun = {};

  //Find all the KAnnSpecs
  jQuery.each(this.annotations, function(i, annotation){
    // The KAnnSpec
    var spec = annotation.concept.KAnnSpec;

    // if we have already run it, just return.
    if(!specsRun[spec.rdf_nodeid]){

      // we have run this KAnnSpec.
      specsRun[spec.rdf_nodeid] = true;

      // find all the XML namespaces. Ignore the default namespace because we don't want that.
      // and write them onto the top-level RDF element.
      spec.xml.find("annotation").each(function(){
        $.each(this.attributes, function(i, attrib){
           var name = attrib.name;
           var value = attrib.value;

           if(name.startsWith("xmlns:")){
             rdfTopLevel.attr(name, value);
           }
        });
      });

     // and create a blank node for it.
     rdfTopLevel.append(
       $(KAT.rdf.create("rdf:Description")).append(
         KAT.rdf.attr(
           $(KAT.rdf.create("kat:annotation")),
           "rdf:nodeID",
           spec.rdf_nodeid
        )
       ),

       KAT.rdf.attr($(KAT.rdf.create("rdf:Description")), "rdf:nodeID", spec.rdf_nodeid).append(
         KAT.rdf.attr($("<rdf:type>"), "rdf:resource", "kat:kannspec"),

         $("<kat:kannspec-name>").text(spec.name),
         $("<kat:kannspec-URI>").text(spec.url)
       )
     );

   }

   // now create a new blank node for the actual annotation.
   // we have a function for this.
   rdfTopLevel.append($(annotation.toRDF(me.docURL, runID)).children());
  });

  // get an rdf string
  var rdfString = rdfTopLevel.get(0).outerHTML;

  // TODO: Remove this
  console.log(rdfString);

  return rdfString;
};

/** Adds a new annotation to this Store based on an RDF export.
*
* @param {document} rdf - RDF to read from.
*
* @function
* @instance
* @name addFromRDF
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.addFromRDF = function(rdf){

  var me = this;

  // do some intial parsing.
  var parsedRDF = jQuery(rdf);

  // find all the annotations.
  var added = jQuery('rdf\\:Description', parsedRDF).has('kat\\:annotates').map(function(e){
    var na = KAT.storage.Annotation.fromRDF(parsedRDF, jQuery(this).attr("rdf:nodeId"), me);
    me.annotations.push(na);
    return na;
  }).toArray();


  // update references.
  this.updateReferences();

  return added;
};

/** Shows an export dialog.
*
* @function
* @instance
* @name showExportDialog
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.showExportDialog = function(){

  //generate the document to export
  var rdfDoc = this.toRDF();

  //and a textarea with it.
  var textarea = $("<textarea rows='20' readonly='readonly'>").addClass("form-control").text(rdfDoc); 

  // make a dialog
  var dialog = KAT.gui.dialog("Export Annotations", "", ["OK"], function(){this.close();});


  // and add the document
  dialog.$content.append(
    $("<form>").addClass("form").append(textarea)
  );

  //add some magic focusing code.
  textarea.focus(function() {
    textarea
    .select()
    .mouseup(function(){
      textarea.unbind("mouseup");
      return false;
    });
  });

  // and make it focus on click.
  textarea.click(function(){
    textarea.focus();
  }).click();
};

/** Shows an import dialog.
*
* @function
* @instance
* @name showImportDialog
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.showImportDialog = function(){

  // have a prompt
  var rdfDoc = prompt("Paste annotations to import here: ");

  // parse the annotations
  var annots = this.addFromRDF(jQuery(rdfDoc).get(0));

  //and draw them
  for(var i=0;i<annots.length;i++){
    annots[i].draw();
  }
};

/**
* Generates a UUID from a selection.
*
* @param {KAT.gui.selection} selection - Selection to generate UUID from.
* @returns {string} - new uuid.
* @function
* @static
* @name Selection2UUID
* @memberof KAT.storage.Store
*/
KAT.storage.Store.Selection2UUID = function(selection){
  return "cse("+selection.container+","+selection.start+","+selection.end+")";
};

/**
* Generates a selection from a UUID.
*
* @param {string} uuid - UUID to generate selection from.
*
* @returns {KAT.gui.selection|boolean} - Selection obtained from UUID. Returns false if no selection could be obtained.
* @function
* @static
* @name Selection2UUID
* @memberof KAT.storage.Store
*/
KAT.storage.Store.UUID2Selection = function(selection){

  //Pre and Post Fixes of the UUIDs
  var prefix  = 'cse(';
  var postfix = ')';

  var begin = selection.substring(0, prefix.length);
  var end = selection.substring(selection.length - postfix.length);

  //check that we start and end with the right thing.
  if(begin !== prefix || end !== postfix){
    return false;
  }

  //remove the pre and post fix.
  selection = selection.substring(prefix.length, selection.length - postfix.length);

  //and split into the three parts.
  selection = selection.split(",");

  //we expect this to be of length 3
  if(selection.length !== 3){
    return false;
  }

  //and return the right components.
  return {
    "container": selection[0],
    "start": selection[1],
    "end": selection[2],
    "startOffset": 0,
    "endOffset": 0
  };
};

KAT.storage.Annotation = function(store, selection, concept, values, id){

  /**
  * The Store this annotation is stored in.
  *
  * @type {KAT.storage.Annotation}
  * @name KAT.storage.Annotation#store
  */
  this.store = store;

  //generate the UUID from the selection
  var uuid = id || "KAT_"+(new Date().getTime())+"_"+(Math.floor(Math.random()*10000));

  //Check if we already have the uuid.
  if(this.store.find(uuid)){
    throw new Error("Annotation with given uuid already exists. ");
  }

  /**
  * UUID of this annotation.
  *
  * @type {string}
  * @name KAT.storage.Annotation#uuid
  */
  this.uuid = uuid;

  /**
  * Selection of this annotation.
  *
  * @type {KAT.gui.selection}
  * @name KAT.storage.Annotation#selection
  */
  this.selection = selection;

  /**
  * The concept this annotation represents.
  *
  * @type {KAT.model.Concept}
  * @name KAT.storage.Annotation#concept
  */
  this.concept = concept;

  //Either use existing values or use the default.
  values = (typeof values !== "undefined")?values:concept.getDefault();

  /**
  * The current values of this annotation, excluding selection.
  *
  * @type {object}
  * @name KAT.storage.Annotation#values
  */
  this.values = values;
};

/** Creates a new Annotation instance from an RDF node.
*
* @param {string} id - Id of annotation to create
* @param {jQuery} rdf - RDF source to work with.
* @param {KAT.storage.Store} store - The store associated with this annotation.
*
* @returns KAT.storage.Annotation
*
* @function
* @static
* @name KAT.storage.Annotation.fromRDF
* @memberof {KAT.storage.Annotation}
*/
KAT.storage.Annotation.fromRDF = function(rdf, id, store){

  // parse the rdf.
  var $rdf = jQuery(rdf);

  // helper function to make a namespaced tag.
  var makeNSTag = function(code, escaped){
    var tag = KAT.rdf.buildNameSpace(code, $rdf.get(0));
    return escaped?(tag.replace(new RegExp(':', 'g'), '\\:')):tag;
  };

  // find the annotation RDF by id.
  var annotRDF = KAT.rdf.findById($rdf, id);

  // extract the selection.
  var url = annotRDF.find("kat\\:annotates").attr("rdf:resource");

  // and get the selection part of the url
  var partURL;

  // if we do not start with the right URL, we need to do something else
  if(url.substring(0, store.docURL.length + 1) != store.docURL+"#"){
    if(url.indexOf("#") != -1){
      console.log("Currently loaded document does not match RDF annotation, loading it anyways ... ");
      partURL = decodeURIComponent(url.indexOf("#") + 1);
    } else {
      throw new Error("Malformed RDF: Unable to parse selection URL. ");
    }
  } else {
    partURL = decodeURIComponent(url.substring(store.docURL.length + 1));
  }

  // parse the selection.
  var selection = KAT.storage.Store.UUID2Selection(partURL);

  // get the kann spec element.
  var kspecElem = KAT.rdf.findById($rdf, annotRDF.find("kat\\:kannspec").attr("rdf:nodeID"));

  // check if we have found it
  if(kspecElem.length !== 1){
    throw new Error("Malformed RDF: Unable to find KAnnSpec. ");
  }

  // get the url
  var kspecURL = kspecElem.find("kat\\:kannspec-uri").text();

  var kSpecName = kspecElem.find("kat\\:kannspec-name").text();

  if(!kSpecName){
    throw new Error("Malformed RDF: Missing <kat:kannspec-name>");
  }

  // get the actual KAnnSpec
  var kspec = store.collection.getKAnnSpec(kSpecName);

  // check if the KAnnSpec exists.
  if (!kspec){
    throw new Error("KAnnSpec '"+kSpecName+"' not loaded. ");
  }

  // The KAnnSpec URL does not match.
  if (!kspecURL || kspecURL !== kspec.url){
    console.warn("Warning: KAnnSpec URL does not match. ");
  }

  // force the KAnnSpec RDF node id.
  kspec.rdf_nodeid = annotRDF.find("kat\\:kannspec").attr("rdf:nodeID");


  // now find the concept
  var conceptName = annotRDF.find("kat\\:concept").text();

  if (!conceptName){
    throw new Exception("Malformed RDF: Missing <kat:concept>");
  }

  // get the concept.
  var concept = kspec.getConcept(conceptName);

  if(!concept){
    throw new Error("Concept '"+conceptName+"' not found inside '"+kSpecName+"'");
  }

  // array for values to read.
  var values = {};

  // iterate over all the fields.
  jQuery.each(concept.fields, function(_, field){

    var fieldValues = [];

    if(field.type == KAT.model.Field.types.text){
      // find all the tags and get the text.
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function(){
        fieldValues.push(jQuery(this).text());
      });

    } else if(field.type == KAT.model.Field.types.reference){
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function(){
        fieldValues.push(jQuery(this).attr("rdf:nodeID"));
      });
    } else if(field.type == KAT.model.Field.types.select){
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function(){
        var optionSpec = jQuery(this).attr("rdf:resource");

        // go over the options
        for(var i=0;i<field.validation.length; i++){

          // and find the right one.
          if(field.validation[i].rdf_obj === optionSpec || field.validation[i].value === optionSpec){
            fieldValues.push(field.validation[i]);
            return;
          }
        }

        throw new Error("Option '"+optionSpec+"' not found inside '"+kSpecName+"'");
      });
    }

    // store the field values.
    // if they are missing it is just an empty array.
    values[field.value] = fieldValues;
  });

  var newAnnot = new KAT.storage.Annotation(store, selection, concept, values, id);

  return newAnnot;
};

/**
* Exports an annotation to RDF.
*
* @param {string} docURL - The URL of the document currently opened
* @param {string} runID - rdf:nodeID of the run.
*
* @return document
* @function
* @name toRDF
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.toRDF = function(docURL, runID){

  var me = this;

  // a few shorthands
  var concept = this.concept;
  var target = docURL+"#"+encodeURIComponent(KAT.storage.Store.Selection2UUID(this.selection));

  //create a parent.
  var parent = $(KAT.rdf.create("rdf:RDF"));

  var contentDesc =
  // create a blank node with the given id.
  KAT.rdf.attr(
    $(KAT.rdf.create('rdf:Description')),
    "rdf:nodeID",
    this.uuid
  ).appendTo(parent).append(

    // point to the run
    KAT.rdf.attr(
      $(KAT.rdf.create('kat:run')),
      "rdf:nodeID",
      runID
    ),

    // point to the KAnnSpec
    KAT.rdf.attr(
      $(KAT.rdf.create('kat:kannspec')),
      "rdf:nodeID",
      concept.KAnnSpec.rdf_nodeid
    ),

    // point to the concept
    $(KAT.rdf.create('kat:concept')).text(concept.name),

    // and the KAT type
    KAT.rdf.attr(
      $(KAT.rdf.create('kat:type')),
      "rdf:resource",
      concept.rdf_type
    ),

    // and point to the selection.
    KAT.rdf.attr(
      $(KAT.rdf.create('kat:annotates')),
      "rdf:resource",
      target
    )
  );


  jQuery.each(concept.fields, function(i, field){
    var value = me.values[field.value];

    // check if the value is an array.
    var fieldVal = jQuery.isArray(value)?value:[value];

    jQuery.each(fieldVal, function(i, value){


      // create an element to add to the RDF
      var rdfElement = $(
        KAT.rdf.create(
          KAT.rdf.buildNameSpace(field.rdf_pred, concept.KAnnSpec.xml)
        )
      ).appendTo(contentDesc);


      if(field.type == KAT.model.Field.types.text){
        // for a text field, simply store the value.
        rdfElement.text(value);
      } else if(field.type == KAT.model.Field.types.reference){
        // for a reference, point to the RDF id.
        KAT.rdf.attr(
          rdfElement,
          "rdf:nodeID",
          value.uuid
        );

      } else if(field.type == KAT.model.Field.types.select){
        // For a select, use the rdf_obj property
        KAT.rdf.attr(
          rdfElement,
          "rdf:resource",
          value.rdf_obj?value.rdf_obj:(value.value)
        );
      }

    });
  });

  //get the Dom Node.
  return parent.get(0);
};

//===
//edit & delete
//===

/**
* Shows an edit form for the annotation.
*
* @function
* @name edit
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.edit = function(env){

  KAT.sidebar.generateAnnotationForm(
    env,
    function(selection, concept, valuesJSON, annotation){
      // update the values.
      annotation.values = valuesJSON;

      // re-draw the annotation.
      annotation.undraw();
      annotation.draw();

      //flash it.
      annotation.flash();

      return annotation;
    },
    this,
    this.selection,
    this.concept
  );
};

/**
* Deletes an annotation
*
* @function
* @name delete
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.delete = function(){

  //undraw me.
  this.undraw();

  //look for this annotation by id and remove it.
  for(var i=0;i<this.store.annotations.length;i++){
    if(this.store.annotations[i].uuid == this.uuid){
      this.store.annotations.splice(i, 1);
      break;
    }
  }
};

//=======
//Drawing & Highlighting
//=======

/**
* Draws an annotation to the text.
*
* @function
* @name draw
* @memberof KAT.storage.Annotation
*/

KAT.storage.Annotation.prototype.draw = function(){

  //this is me.
  var me = this;

  // find the elements in the selection.
  this.store.gui.getRange(this.selection)

  // and iteratate over them
  .each(function(){
    var $me = $(this);

    // store the id of this annotation on the element itself
    // however some other annotations might already be registered to this element.

    // get current annotations and store them somewhere
    var current = $me.data("KAT.Annotation.UUID") || [];
    var before = current.slice();

    // add this annotation and push it to the UUIDs
    current.push(me.uuid);
    $me.data("KAT.Annotation.UUID", current);
  });

  // and re-draw
  this.updateDrawing();
};

/**
* Updates the rendering of all elements in the current selection.
* Incorperates overlapping annotations.
*
* @function
* @name updateDrawing
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.updateDrawing = function(){

  // get a refernce to the store to find other annotations.
  var store = this.store;


  // find the elements in the selection.
  this.store.gui.getRange(this.selection)

  // and iteratate over them
  .each(function(){

    var $me = $(this);

    // get all the annotations linked to the given selection.
    var annotations = $me.data("KAT.Annotation.UUID") || [];


    if(annotations.length === 0){
      // no annotations are linked to this element anymore
      // so remove all the magic.

      // remove the background color
      // again we need to differentiate the MathML and non-mathml cases
      if(this.namespaceURI.indexOf("MathML") != -1){
        $me.removeAttr("mathbackground") // remove the MathBackground
        .attr("mathbackground", $me.data("KAT.Annotation.orgBackgroundAttr")) // set it to the original value
        .removeData("KAT.Annotation.orgBackgroundAttr"); // and discard the stored value.
      } else {
        $me.css('background-color', '') // reset the css background color.
        .css("background-color", $me.data("KAT.Annotation.orgBackgroundAttr")) // set it to the original value
        .removeData("KAT.Annotation.orgBackgroundAttr"); // and discard the stored value.
      }

      // and the Background cache is gone.
      $me.removeData("KAT.Annotation.hasBGCache");

      // remove the title attribute.
      $me.removeAttr("title")
      .tooltip('destroy')
      .removeAttr('data-toggle')
      .removeAttr('data-html')
      .attr("title", $me.data("KAT.Annotation.orgTitleAttr")) // and set it back to what it was before.
      .removeData("KAT.Annotation.orgTitleAttr")
      .removeData("KAT.Annotation.hasTCache");

    } else {
      // we have some annotation bound to this element.
      // so we need to work with that annotation.


      // for now, just take the first annotation that is bound to the element.
      // TODO: What do we do if there are multiple annotations?
      var me = store.find(annotations[annotations.length - 1]);

      // set the background color to this one
      var color = me.concept.displayColour;

      // we need to differentiate between MathML and non-mathml nodes here
      if(this.namespaceURI.indexOf("MathML") != -1){

        // if we do not have a cache, we need to store the old color
        if($me.data("KAT.Annotation.hasBGCache") !== true){
          $me
          .data("KAT.Annotation.hasBGCache", true)
          .data("KAT.Annotation.orgBackgroundAttr", $me.attr("mathbackground"));
        }

        $me.attr("mathbackground", color); // and set the new display color
      } else {

        // if we do not have a cache, we need to store the old color
        if($me.data("KAT.Annotation.hasBGCache") !== true){
          $me
          .data("KAT.Annotation.hasBGCache", true)
          .data("KAT.Annotation.orgBackgroundAttr", $me.css('background-color'));
        }

        $me.css('background-color', color); // and set the new display color
      }

      // we need to recompute the tooltip
      // and need to take care of overlapping annotations

      // store the original title attribute if available
      if($me.data("KAT.Annotation.hasTCache") !== true){
        $me
        .data("KAT.Annotation.hasTCache", true)
        .data("KAT.Annotation.orgTitleAttr", $me.attr("title"));
      }

      // and recompute the tooltip.
      $me
      .attr("title", me.recomputeTooltip())
      .tooltip('destroy')
      .attr({
        'data-toggle': 'tooltip',
        'data-html': true
      }).tooltip();
    }

  });
};

/**
* Un-draws an annotation to the text.
*
* @function
* @name undraw
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.undraw = function(){
  //this is me
  var me = this;

  //find the elements in the selection.
  var range = this.store.gui.getRange(this.selection);

  //remove the class and data
  range.each(function(){
    var $me = $(this);

    //the current data
    var current = $(this).data("KAT.Annotation.UUID") || [];

    //find the current index and remove it.
    var index = current.indexOf(me.uuid);

    //if we have the right index, remove an element.
    if(~index){
      current.splice(index, 1);
      $me.data("KAT.Annotation.UUID", current);
    }
  });

  // and re-draw
  this.updateDrawing();
};

/**
* Computes the tooltip of an element.
*
* @function
* @returns {string}
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.recomputeTooltip = function(){

  var me = this;

  // the display we will fill with doT.js
  var display = me.concept.display;

  // a replacer function for backward compatibility.
  var replacer = function(name){
    return "{{= "+name+".map(function(val){return val.toString()}).join() }}";
  };

  var keys = [];

  for(var key in me.values){
    if(me.values.hasOwnProperty(key)){

      // backward compaitbilise the old display tag.
      display = display
      .replace("{"+key+"}", replacer(key))
      .replace("{"+key.toLowerCase()+"}", replacer(key));

      //add the key to the variables
      keys.push(key);
    }
  }

  var mapAnnotationObject = function(annot){
    // an object of parameters.
    var valObject = {};

    $.each(annot.concept.fields, function(i, field) {
      if(field.type === KAT.model.Field.types.reference){
        valObject[field.value] = annot.values[field.value].map(mapAnnotationObject);
      } else {
        valObject[field.value] = annot.values[field.value].slice();
      }
    });

    return valObject;
  };

  // get a nice json object.
  var myObj = mapAnnotationObject(me);

  // and build a template.
  var fn = doT.template(
    display,
    {
      evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode:      /\{\{!([\s\S]+?)\}\}/g,
			use:         /\{\{#([\s\S]+?)\}\}/g,
			useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			defineParams:/^\s*([\w$]+):([\s\S]+)/,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname: keys.join(","),
			strip:		true,
			append:		true,
			selfcontained: false,
			doNotSkipEncoded: false
    }
  );

  // and fill in the function.
  return fn.apply(this, keys.map(function(k, i){return myObj[k]; }));
};

/**
* Flashes an annotation.
*
* @function
* @name flash
* @memberof KAT.storage.Annotation
*/

//called in rightclick: highlight annotation
KAT.storage.Annotation.prototype.flash = function(){

  var me = this;

  //get the range.
  this.store.gui
  .getRange(this.selection).stop()
  .animate({ backgroundColor: "red"}, 1500, function(){
    me.updateDrawing();
  });
};

KAT.module = {
  /* Module Info / Meta Data */
  info:{
    'identifier':   'KAT.module',
    'title':    'KAT module',
    'author':   'The KWARC group',
    'description':  'A module for KAT',
    'url': 'http://kwarc.github.io/KAT',
    'version':  '2.0',
    'dependencies': [],
    'externals': {
      "js": [],
      "css": []
    },
    'async': false,
    'hasCleanNamespace': false
  },
  init: function(JOBADInstance, collection_or_kannspec_and_url, documentURL){

    // first of all create a collection
    var collection;

    // if a collection has been parsed, we have it already.
    if(collection_or_kannspec_and_url instanceof KAT.model.KAnnSpecCollection){
      collection = collection_or_kannspec_and_url;
    } else {
      // if not, we still need to create that.
      collection = new KAT.model.KAnnSpecCollection();
      collection.addNewKAnnSpec(collection_or_kannspec_and_url[0], collection_or_kannspec_and_url[1]);
    }

    // create a new gui bound to the right element.
    this.gui = new KAT.gui(JOBADInstance.element, collection);

    //create a store with the right documentURL
    this.store = new KAT.storage.Store(this.gui, documentURL);

    // initialise the tooltip libarary
    // JOBADInstance.element.tooltip({html:true});

    // initialise the gui
    KAT.sidebar.init(this.store);

    //initialise gui collection
    collection.init();
    collection.assignDisplayColour();
  },

  contextMenuEntries: function(target, JOBADInstance){
    // reference to self
    var me = this;

    // Lots of Text
    var text_new        = "Add new Annotation";
    var text_remove     = "Delete Annotation";
    var text_highlight  = "Highlight Annotation";
    var text_edit       = "Edit Annotation";
    var text_rdf        = "View RDF";
    var annot_modeOn    = "Enable Annotation Mode";
    var annot_modeOff   = "Enable Reading Mode";
    var storage_import  = "Import Annotations";
    var storage_export  = "Export Annotations";

    // TODO: Callbacks.

    // the menu to return
    var menu = {};

    var initializeMenuBar = function(annotationModeBool) {

      //Menu item 1 : Toggle annotation mode
      if(annotationModeBool) {
        menu[annot_modeOff] = function(){
          KAT.sidebar.toggleAnnotationMode();
        };
      } else {
        menu[annot_modeOn] = function(){
          KAT.sidebar.toggleAnnotationMode();
        };
      }

      //Menu item 2
      menu[storage_import] = me.store.showImportDialog.bind(me.store);

      //Menu item 3
      menu[storage_export] = me.store.showExportDialog.bind(me.store);

  };

    // Case A: Annotation Mode is disabled
    if (!KAT.sidebar.annotationMode){

      initializeMenuBar(false);

    }

    // Case B: Annotation Mode is enabled
    else {

      var selection;

      try{
        selection = this.gui.getSelection();
      } catch(e){}


      if(!selection || selection.isEmpty){

        /* Subcase B1:
          User has not made a selection
          Right click is not on an annotation
        */

        initializeMenuBar(true);

        //find all the annotations.
        var annots = this.store.findfromElement(target);

        if(annots.length !== 0){
          menu = {};
          menu[text_remove] = {};
          menu[text_highlight] = {};
          menu[text_edit] = {};

          //iterate over all the annotations.
          $.each(annots, function(i, annotation){

            //Menu item B2.1 : Delete annotation
            menu[text_remove][annotation.uuid] = function(){
              annotation.delete();
            };

            //Menu item B2.2 : Highlight annotation
            menu[text_highlight][annotation.uuid] = function(){
              annotation.flash();
            };

            //Menu item B2.3 : Edit annotation
            menu[text_edit][annotation.uuid] = function(){
              annotation.edit(me);
            };
          });
        }
      } else {
        /* Subcase B3:
          User has made a selection
        */
         if(!(selection.start == selection.end && selection.startOffset == selection.endOffset)){

          //Menu item B3.n : Add annotation with nth concept found in Kannspec
          $.each(this.gui.collection.findConcepts(), function(index, concept){
            menu[concept.getFullName()] = function(){
              // create a new annotation form.
              KAT.sidebar.generateAnnotationForm(
                me,
                me.store.addNew.bind(me.store),
                undefined,
                selection,
                concept
              );
            };
          });
        }
      }
    }

    //return the menu.
    return menu;
  }
};


JOBAD.modules.register(KAT.module); //register the module.

// doT.js
// 2011-2014, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.

(function() {
	"use strict";

	var doT = {
		version: "1.0.3",
		templateSettings: {
			evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode:      /\{\{!([\s\S]+?)\}\}/g,
			use:         /\{\{#([\s\S]+?)\}\}/g,
			useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			defineParams:/^\s*([\w$]+):([\s\S]+)/,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname:	"it",
			strip:		true,
			append:		true,
			selfcontained: false,
			doNotSkipEncoded: false
		},
		template: undefined, //fn, compile template
		compile:  undefined  //fn, for express
	}, _globals;

	doT.encodeHTMLSource = function(doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	};

	_globals = (function(){ return this || (0,eval)("this"); }());

	if (typeof module !== "undefined" && module.exports) {
		module.exports = doT;
	} else if (typeof define === "function" && define.amd) {
		define(function(){return doT;});
	} else {
		_globals.doT = doT;
	}

	var startend = {
		append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
		split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
	}, skip = /$^/;

	function resolveDefs(c, block, def) {
		return ((typeof block === "string") ? block : block.toString())
		.replace(c.define || skip, function(m, code, assign, value) {
			if (code.indexOf("def.") === 0) {
				code = code.substring(4);
			}
			if (!(code in def)) {
				if (assign === ":") {
					if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
						def[code] = {arg: param, text: v};
					});
					if (!(code in def)) def[code]= value;
				} else {
					new Function("def", "def['"+code+"']=" + value)(def);
				}
			}
			return "";
		})
		.replace(c.use || skip, function(m, code) {
			if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
				if (def[d] && def[d].arg && param) {
					var rw = (d+":"+param).replace(/'|\\/g, "_");
					def.__exp = def.__exp || {};
					def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
					return s + "def.__exp['"+rw+"']";
				}
			});
			var v = new Function("def", "return " + code)(def);
			return v ? resolveDefs(c, v, def) : v;
		});
	}

	function unescape(code) {
		return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
	}

	doT.template = function(tmpl, c, def) {
		c = c || doT.templateSettings;
		var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
			str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;

		str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
					.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
			.replace(/'|\\/g, "\\$&")
			.replace(c.interpolate || skip, function(m, code) {
				return cse.start + unescape(code) + cse.end;
			})
			.replace(c.encode || skip, function(m, code) {
				needhtmlencode = true;
				return cse.startencode + unescape(code) + cse.end;
			})
			.replace(c.conditional || skip, function(m, elsecase, code) {
				return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
			})
			.replace(c.iterate || skip, function(m, iterate, vname, iname) {
				if (!iterate) return "';} } out+='";
				sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
				return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
					+vname+"=arr"+sid+"["+indv+"+=1];out+='";
			})
			.replace(c.evaluate || skip, function(m, code) {
				return "';" + unescape(code) + "out+='";
			})
			+ "';return out;")
			.replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
			.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
			//.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

		if (needhtmlencode) {
			if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
			str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
				+ doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
				+ str;
		}
		try {
			return new Function(c.varname, str);
		} catch (e) {
			if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
			throw e;
		}
	};

	doT.compile = function(tmpl, def) {
		return doT.template(tmpl, null, def);
	};
}());

})({},function(){return this}());
//# sourceMappingURL=KAT.js.map