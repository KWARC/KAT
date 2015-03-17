/** Creates a new Annotation instance.
*
* @param {KAT.storage.Store} store - The store associated with this annotation.
* @param {KAT.gui.selection} selection - The selection this annotation annotates.
* @param {KAT.model.Concept} concept - concept this annotation represents.
* @param {object|undefined} values - The values of this annotation. If undefined, sets the default values.
*
* @name KAT.storage.Annotation
* @this {KAT.storage.Annotation}
* @Alias KAT.storage.Annotation
* @class
*/
KAT.storage.Annotation = function(store, selection, concept, values){

  /**
  * The Store this annotation is stored in.
  *
  * @type {KAT.storage.Annotation}
  * @name KAT.storage.Annotation#store
  */
  this.store = store;

  //generate the UUID from the selection
  var uuid = KAT.storage.Store.Selection2UUID(selection);

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
  //this is me.
  var me = this;

  //find the elements in the selection.
  var range = this.store.gui.getRange(this.selection);

  //add a class for the selection.
  range.addClass("KAT-selection").each(function(){
    var $me = $(this);

    var current = $me.data("KAT.Annotation.UUID") || [];
    current.push(me.uuid);

    //write it back
    $me.data("KAT.Annotation.UUID", current);
  });
}

/**
* Flashes an annotation.
*
* @function
* @name flash
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.flash = function(){
  //get the range.
  this.store.gui
  .getRange(this.selection).stop()
	.animate({ backgroundColor: "red"}, 1500, function(){
    $(this).css("background-color", "");
  });
}

/**
* Shows an edit form for an annotation.
*
* @function
* @name edit
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.edit = function(){
  //TODO: show an edit form.
  alert("Unimplemented!");
}

/**
* Un-draws an annotation to the text.
*
* @function
* @name undraw
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.undraw = function(){
  //this is me
  var me = this;

  //find the elements in the selection.
  var range = this.store.gui.getRange(this.selection);

  //remove the class and data
  range.removeClass("KAT-selection").each(function(){
    var $me = $(this);

    //the current data
    var current = $(this).data("KAT.Annotation.UUID") || [];

    //find the current index and remove it.
    var index = current.indexOf(me.uuid);

    //if we have the right index, remove an element.
    if(~index){
      current.splice(index, 1);
      $me.data("KAT.Annotation.UUID", current);
    }
  });
}

/**
* Exports an annotation to JSON.
*
* @return KAT.storage.Annotation~JSON
* @function
* @name toJSON
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.toJSON = function(){
  return {
    //the UUID of this annotation
    "uuid": this.uuid,

    //the full name.
    "concept": this.concept.getFullName(),

    //the values.
    "values": this.values
  }
}

/**
 * A serialised version of KAT.storage.Annotation
 * @typedef {Object} KAT.storage.Annotation~JSON
 * @property {string} uuid - UUID of this annotation.
 * @property {string} concept - (Full) name of the used concept.
 * @property {object} values - Values of the fields of this annotation.
 */
