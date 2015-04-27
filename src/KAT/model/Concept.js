/** Creates a new Concept instance.
*
* @param {document} xml - XML document representing the concept.
* @param {KAT.model.KAnnSpec} KAnnSpec - KAnnSpec this concept was declared in.
* @name KAT.model.Concept
* @this {KAT.model.Concept}
* @Alias KAT.model.Concept
* @class
*/
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
