/** Creates a new KAnnSpec instance.
*
* @param {document} xml - XML document representing KAnnSpec.
* @param {KAT.model.KAnnSpecCollection} collection - KAnnSpec collection this KAnnSpec is declared in.
* @name KAT.model.KAnnSpec
* @this {KAT.model.KAnnSpec}
* @Alias KAT.model.KAnnSpec
* @class
*/
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
