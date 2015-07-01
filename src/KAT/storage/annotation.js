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
  var className = this.concept.name;
  range.addClass(className).css('background-color', this.concept.displayColour).each(function(){
    var $me = $(this); //creates jQuery object

    var current = $me.data("KAT.Annotation.UUID") || [];
    current.push(me.uuid);

  function getWordsBetweenCurlies(str) {
    var results = [], re = /{([^}]+)}/g, text;
    while((text = re.exec(str))?true:false) {
      results.push(text[1]);
    }
    return results;
  }

    //find the values to be inserted for {x}
    var m = getWordsBetweenCurlies(me.concept.display);

    var tmp = document.createElement("div");
    tmp.innerHTML = me.concept.display;
    var hovertext = tmp.textContent || tmp.innerText || "";

    var capitalize = function(string) {

      return string[0].toUpperCase() + string.slice(1).toLowerCase();

    };

    var getJSONValue;
    $.each(m, function(j, key) {

      //check 'type' of the field
      switch(me.concept.fields[j].type) {

        case KAT.model.Field.types.reference:
          console.log("reference: ");
          break;

        case KAT.model.Field.types.select:
          getJSONValue = me.values[key][0].value || "";
          hovertext = hovertext.replace("{"+m[j]+"}", getJSONValue);
          break;

        default: //text; just print the text.
          getJSONValue = me.values[key] || me.values[capitalize(key)] || "";
          hovertext = hovertext.replace("{"+m[j]+"}", getJSONValue);
      }

    });

    $me.attr("title", hovertext);

    //write it back
    $me.data("KAT.Annotation.UUID", current);
  });

  $.each(me.concept.fields, function(i, field) {console.log(field.value); console.log(field.type);});

  $(document).tooltip(); //here the magic of the tooltip displaying happens

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

  // parse the rdf.
  var $rdf = jQuery(rdf);

  // helper function to make a namespaced tag.
  var makeNSTag = function(code, escaped){
    var tag = KAT.rdf.buildNameSpace(code, $rdf.get(0));
    return escaped?(tag.replace(new RegExp(':', 'g'), '\\:')):tag;
  };

  // find the annotation RDF by id.
  var annotRDF = KAT.rdf.findById($rdf, id);

  // extract the selection.
  var url = annotRDF.find("kat\\:annotates").attr("rdf:resource");

  // and get the selection part of the url
  var partURL;

  // if we do not start with the right URL, we need to do something else
  if(url.substring(0, store.docURL.length + 1) != store.docURL+"#"){
    if(url.indexOf("#") != -1){
      console.log("Currently loaded document does not match RDF annotation, loading it anyways ... ");
      partURL = decodeURIComponent(url.indexOf("#") + 1);
    } else {
      throw new Error("Malformed RDF: Unable to parse selection URL. ");
    }
  } else {
    partURL = decodeURIComponent(url.substring(store.docURL.length + 1));
  }

  // parse the selection.
  var selection = KAT.storage.Store.UUID2Selection(partURL);

  // get the kann spec element.
  var kspecElem = KAT.rdf.findById($rdf, annotRDF.find("kat\\:kannspec").attr("rdf:nodeID"));

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
  if (!kspecURL || kspecURL !== kspec.url){
    console.warn("Warning: KAnnSpec URL does not match. ");
  }

  // force the KAnnSpec RDF node id.
  kspec.rdf_nodeid = annotRDF.find("kat\\:kannspec").attr("rdf:nodeID");


  // now find the concept
  var conceptName = annotRDF.find("kat\\:concept").text();

  if (!conceptName){
    throw new Exception("Malformed RDF: Missing <kat:concept>");
  }

  // get the concept.
  var concept = kspec.getConcept(conceptName);

  if(!concept){
    throw new Error("Concept '"+conceptName+"' not found inside '"+kSpecName+"'");
  }

  // array for values to read.
  var values = {};

  // iterate over all the fields.
  jQuery.each(concept.fields, function(_, field){

    var fieldValues = [];

    if(field.type == KAT.model.Field.types.text){
      // find all the tags and get the text.
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function(){
        fieldValues.push(jQuery(this).text());
      });

    } else if(field.type == KAT.model.Field.types.reference){
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function(){
        fieldValues.push(jQuery(this).attr("rdf:nodeID"));
      });
    } else if(field.type == KAT.model.Field.types.select){
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function(){
        var optionSpec = jQuery(this).attr("rdf:resource");

        // go over the options
        for(var i=0;i<field.validation.length; i++){

          // and find the right one.
          if(field.validation[i].rdf_obj === optionSpec || field.validation[i].value === optionSpec){
            fieldValues.push(field.validation[i]);
            return;
          }
        }

        throw new Error("Option '"+optionSpec+"' not found inside '"+kSpecName+"'");
      });
    }

    // store the field values.
    // if they are missing it is just an empty array.
    values[field.value] = fieldValues;
  });

  var newAnnot = new KAT.storage.Annotation(store, selection, concept, values, id);

  return newAnnot;
};

/**
* Flashes an annotation.
*
* @function
* @name flash
* @memberof KAT.storage.Annotation
*/

//called in rightclick: highlight annotation
KAT.storage.Annotation.prototype.flash = function(){
  //get the range.
  this.store.gui
  .getRange(this.selection).stop()
  .animate({ backgroundColor: "red"}, 1500, function(){
    $(this).css("background-color", "");
  });
};



/**
* Shows an edit form for the annotation.
*
* @function
* @name edit
* @memberof KAT.storage.Annotation
*/
KAT.storage.Annotation.prototype.edit = function(env){

  // TODO: Parse the env.
  KAT.sidebar.generateAnnotationForm(
    env,
    function(selection, concept, valuesJSON, annotation){
      // update the values.
      annotation.values = valuesJSON;

      // re-draw the annotation.
      annotation.undraw();
      annotation.draw();

      //flash it.
      annotation.flash();

      return annotation;
    },
    this,
    this.selection,
    this.concept
  );
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

    // check if the value is an array.
    var fieldVal = jQuery.isArray(value)?value:[value];

    jQuery.each(fieldVal, function(i, value){


      // create an element to add to the RDF
      var rdfElement = $(
        KAT.rdf.create(
          KAT.rdf.buildNameSpace(field.rdf_pred, concept.KAnnSpec.xml)
        )
      ).appendTo(contentDesc);


      if(field.type == KAT.model.Field.types.text){
        // for a text field, simply store the value.
        rdfElement.text(value);
      } else if(field.type == KAT.model.Field.types.reference){
        // for a reference, point to the RDF id.
        KAT.rdf.attr(
          rdfElement,
          "rdf:nodeID",
          value.uuid
        );

      } else if(field.type == KAT.model.Field.types.select){
        // For a select, use the rdf_obj property
        KAT.rdf.attr(
          rdfElement,
          "rdf:resource",
          value.rdf_obj?value.rdf_obj:(value.value)
        );
      }

    });
  });

  //get the Dom Node.
  return parent.get(0);
};
