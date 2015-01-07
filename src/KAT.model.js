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
  /** Creates a new OntologyCollection instance.
  *
  * @name KAT.model.OntologyCollection
  * @this {KAT.model.OntologyCollection}
  * @Alias KAT.model.OntologyCollection
  * @class
  */
  KAT.model.OntologyCollection = function(){
    /**
    * Ontologies stored in this OntologyCollection
    *
    * @type {KAT.model.Ontology[]}
    * @name KAT.model.OntologyCollection#ontologies
    */
    this.ontologies = [];
  }

  /** Adds an onology to this OntologyCollection.
  *
  * @param {KAT.model.Ontology} ontology - Ontology to add
  *
  * @function
  * @instance
  * @name addOntology
  * @memberof KAT.model.OntologyCollection
  * @static
  * @return {KAT.model.Ontology|boolean} - newly added ontology or false in case of errors
  */
  KAT.model.OntologyCollection.prototype.addOntology = function(ontology){

    //check if we already have it.
    if(this.getOntology(ontology.name)){
      return false;
    }

    //push the ontology
    this.ontologies.push(ontology);

    //and return it.
    return ontology;
  }

  /** Creates a new Ontology instance and adds it to this OntologyCollection.
  *
  * @param {document} xml - XML document representing ontology.
  * @param {string} name - Name of ontology to be created.
  *
  * @function
  * @instance
  * @name addNewOntology
  * @memberof KAT.model.OntologyCollection
  * @static
  * @return {KAT.model.Ontology|boolean} - newly created ontology or false in case of errors
  */
  KAT.model.OntologyCollection.prototype.addNewOntology = function(xml, name){
    //TODO: Remove name parameter
    return this.addOntology(new KAT.model.Ontology(xml, this, name));
  }

  /** Initialises this OntologyCollection. Should be called once all Ontologies have been added.
  *
  * @function
  * @instance
  * @name init
  * @memberof KAT.model.OntologyCollection
  * @static
  * @return {KAT.model.Ontology} - this ontology store
  */
  KAT.model.OntologyCollection.prototype.init = function(){
    //iterate over the fields
    //this may take a while
    for(var i=0;i<this.ontologies.length;i++){
      (function(){
        for(var j=0;j<this.concepts.length;j++){
          (function(){
            for(var k=0;k<this.fields.length;k++){
              (function(k){
                if(this.type == KAT.model.Field.types.reference){
                  for(var l=0;l<this.validation.length;l++){
                    var name = this.validation[l];

                    //it is already referenced, get the name out of it
                    if(name instanceof KAT.model.Concept){
                      name = name.getFullName();
                    }

                    //find the concept, try it within this ontology first
                    var concept = this.concept.ontology.getConcept(name);

                    //and then do it in the ontologyCollection
                    if(!concept){
                      concept = this.concept.ontology.collection.getConcept(name);
                    }

                    if(!concept){
                      throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Concept not found: '"+name+"'). ", this.xml);
                    }

                    //store the concept in the validation.
                    this.validation[l] = concept;
                  }
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

  //can be used to normalise names
  //if we ever need it
  var nameNormaliser = function(name){
    return name;
  }


  /**
  * Finds an ontology by name.
  *
  * @param {string} name - Name of ontology to search for.
  *
  * @function
  * @instance
  * @name getOntology
  * @memberof KAT.model.OntologyCollection
  * @return {KAT.model.Ontology|boolean} - the ontology searched for or false.
  */
  KAT.model.OntologyCollection.prototype.getOntology = function(name){
    //normalise the name
    var name = nameNormaliser(name);

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
  * @memberof KAT.model.OntologyCollection
  * @return {KAT.model.Concept|boolean} - the concept searched for or false.
  */
  KAT.model.OntologyCollection.prototype.getConcept = function(name){
    //normalise the name
    var name = nameNormaliser(name);

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
  * @memberof KAT.model.OntologyCollection
  * @return {KAT.model.Field|boolean} - the field searched for or false.
  */
  KAT.model.OntologyCollection.prototype.getField = function(name){
    //normalise the name
    var name = nameNormaliser(name);

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
  * @param {KAT.model.OntologyCollection} collection - Ontology collection this ontology is declared in.
  * @param {string} name - Name of this ontology
  * @name KAT.model.Ontology
  * @this {KAT.model.Ontology}
  * @Alias KAT.model.Ontology
  * @class
  */
  KAT.model.Ontology = function(xml, collection, name){
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

    //TODO: Parse name automatically from xml
    /**
    * Name of this ontology.
    *
    * @type {string}
    * @name KAT.model.Ontology#name
    */
    this.name = nameNormaliser(name);

    //Check if the name is valid.
    //TODO: Change error when using XML Node
    if(!nameRegEx.test(this.name)){
      throw new KAT.model.ParsingError("KAT.model.Ontology: Unable to create ontology ('"+this.name+"' is not a valid name). ", this.xml);
    }

    //check the top level element
    if(this.xml.children().length != 1 || !this.xml.children().eq(0).is("annotation")){
      throw new KAT.model.ParsingError("KAT.model.Ontology: Invalid XML (Expected exactly one top-level <annotation>). ", this.xml);
      return;
    }

    //validate the sub tags
    var annotRoot = this.xml.children().eq(0);

    if(annotRoot.children().length <= 1 || !annotRoot.children().eq(0).is("documentation")){
      throw new KAT.model.ParsingError("KAT.model.Ontology: Invalid XML for ontology '"+this.getFullName()+"' (Expected exactly one <documentation>). ", annotRoot);
    }

    /**
    * OntologyCollection this Ontology belongs to.
    *
    * @type {KAT.model.OntologyCollection}
    * @name KAT.model.Ontology#collection
    */
    this.collection = collection;

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
    annotRoot.children().slice(1).each((function(i, e){
      var e = $(e);
      if(!e.is("concept")){
        throw new KAT.model.ParsingError("KAT.model.Ontology: Invalid XML for ontology '"+this.getFullName()+"' (Expected child tag <concept>). ", e);
      }

      //and add them to the right thing.
      this.concepts.push(new KAT.model.Concept(e, this));
    }).bind(this))

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
    //normalise the name
    var name = nameNormaliser(name);

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
    //normalise the name
    var name = nameNormaliser(name);

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

    //and name
    if(typeof this.xml.attr("name") != "string"){
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid Invalid XML (Missing name attribute for <concept>). ", this.xml);
    }

    /**
    * Name of this concept
    *
    * @type {string}
    * @name KAT.model.Concept#name
    */
    this.name = nameNormaliser(this.xml.attr("name"));

    //Check if the name is valid.
    if(!nameRegEx.test(this.name)){
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML ('"+this.getFullName()+"' is not a valid name). ", this.xml);
    }

    //Check if this concept already exists
    if(this.ontology.getConcept(this.name)){
      throw new KAT.model.ParsingError("KAT.model.Concept: Invalid XML (Concept '"+this.getFullName()+"' already exists). ", this.xml);
    }


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
    * @name KAT.model.Concept#fieldsname
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
    //normalise the name
    var name = nameNormaliser(name);

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
    this.name = nameNormaliser(this.xml.attr("name"));

    //Check for a valid name
    if(!nameRegEx.test(this.name)){
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
      var e = $(e);

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
        try{
          this.validation = new RegExp(e.text());
        } catch(f){
          throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Unregonised regular expression). ", e);
        }
      } else if(e.is("referencedType") && this.type == KAT.model.Field.types.reference){
        this.validation.push(e.text());
      } else if(e.is("option") && this.type == KAT.model.Field.types.select){
        this.validation.push(new KAT.model.Option(e, this));
      } else {
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Unexpected tag '"+e.prop("tagName")+"'). ", e);
      }
    }).bind(this));

    //we did not have the value.
    if(!hasValue){
      this.value = this.name;
    }

    //Check that value is unique
    for(var i=0;i<this.concept.fields.length;i++){
      if(this.concept.fields[i].value == this.value){
        throw new KAT.model.ParsingError("KAT.model.Field: Invalid XML for field '"+this.getFullName()+"' (Value '"+this.value+"' already used by field '"+this.concept.fields[i].getFullName()+"'). ", this.xml);
      }
    }

  }

  /** Creates a new Option instance.
  *
  * @param {document} xml - XML document representing the option.
  * @param {KAT.model.Field} field - field this option was declared in.
  * @name KAT.model.Option
  * @this {KAT.model.Option}
  * @Alias KAT.model.Option
  * @class
  */
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
      return;
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


    if(this.xml.attr("default") == "true" || this.xml.attr("default") === true){
      if(this.field.default !== ""){
        throw new KAT.model.ParsingError("KAT.model.Option: Invalid XML (Default already exists)", this.xml);
      }
      this.field.default = this.value;
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

  //Errors

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
})();
