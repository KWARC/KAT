/** Creates a new Annotation instance.
*
* @param {KAT.storage.Store} store - The store associated with this annotation.
* @param {KAT.gui.selection} selection - The selection this annotation annotates.
* @param {KAT.model.Concept} concept - concept this annotation represents.
* @param {object|undefined} values - The values of this annotation. If undefined, sets the default values.
* @param {string} [id] - Id of annotation. Will be auto generated if it does not exist.
*
* @name KAT.storage.Annotation
* @this {KAT.storage.Annotation}
* @Alias KAT.storage.Annotation
* @class
*/
KAT.storage.Annotation = function(store, selection, concept, values, id){

  /**
  * The Store this annotation is stored in.
  *
  * @type {KAT.storage.Annotation}
  * @name KAT.storage.Annotation#store
  */
  this.store = store;

  //generate the UUID from the selection
  var uuid = id || "KAT_"+(new Date().getTime())+"_"+(Math.floor(Math.random()*10000));

  //Check if we already have the uuid.
  if(this.store.find(uuid)){
    throw new Error("Annotation with given uuid already exists. ");
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
  values = (typeof values !== "undefined")?values:concept.getDefault();

  /**
  * The current values of this annotation, excluding selection.
  *
  * @type {object}
  * @name KAT.storage.Annotation#values
  */
  this.values = values;
};

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
      this.store.annotations.splice(i, 1);
      break;
    }
  }

  //and re-run the sanity check.
  this.store.sanityCheck();
};

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
};

/** Creates a new Annotation instance from an RDF node.
*
* @param {string} id - Id of annotation to create
* @param {jQuery} rdf - RDF source to work with.
* @param {KAT.storage.Store} store - The store associated with this annotation.
*
* @returns KAT.storage.Annotation
*
* @function
* @static
* @name KAT.storage.Annotation.fromRDF
* @memberof {KAT.storage.Annotation}
*/
KAT.storage.Annotation.fromRDF = function(rdf, id, store){

  var $rdf = jQuery(rdf);

  // find the annotation RDF by id.
  var annotRDF = KAT.rdf.findById($rdf, id);

  // extract the selection.
  var url = $rdf.find("kat\\:annotates").attr("rdf:resource");

  // and get the selection part of the url
  var partURL;

  // if we do not start with the right URL, we need to do something else
  if(!url.startsWith(store.docURL+"#")){
    if(url.indexOf("#") != -1){
      console.log("Currently loaded document does not match RDF annotation, loading it anyways ... ");
      partURL = decodeURLComponent(url.indexOf("#") + 1);
    } else {
      throw new Error("Malformed RDF: Unable to parse selection URL. ");
    }
  } else {
    partURL = decodeURLComponent(url.substring(store.docURL.length + 1));
  }

  // parse the selection.
  var selection = KAT.storage.Store.UUID2Selection(partURL);

  // get the kann spec element.
  var kspecElem = KAT.rdf.findById($rdf, $rdf.find("kat\\:kannspec").attr("rdf:nodeID"));

  // check if we have found it
  if(kspecElem.length !== 1){
    throw new Error("Malformed RDF: Unable to find KAnnSpec. ");
  }

  // get the url
  var kspecURL = kspecElem.find("kat\\:kannspec-uri").text();

  var kSpecName = kspecElem.find("kat\\:kannspec-name").text();

  if(!kSpecName){
    throw new Error("Malformed RDF: Missing <kat:kannspec-name>");
  }

  // get the actual KAnnSpec
  var kspec = store.collection.getKAnnSpec(kSpecName);

  // check if the KAnnSpec exists.
  if (!kspec){
    throw new Error("KAnnSpec '"+kSpecName+"' not loaded. ");
  }

  // The KAnnSpec URL does not match.
  if (!kspecURL || kSpecURL !== kspec.url){
    console.warn("Warning: KAnnSpec URL does not match. ");
  }

  // force the KAnnSpec RDF node id.
  kspec.rdf_nodeid = $rdf.find("kat\\:kannspec").attr("rdf:nodeID");


  // now find the concept
  var conceptName = annotRDF.find("kat\\:concept").text();

  if (!conceptName){
    throw new Exception("Malformed RDF: Missing <kat:concept>");
  }

  // get the concept.
  var concept = kspec.getConcept(conceptName);

  if(!concept){
    throw new Exception("Concept '"+conceptName+"' not found inside '"+kSpecName+"'"); 
  }

  // TODO: Get the values.
  return new KAT.storage.Annotation(store, selection, concept, {}, id);
};

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
};

