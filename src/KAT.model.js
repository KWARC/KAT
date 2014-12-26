/**
    Copyright (c) 2014 by the KWARC Group (http://kwarc.info)

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

/**
* Namespace for models used by KAT.
* @namespace
* @alias KAT.model
*/
KAT.model = {};

/** Creates a new OntologyStore instance.
*
* @name KAT.model.OntologyStore
* @this {KAT.model.OntologyStore}
* @Alias KAT.model.OntologyStore
* @class
*/
KAT.model.OntologyStore = function(){
  /**
  * Ontologies stored in this ontologyStore
  *
  * @type {KAT.model.OntologyStore[]}
  * @name KAT.model.OntologyStore#ontologies
  */
  this.ontologies = [];
}

//TODO: Add valid name matching functions

/**
* Finds an ontology by name.
*
* @param {string} name - Name of ontology to search for.
*
* @function
* @instance
* @name getOntology
* @memberof KAT.model.OntologyStore
* @return {Ontology|boolean} - the ontology searched for or false.
*/
KAT.model.OntologyStore.prototype.getOntology = function(name){
  if(!/^(\w|\d|\-\_\+)+$/.test(name)){
    //we do not match the name
    //TODO: Add a warning here.
    return false;
  }

  //Search for the name
  for(var i=0;i<this.ontologies.length;i++){
    if(this.ontologies[i].name == name){
      return this.ontologies[i];
    }
  }

  //return false if not found.
  return false;
}


/** Creates a new Ontology instance.
*
* @param {document} xml - XML document representing ontology.
* @param {KAT.model.OntologyStore} store - Ontology store this ontology is declared in.
* @param {string} name - Name of this ontology
* @name KAT.model.Ontology
* @this {KAT.model.Ontology}
* @Alias KAT.model.Ontology
* @class
*/
KAT.model.Ontology = function(xml, store, name){
  var me = this;

  //parse the XML
  try{
    /**
    * XML document representing ontology.
    *
    * @type {document}
    * @name KAT.model.Ontology#xml
    */
    this.xml = jQuery(xml);
  } catch(e){
    throw new KAT.model.ParsingError("KAT.model.Ontology: Invalid XML (Unable to parse XML). ", this.xml);
    return;
  }

  //check the top level element
  if(this.xml.children().length != 1 || !this.xml.children().eq(0).is("annotation")){
    throw new KAT.model.ParsingError("KAT.model.Ontology: Invalid XML (Expected exactly one top-level <annotation>). ", this.xml);
    return;
  }

  //validate the sub tags
  var annotRoot = this.xml.children().eq(0);

  if(annotRoot.children().length != 2 || !annotRoot.children().eq(0).is("documentation") || !annotRoot.children().eq(1).is("concepts")){
    throw new KAT.model.ParsingError("KAT.model.Ontology: Invalid XML (Expected exactly one <documentation> and <concepts>). ", annotRoot);
  }

  //TODO: Parse name automatically from xml
  /**
  * Name of this ontology.
  *
  * @type {string}
  * @name KAT.model.Ontology#name
  */
  this.name = name;

  /**
  * OntologyStore this Ontology belongs to.
  *
  * @type {KAT.model.OntologyStore}
  * @name KAT.model.Ontology#store
  */
  this.store = store;

  /**
  * Documentation for this ontology.
  *
  * @type {string}
  * @name KAT.model.Ontology#documentation
  */
  this.documentation = annotRoot.children().eq(0).text().trim();

  /**
  * Concepts defined in this ontology.
  *
  * @type {KAT.model.Concept[]}
  * @name KAT.model.Ontology#concepts
  */
  this.concepts = [];

  //find the concepts
  annotRoot.children().eq(1).children().each(function(i, e){
    var e = $(e);
    if(!e.is("concept")){
      throw new KAT.model.ParsingError("KAT.model.Ontology: Invalid XML (Unknown child tag of <concepts>). ", e);
    }

    //and add them to the right thing.
    me.concepts.push(new KAT.model.Concept(e, me));
  })

}


/** Creates a new Concept instance.
*
* @param {document} xml - XML document representing the concept.
* @param {KAT.model.Ontology} ontology - Ontology this concept was declared in.
* @name KAT.model.Concept
* @this {KAT.model.Concept}
* @Alias KAT.model.Concept
* @class
*/
KAT.model.Concept = function(xml, ontology){
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
    return;
  }

  /**
  * Ontology this concept was declared in.
  *
  * @type {document}
  * @name KAT.model.Concept#ontology
  */
  this.ontology = ontology;

  //validation
  if(this.xml.length != 1 || !this.xml.is("concept")){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Expected exactly one <concept> tag). ", this.xml);
  }

  //and name
  if(typeof this.xml.attr("name") != "string"){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Missing name attribute for <concept>). ", this.xml);
  }

  /**
  * Name of this concept
  *
  * @type {string}
  * @name KAT.model.Concept#name
  */
  this.name = this.xml.attr("name");

  //TODO: Check if this concept already exists

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
  * Display to generate for this element.
  *
  * @type {string}
  * @name KAT.model.Concept#display
  */
  this.display = "";

  /**
  * RDF to generate for this concept.
  *
  * @type {string}
  * @name KAT.model.Concept#rdf
  */
  this.rdf = "";

  //validate the children
  var children = this.xml.children();

  //We want to check indexing, so we need this.
  var index = 0;

  //right length
  if(children.length < 2 || children.length > 4) {
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Expected at least 2 of <documentation>, <fields>, <display> and <rdf:rdf>). ", children);
  }

  //documentation
  if(children.eq(index).is("documentation")){
    this.documentation = children.eq(index).text().trim();
    index++;
  } else {
    new KAT.model.ParsingWarning("KAT.model.Concept: Missing <documentation>, ignoring. ", children);
  }

  //fields
  if(children.eq(index).is("fields")){

    children.eq(index).children().each(function(i, e){
      var e = $(e);
      me.fields.push(new KAT.model.Field(e, me));
    });

    index++;
  } else {
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Missing required <fields>). ", children);
  }

  //display
  if(children.eq(index).is("display")){
    var display = children.eq(index);

    //Set the display
    if(display.children().length != 1 || !display.children().eq(0).is("template")){
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Missing <template>). ", display);
    } else {
      this.display = display.children().html().trim();
    }

    index++;
  } else {
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Missing required <display>). ", children);
  }

  //rdf:RDF
  if(index < children.length){
    if(children.eq(index).prop("tagName") == "rdf:RDF"){
      this.rdf = children.eq(index).html().trim();
      index++;
    } else {
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Expected <rdf:rdf> in final position. ). ", children);
    }
  }

  //whats happened? We're too long!
  if(index != children.length){
    throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Expected at least 2 of <documentation>, <fields>, <display> and <rdf:RDF>). ", children);
  }

  //TODO: Check for unreference concepts
}

