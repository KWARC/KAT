/** Creates a new Field instance.
*
* @param {document} xml - XML document representing the field.
* @param {KAT.model.KAnnSpec} concept - concept this field was declared in.
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
