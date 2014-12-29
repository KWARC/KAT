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

(function(){
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
    * @type {KAT.model.Ontology[]}
    * @name KAT.model.OntologyStore#ontologies
    */
    this.ontologies = [];
  }

  /** Adds an onology to this OntologyStore.
  *
  * @param {KAT.model.Ontology} ontology - Ontology to add
  *
  * @function
  * @instance
  * @name addOntology
  * @memberof KAT.model.OntologyStore
  * @static
  * @return {KAT.model.Ontology|boolean} - newly added ontology or false in case of errors
  */
  KAT.model.OntologyStore.prototype.addOntology = function(ontology){

    //check if we already have it.
    if(this.getOntology(ontology.name)){
      return false;
    }

    //push the ontology
    this.ontologies.push(ontology);

    //and return it.
    return ontology;
  }

  /** Creates a new Ontology instance and adds it to this OntologyStore.
  *
  * @param {document} xml - XML document representing ontology.
  * @param {string} name - Name of ontology to be created.
  *
  * @function
  * @instance
  * @name addNewOntology
  * @memberof KAT.model.OntologyStore
  * @static
  * @return {KAT.model.Ontology|boolean} - newly created ontology or false in case of errors
  */
  KAT.model.OntologyStore.prototype.addNewOntology = function(xml, name){
    //TODO: Remove name parameter
    return this.addOntology(new KAT.model.Ontology(xml, this, name));
  }

  /** Initialises this OntologyStore. Should be called once all Ontologies have been added.
  *
  * @function
  * @instance
  * @name init
  * @memberof KAT.model.OntologyStore
  * @static
  * @return {KAT.model.Ontology} - this ontology store
  */
  KAT.model.OntologyStore.prototype.init = function(){
    //iterate over the fields
    //this may take a while
    for(var i=0;i<this.ontologies.length;i++){
      (function(){
        for(var j=0;j<this.concepts.length;j++){
          (function(){
            for(var k=0;k<this.fields.length;k++){
              (function(k){
                if(this.type == KAT.model.Field.types.reference){
                  var name = this.validation;

                  //it is already referenced, get the name out of it
                  if(name instanceof KAT.model.Concept){
                    name = name.getFullName();
                  }

                  //find the concept
                  var concept = this.concept.ontology.store.getConcept(name);
                  if(!concept){
                    throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Concept not found: '"+name+"'). ", this.xml);
                  }

                  //store the concept in the validation.
                  this.validation = concept;
                }
              }).call(this.fields[k]);
            }
          }).call(this.concepts[j]);
        }
      }).call(this.ontologies[i]);
    }

    return this;
  }

  //regular expression for names string, may not have a capturing group
  //TODO: Adapt this and mention it in the documentation.
  var nameRegExS = "(?:\\w|\\d|\\-|\\_|\\+)+";

  //regexes for strings
  var nameRegEx = new RegExp("^"+nameRegExS+"$");
  var nameRegEx2 = new RegExp("^("+nameRegExS+")\\.("+nameRegExS+")$");
  var nameRegEx3 = new RegExp("^("+nameRegExS+")\\.("+nameRegExS+")\\.("+nameRegExS+")$");

  /**
  * Finds an ontology by name.
  *
  * @param {string} name - Name of ontology to search for.
  *
  * @function
  * @instance
  * @name getOntology
  * @memberof KAT.model.OntologyStore
  * @return {KAT.model.Ontology|boolean} - the ontology searched for or false.
  */
  KAT.model.OntologyStore.prototype.getOntology = function(name){
    if(!nameRegEx.test(name)){
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

  /**
  * Finds a concept by name.
  *
  * @param {string} name - Name of concept to search for. Should be of the form OntologyName.ConceptName
  *
  * @function
  * @instance
  * @name getConcept
  * @memberof KAT.model.OntologyStore
  * @return {KAT.model.Concept|boolean} - the concept searched for or false.
  */
  KAT.model.OntologyStore.prototype.getConcept = function(name){

    if(!nameRegEx2.test(name)){
      return false;
    }

    //match the name regex
    var name = name.match(nameRegEx2);

    //get the ontology
    var ontology = this.getOntology(name[1]);

    if(!ontology){
      return false;
    }

    //get the concept
    return ontology.getConcept(name[2]);
  }

  /**
  * Finds a field by name.
  *
  * @param {string} name - Name of field to search for. Should be of the form OntologyName.ConceptName.FieldName
  *
  * @function
  * @instance
  * @name getField
  * @memberof KAT.model.OntologyStore
  * @return {KAT.model.Field|boolean} - the field searched for or false.
  */
  KAT.model.OntologyStore.prototype.getField = function(name){
    if(!nameRegEx3.test(name)){
      return false;
    }

    //match the name regex
    var name = name.match(nameRegEx3);

    //get the ontology
    var ontology = this.getOntology(name[1]);

    if(!ontology){
      return false;
    }

    //get the concept
    var concept = ontology.getConcept(name[2]);

    if(!concept){
      return false;
    }

    //get the field
    return concept.getField(name[3]);
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

    //Check if the name is valid.
    //TODO: Change error when using XML Node
    if(!nameRegEx.test(this.name)){
      throw new KAT.model.ParsingError("KAT.model.Ontology: Unable to create ontology ('"+this.name+"' is not a valid name). ", this.xml);
    }

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

  /**
  * Gets the full name of this ontology.
  *
  * @function
  * @instance
  * @name getFullName
  * @memberof KAT.model.Ontology
  * @return {string} - full Name of this ontology
  */
  KAT.model.Ontology.prototype.getFullName = function(){
    return this.name;
  }

  /**
  * Finds a concept by name.
  *
  * @param {string} name - Name of concept to search for.
  *
  * @function
  * @instance
  * @name getConcept
  * @memberof KAT.model.Ontology
  * @return {KAT.model.Concept|boolean} - the concept searched for or false.
  */
  KAT.model.Ontology.prototype.getConcept = function(name){
    if(!nameRegEx.test(name)){
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
  }

  /**
  * Finds a field by name.
  *
  * @param {string} name - Name of field to search for. Should be of the form ConceptName.FieldName
  *
  * @function
  * @instance
  * @name getField
  * @memberof KAT.model.Ontology
  * @return {KAT.model.Field|boolean} - the field searched for or false.
  */
  KAT.model.Ontology.prototype.getField = function(name){
    if(!nameRegEx2.test(name)){
      return false;
    }

    //match the name regex
    var name = name.match(nameRegEx2);

    //get the concept
    var concept = this.getConcept(name[1]);

    if(!concept){
      return false;
    }

    //get the field
    return concept.getField(name[2]);
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

    //Check if the name is valid.
    if(!nameRegEx.test(this.name)){
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML ('"+this.name+"' is not a valid name). ", this.xml);
    }

    //Check if this concept already exists
    if(this.ontology.getConcept(this.name)){
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Concept '"+this.name+"' already exists). ", this.xml);
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
      //TODO: Do we really want this warning?
      //new KAT.model.ParsingWarning("KAT.model.Concept: Missing <documentation>, ignoring. ", children);
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
  }

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
    return this.ontology.getFullName()+"."+this.name;
  }

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
    if(!nameRegEx.test(name)){
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
    * Name of this field
    *
    * @type {string}
    * @name KAT.model.Field#name
    */
    this.name = this.xml.attr("name");

    //Check for a valid name
    if(!nameRegEx.test(this.name)){
      throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML ('"+this.name+"' is not a valid name). ", this.xml);
    }

    //Check if this field already exists
    if(this.concept.getField(this.name)){
      throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Field '"+this.name+"' already exists). ", this.xml);
    }

    //do we have the type attribute.
    if(typeof this.xml.attr("type") != "string"){
      throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Missing type attribute for <field>). ", this.xml);
    }

    //do we know the type
    if(!KAT.model.Field.types.hasOwnProperty(this.xml.attr("type"))){
      throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Unknown <field> type). ", this.xml);
    }

    /**
    * Type of this field
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
    * textdType for this field.
    *
    * @type {string}
    * @name KAT.model.Field#textdType
    */
    this.textdType = "";
    //TODO: What is this?

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
    * KAT.model.Concept for KAT.model.Field.types.reference and
    * string for KAT.model.Field.types.reference while the reference is undefined.
    *
    * @type {string|regex|KAT.model.Option[]|KAT.model.Concept}
    * @name KAT.model.Field#validation
    */
    this.validation = undefined;

    //what do we have here
    var hasValue = false;
    var hasDefault = false;
    var hasValidation = false;
    var hasNumber = false;
    var hasDocumentation = false;
    var hasTextD = false;

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
          //did we have this already?
          if(hasTextD){
            throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Double <textdType> tag). ", e);
          }

          //we had it now
          hasTextD = true
          this.textdType = e.text();
        } else {
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Unexpected tag). ", e);
        }
      });

      //did we have the <value>
      if(!hasValue){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Missing required <value> tag). ", this.xml.children());
      }
    } else if(this.type == KAT.model.Field.types.reference){
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
        } else if(e.is("referencedType")){
          //did we have this already?
          if(hasValidation){
            throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Double <referencedType> tag). ", e);
          }

          //no, so we can store it
          hasValidation = true;
          me.validation = e.text();

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
          //TODO: textdType? What is this?
          KAT.model.ParsingWarning("KAT.model.Field: Tag not implemented: <textdType>. ", e);
        } else {
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Unexpected tag). ", e);
        }
      });

      //did we have the <value>
      if(!hasValue){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Missing required <value> tag). ", this.xml.children());
      }

      //did we have <referencedType>
      if(!hasValidation){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML (Missing required <referencedType> tag). ", this.xml.children());
      }
    } else if(this.type == KAT.model.Field.types.select){
      //TODO: Implement select type
      KAT.model.ParsingWarning("KAT.model.Field: KAT.model.Field.types.select currently unimplemented. ", this.xml);
    }
  }

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

    Object.defineProperty(this, 'stack', {
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

})();