/** Creates a new Field instance.
*
* @param {document} xml - XML document representing the field.
* @param {KAT.model.Ontology} concept - concept this field was declared in.
* @name KAT.model.Field
* @this {KAT.model.Field}
* @Alias KAT.model.Field
* @class
*/
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
    return;
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
  * Name of this concept
  *
  * @type {string}
  * @name KAT.model.Field#name
  */
  this.name = this.xml.attr("name");

  //TODO: Check if this field already exists

  //do we have the type attribute.
  if(typeof this.xml.attr("type") != "string"){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Missing type attribute for <field>). ", this.xml);
  }

  //do we know the type
  if(!KAT.model.Field.types.hasOwnProperty(this.xml.attr("type"))){
    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Unknown <field> type). ", this.xml);
  }

  /**
  * Name of this concept
  *
  * @type {KAT.model.Field.types}
  * @name KAT.model.Field#type
  */
  this.type = KAT.model.Field.types[this.xml.attr("type")];

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
  * - a RegEx for KAT.model.Field.types.text,
  * - KAT.model.Option[] for KAT.model.Field.types.select
  * - KAT.model.Concept for KAT.model.Field.types.reference
  *
  * @type {Regex|KAT.model.Option[]|KAT.model.Concept}
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
    //validate everything
    this.validation = new RegExp(".*");

    this.xml.children().each(function(i, e){
      var e = $(e);

      if(e.is("value")){

        //did we have this already
        if(hasValue){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Double <value> tag). ", e);
        }

        //no, so now store it.
        hasValue = true;
        me.value = e.text();
      } else if(e.is("default")){

        //did we have this already?
        if(hasDefault){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Double <default> tag). ", e);
        }

        //no, so we can store it
        hasDefault = true;
        me.default = e.text();
      } else if(e.is("validation")){
        //did we have this already?
        if(hasValidation){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Double <validation> tag). ", e);
        }

        //no, so we can store it
        hasValidation = true;
        try{
          me.validation = new RegExp(e.text());
        } catch(f){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Unregonised regular expression). ", e);
        }

      } else if(e.is("number")){
        //did we have this already?
        if(hasNumber){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Double <number> tag). ", e);
        }

        //ok, now store it
        hasNumber = true;

        //minimum
        if(typeof e.attr("atleast")){
          try{
            me.minimum = parseInt(e.attr("atleast"));
          } catch(f){
            throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (atleast property must be a number). ", e);
          }
        }

        //maximum
        if(typeof e.attr("atmost")){
          try{
            me.maximum = parseInt(e.attr("atmost"));
          } catch(f){
            throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (atmost property must be a number). ", e);
          }
        }
      } else if(e.is("documentation")){

        //did we have this already?
        if(hasDocumentation){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Double <documentation> tag). ", e);
        }

        //we had it now
        hasDocumentation = true;
        this.documentation = e.text().trim();
      } else if(e.is("textdType")){
        //TODO: textdType
        KAT.model.ParsingWarning("KAT.model.Field: Tag not implemented: <textdType>. ", e);
      } else {
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Unexpected tag). ", e);
      }
    });

    //did we have the <value>
    if(!hasValue){
      throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Missing required <value> tag). ", this.xml.children());
    }
  } else {
    //TODO: Other types
    KAT.model.ParsingWarning("KAT.model.Field: Only KAT.model.Field.types.text currently implemented. ", this.xml);
  }
}

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

//Errors and warnings

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

  /*this.stack = */Object.defineProperty(this, 'stack', { // getter for more optimizy goodness
    get: function() {
    return tmp.stack
    }
  })

  return this;
};

(function(){
  var IntermediateInheritor = function() {}
  IntermediateInheritor.prototype = Error.prototype;
  KAT.model.ParsingError.prototype = new IntermediateInheritor();
})();

/** Represents a parsing warning.
*
* @param {string} message - Message of the warning.
* @param {document} xml_element - The XML node where the parsing warning occured.
* @name KAT.model.ParsingWarning
* @this {KAT.model.ParsingWarning}
* @Alias KAT.model.ParsingWarning
* @class
*/
KAT.model.ParsingWarning = function (message, xml_element) {

  if(xml_element instanceof jQuery){
    var xml_element = xml_element.toArray();
  }

  if(console && console.warn){
    console.warn(message, xml_element);
  }
}
