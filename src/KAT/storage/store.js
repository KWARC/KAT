/** Creates a new Store instance.
*
* @param {KAT.gui} gui - Gui associated to this store.
* @param {string} docURL - URL of document currently loaded.
*
* @name KAT.storage.Store
* @this {KAT.storage.Store}
* @Alias KAT.storage.Store
* @class
*/
KAT.storage.Store = function(gui, docURL){
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
  * URL of document currently loaded.
  *
  * @type {string}
  * @name KAT.storage.Store#docURL
  */
  this.docURL = KAT.storage.resolve(docURL);

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

/** Filters all annotations by a certain name.
*
* @param {string} concept - Concept of annotation to find.
* @returns {KAT.storage.Annotation[]} - List of annotations.
*
* @function
* @instance
* @name filterByConcept
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.filterByConcept = function(concept){
  //the filtered annotation we want to find.
  var filteredAnnotations = [];

  //we want to look over the arguments
  var conceptNames = jQuery.makeArray(arguments);
  var showAll = (conceptNames.length === 0);

  //and check that we can find the right annotations.
  jQuery.each(this.annotations, function(index, annot){
    if(showAll || conceptNames.indexOf(annot.concept.name) != -1){
      filteredAnnotations.push(annot);
    }
  });

  //return the annotations.
  return filteredAnnotations;
};

/** Finds an annotation if it exists.
*
* @param {string} uuid - UUID of annotation to find.
* @returns {KAT.storage.Annotation|undefined} - The given annotation if found.
*
* @function
* @instance
* @name find
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
* @name findfromElement
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

/** Exports all the annotations in this store to RDF.
*
* @function
* @instance
* @name toRDF
* @memberof KAT.storage.Store
* @return {document} - returns
*/
KAT.storage.Store.prototype.toRDF = function(){
  //self-reference
  var me = this;

  // Create the top-level rdf document.
  var rdfTopLevel = $(KAT.rdf.create("rdf:RDF"))
  .attr("xmlns:kat", "https://github.com/KWARC/KAT/")
  .attr("xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");

  // Create a run element.
  // TODO: Read this when importing and store this?
  var runID = "kat_run";


  rdfTopLevel.append(

    // referencing to the blank node
    $(KAT.rdf.create("rdf:Description")).append(
      KAT.rdf.attr($(KAT.rdf.create("kat:annotation")), "rdf:nodeID", runID)
    ),

    // create the blanknode
    KAT.rdf.attr(
      $(KAT.rdf.create("rdf:Description")),
      "rdf:nodeID",
      runID
    ).append(
      KAT.rdf.attr(
        $(KAT.rdf.create("rdf:type")),
        "rdf:resource",
        "kat:run"
      ),
      KAT.rdf.attr(
        $("<kat:date />").text((new Date()).toISOString()),
        "rdf:datatype",
        "xs:dateTime"
      ),
      $("<kat:tool>").text("KAT"),
      $("<kat:runid>").text("0") //TODO: Have a better runID
    )
  );

  //stores KannSpecs already run.
  var specsRun = {};

  //Find all the KAnnSpecs
  jQuery.each(this.annotations, function(i, annotation){
    // The KAnnSpec
    var spec = annotation.concept.KAnnSpec;

    // if we have already run it, just return.
    if(!specsRun[spec.rdf_nodeid]){

      // we have run this KAnnSpec.
      specsRun[spec.rdf_nodeid] = true;

      // find all the XML namespaces. Ignore the default namespace because we don't want that.
      // and write them onto the top-level RDF element.
      spec.xml.find("annotation").each(function(){
        $.each(this.attributes, function(i, attrib){
           var name = attrib.name;
           var value = attrib.value;

           if(name.startsWith("xmlns:")){
             rdfTopLevel.attr(name, value);
           }
        });
      });

     // and create a blank node for it.
     rdfTopLevel.append(
       $(KAT.rdf.create("rdf:Description")).append(
         KAT.rdf.attr(
           $(KAT.rdf.create("kat:annotation")),
           "rdf:nodeID",
           spec.rdf_nodeid
        )
       ),

       KAT.rdf.attr($(KAT.rdf.create("rdf:Description")), "rdf:nodeID", spec.rdf_nodeid).append(
         KAT.rdf.attr($("<rdf:type>"), "rdf:resource", "kat:kannspec"),

         $("<kat:kannspec-name>").text(spec.name),
         $("<kat:kannspec-URI>").text("about:blank")
       )
     );

   }

   // now create a new blank node for the actual annotation.
   // we have a function for this.
   rdfTopLevel.append($(annotation.toRDF(me.docURL, runID)).children());
  });

  //return a string because javascrt
  return rdfTopLevel.get(0).outerHTML;
};

/** Adds a new annotation to this Store based on an RDF export.
*
* @param {document} rdf - RDF to read from.
*
* @function
* @instance
* @name addFromRDF
* @memberof KAT.storage.Store
*/
KAT.storage.Store.prototype.addFromRDF = function(rdf){

  // do some intial parsing.
  var parsedRDF = new KAT.storage.RDF(rdf);

  console.log(parsedRDF); 
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
