/** Creates a new Store instance.
*
* @param {KAT.gui} gui - Gui associated to this store.
*
* @name KAT.storage.Store
* @this {KAT.storage.Store}
* @Alias KAT.storage.Store
* @class
*/
KAT.storage.Store = function(gui){
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

/** Returns a list of annotation if they exists.
*
* @param {string} concept - Concept of annotation to find.
* @returns {KAT.storage.Annotation|undefined} - The given annotation if found.
*
* @function
* @instance
* @name filterByConcept
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.filterByConcept = function(concept){
  filteredAnnotations = [];
  //look for the annotation by concept.
  for(var i=0;i<this.annotations.length;i++){
    console.log(this.annotations[i].concept.name);
    if(this.annotations[i].concept.name == concept || concept == "all"){
      filteredAnnotations.push(this.annotations[i].uuid);
    }
  }
  //nope, we want undefined
  return filteredAnnotations;
};

/** Returns an annotation if it exists.
*
* @param {string} uuid - UUID of annotation to find.
* @returns {KAT.storage.Annotation|undefined} - The given annotation if found.
*
* @function
* @instance
* @name addNew
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
* @name addNew
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


/** Performs a sanity check.
*
* @function
* @instance
* @name sanityCheck
* @memberof KAT.storage.Store
* @return {string|boolean} - returns false of an error message
*/
KAT.storage.Store.prototype.sanityCheck = function(){
  //TODO: Implement me.
  return true;
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
