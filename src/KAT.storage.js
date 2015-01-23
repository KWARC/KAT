/**
* Namespace for storage used by KAT.
* @namespace
* @alias KAT.storage
*/
KAT.storage = {}

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
}

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
KAT.storage.Store.prototype.addNew = function(selection, concept){
  //create new annotation.
  var newAnnotation = new KAT.storage.Annotation(this, KAT.storage.Store.UUID(), selection, concept );

  //store it in this store.
  this.annotations.push(newAnnotation);

  //and return it.
  return newAnnotation;
}

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

  //nope, we want undefined.
  return undefined;
}

/** Returns an annotation given a gui element.
*
* @param {jQuery} element - Element of annotation to find.
* @returns {KAT.storage.Annotation|undefined} - The given annotation if found.
*
* @function
* @instance
* @name addNew
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.findfromElement = function(element){
  var elements = $(element).parentsUntil(this.element).andSelf().add(this.element);

  for(var i=elements.length - 1; i >= 0; i--){
    if(elements.eq(i).data("KAT.Annotation.UUID")){
      return this.find(elements.eq(i).data("KAT.Annotation.UUID"));
    }
  }

  return undefined;
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

  //TODO: Implement me. 
  return true;
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

/** Creates a new Annotation instance.
*
* @param {KAT.storage.Store} store - The store associated with this annotation.
* @param {string} uuid - The uuid of this annotation.
* @param {KAT.gui.selection} selection - The selection this annotation annotates.
* @param {KAT.model.Concept} concept - concept this annotation represents.
* @param {object|undefined} values - The values of this annotation. If undefined, sets the default values.
*
* @name KAT.storage.Annotation
* @this {KAT.storage.Annotation}
* @Alias KAT.storage.Annotation
* @class
*/
KAT.storage.Annotation = function(store, uuid, selection, concept, values){

  /**
  * The Store this annotation is stored in.
  *
  * @type {KAT.storage.Annotation}
  * @name KAT.storage.Annotation#store
  */
  this.store = store;

  //Either use the provided uuid or generate a new one.
  var uuid = (typeof uuid == "string")?uuid:KAT.storage.Store.UUID();

  //Check if we already have the uuid.
  if(this.store.find(uuid)){
    throw new Error("Annotation with given uuid already exists. ");
    return;
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
  var values = (typeof values !== "undefined")?values:concept.getDefault();

  /**
  * The current values of this annotation, excluding selection.
  *
  * @type {object}
  * @name KAT.storage.Annotation#values
  */
  this.values = values;
}

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
      this.store.annotations.splice(i, 1)
      break;
    }
  }

  //and re-run the sanity check.
  this.store.sanityCheck();
}

/**
* Draws an annotation to the text.
*
* @function
* @name draw
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.draw = function(){
  //find the elements in the selection.
  var range = this.store.gui.getRange(this.selection);

  //add a class for the selection.
  range.addClass("KAT-selection").data("KAT.Annotation.UUID", this.uuid);
}

/**
* Un-draws an annotation to the text.
*
* @function
* @name undraw
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.undraw = function(){
  //find the elements in the selection.
  var range = this.store.gui.getRange(this.selection);

  //remove the class and data
  range.removeClass("KAT-selection").removeData("KAT.Annotation.UUID");
}
