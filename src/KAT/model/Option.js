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