/**
* Shows an edit form for an annotation.
*
* @function
* @name edit
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.edit = function(selection, concept, valuesJSON,annotation){
  annotation.values = valuesJSON;
  annotation.undraw();
  annotation.draw();
  annotation.flash();
};

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
};

/**
* Exports an annotation to RDF.
*
* @param {string} docURL - The URL of the document currently opened
* @param {string} runID - rdf:nodeID of the run.
*
* @return document
* @function
* @name toRDF
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.toRDF = function(docURL, runID){

  var me = this;

  // a few shorthands
  var concept = this.concept;
  var target = docURL+"#"+encodeURIComponent(KAT.storage.Store.Selection2UUID(this.selection));

  //create a parent.
  var parent = $(KAT.rdf.create("rdf:RDF"));

  var contentDesc =
  // create a blank node with the given id.
  KAT.rdf.attr(
    $(KAT.rdf.create('rdf:Description')),
    "rdf:nodeID",
    this.uuid
  ).appendTo(parent).append(

    // point to the run
    KAT.rdf.attr(
      $(KAT.rdf.create('kat:run')),
      "rdf:nodeID",
      runID
    ),

    // point to the KAnnSpec
    KAT.rdf.attr(
      $(KAT.rdf.create('kat:kannspec')),
      "rdf:nodeID",
      concept.KAnnSpec.rdf_nodeid
    ),

    // point to the concept
    $(KAT.rdf.create('kat:concept')).text(concept.name),

    // and the KAT type
    KAT.rdf.attr(
      $(KAT.rdf.create('kat:type')),
      "rdf:resource",
      concept.rdf_type
    ),

    // and point to the selection.
    KAT.rdf.attr(
      $(KAT.rdf.create('kat:annotates')),
      "rdf:resource",
      target
    )
  );


  jQuery.each(concept.fields, function(i, field){
    var value = me.values[field.value];

    // TODO: Remove this line
    // check if the value is an array.
    var fieldVal = jQuery.isArray(value)?value:[value];

    jQuery.each(fieldVal, function(i, value){
      //TODO: Generate individual values.

      if(field.type == KAT.model.Field.types.text){
        // for a text field, simply store the value.
        $(
          KAT.rdf.create(
            KAT.rdf.buildNameSpace(field.rdf_pred, concept.KAnnSpec.xml)
          )
        )
        .text(value).appendTo(contentDesc);

      } else if(field.type == KAT.model.Field.types.reference){
        // for a reference, point to the RDF id.
        KAT.rdf.attr(
          $(
            KAT.rdf.create(
              KAT.rdf.buildNameSpace(field.rdf_pred, concept.KAnnSpec.xml)
            )
          ).appendTo(contentDesc),
          "rdf:nodeID",
          value.uuid
        );

        console.log(value);
      } else if(field.type == KAT.model.Field.types.select){
        // For a select, use the rdf_obj property

        KAT.rdf.attr(
          $(
            KAT.rdf.create(
              KAT.rdf.buildNameSpace(field.rdf_pred, concept.KAnnSpec.xml)
            )
          ).appendTo(contentDesc),
          "rdf:resource",
          value.rdf_obj?value.rdf_obj:(value.value)
        );

      }

    });
  });

  //get the Dom Node.
  return parent.get(0);
};
