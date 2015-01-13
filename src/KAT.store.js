/**
* Namespace for storage used by KAT.
* @namespace
* @alias KAT.storage
*/
KAT.storage = {}

/** Creates a new Store instance.
*
* @name KAT.storage.Store
* @this {KAT.storage.Store}
* @Alias KAT.storage.Store
* @class
*/
KAT.storage.Store = function(ontologyCollection){
  /**
  * OntologyCollection this store instance knows.
  *
  * @type {KAT.model.OntologyCollection}
  * @name KAT.storage.Store#collection
  */
  this.collection = ontologyCollection;

  /**
  * Stored annotations in this Store.
  *
  * @type {KAT.storage.Annotation[]}
  * @name KAT.storage.Store#annotations
  */
  this.annotations = [];
}


/** Performs a sanity check.
*
* @function
* @instance
* @name sanityCheck
* @memberof KAT.storage.Store
* @return {string|boolean} - returns false of an error message
*/
KAT.storage.Store.prototype.sanityCheck = function(){

  var verification = undefined;

  //verify the annotations
  for(var i=0;i<this.annotations.length;i++){
    verification = this.annotations[i].verify();
    if(verification){
      return verification;
    }
  }

  return false;
}

/**
* Creates a new UUID.
*
* @returns {string} - new uuid.
* @function
* @static
* @name UUID
* @memberof KAT.storage.Store
*/
KAT.storage.Store.UUID = function(){
  //generate a single segment
  var code = function(){
    return Math.round(Math.random()*10000).toString()
  }

  return code()+"-"+code()+"-"+code()+"-"+code();
}


KAT.storage.Annotation = function(store, concept, uuid, values){

  //Either use the provided uuid or generate a new one.
  var uuid = (typeof uuid == "string")?uuid:KAT.storage.Store.UUID();

  //Either use existing values or use the default.
  var values = (typeof values !== "undefined")?values:concept.getDefault();

  //TODO: Check if uuid already exists.

  //Force the storing of values
  //we ignore the validation here because it comes directly from the initalisation
  //and should not cause any problems.
  this.store(value. true);
}

KAT.storage.Annotation.prototype.store = function(values, force){

  //sometimes we do not want to validate.
  //because we might be loading from somewhere.
  var force = (typeof force == "boolean")?force:false;

  if(!force){
  }

  //validate the values to save
  var validate = this.validate(values);

  //nope it doesnt work like this.
  if(validate){
    throw new Error(validate);
  }

  //TODO: Store ontology
}

KAT.storage.Annotation.prototype.validate = function(values){
  //TODO: Validate annotations.
  //TODO: Load currently saved values if values is not there.
  //Check if the values are correct
  //if not return a message.


  //This function will have the magic.
  //and have a lot of code.
  //well .... not that much really.
}

KAT.storage.Annotation.prototype.delete = function(){
  //TODO: Delete this Annotation from the parent
  //Unset all references. 
  //and re-run the sanity check.
}
