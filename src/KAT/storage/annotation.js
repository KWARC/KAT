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


KAT.storage.Annotation = function(store, selection, concept, values, id) {

  /**
   * The Store this annotation is stored in.
   *
   * @type {KAT.storage.Annotation}
   * @name KAT.storage.Annotation#store
   */
  this.store = store;

  //generate the UUID from the selection
  var uuid = id || "KAT_" + (new Date().getTime()) + "_" + (Math.floor(Math.random() *
    10000));

  //Check if we already have the uuid.
  if (this.store.find(uuid)) {
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
  values = (typeof values !== "undefined") ? values : concept.getDefault();

  /**
   * The current values of this annotation, excluding selection.
   *
   * @type {object}
   * @name KAT.storage.Annotation#values
   */
  this.values = values;
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
KAT.storage.Annotation.fromRDF = function(rdf, id, store) {

  // parse the rdf.
  var $rdf = jQuery(rdf);

  // helper function to make a namespaced tag.
  var makeNSTag = function(code, escaped) {
    var tag = KAT.rdf.buildNameSpace(code, $rdf.get(0));
    return escaped ? (tag.replace(new RegExp(':', 'g'), '\\:')) : tag;
  };

  // find the annotation RDF by id.
  var annotRDF = KAT.rdf.findById($rdf, id);

  // extract the selection.
  var url = annotRDF.find("kat\\:annotates").attr("rdf:resource");

  // and get the selection part of the url
  var partURL;

  // if we do not start with the right URL, we need to do something else
  if (url.substring(0, store.docURL.length + 1) != store.docURL + "#") {
    if (url.indexOf("#") != -1) {
      console.log(
        "Currently loaded document does not match RDF annotation, loading it anyways ... "
      );
      partURL = decodeURIComponent(url.substring(url.indexOf("#") + 1));
    } else {
      throw new Error("Malformed RDF: Unable to parse selection URL. ");
    }
  } else {
    partURL = decodeURIComponent(url.substring(store.docURL.length + 1));
  }

  // parse the selection.
  var selection = KAT.storage.Store.UUID2Selection(partURL);

  // get the kann spec element.
  var kspecElem = KAT.rdf.findById($rdf, annotRDF.find("kat\\:kannspec").attr(
    "rdf:nodeID"));

  // check if we have found it
  if (kspecElem.length !== 1) {
    throw new Error("Malformed RDF: Unable to find KAnnSpec. ");
  }

  // get the url
  var kspecURL = kspecElem.find("kat\\:kannspec-uri").text();

  var kSpecName = kspecElem.find("kat\\:kannspec-name").text();

  if (!kSpecName) {
    throw new Error("Malformed RDF: Missing <kat:kannspec-name>");
  }

  // get the actual KAnnSpec
  var kspec = store.collection.getKAnnSpec(kSpecName);

  // check if the KAnnSpec exists.
  if (!kspec) {
    throw new Error("KAnnSpec '" + kSpecName + "' not loaded. ");
  }

  // The KAnnSpec URL does not match.
  if (!kspecURL || kspecURL !== kspec.url) {
    console.warn("Warning: KAnnSpec URL does not match. ");
  }

  // force the KAnnSpec RDF node id.
  kspec.rdf_nodeid = annotRDF.find("kat\\:kannspec").attr("rdf:nodeID");


  // now find the concept
  var conceptName = annotRDF.find("kat\\:concept").text();

  if (!conceptName) {
    throw new Exception("Malformed RDF: Missing <kat:concept>");
  }

  // get the concept.
  var concept = kspec.getConcept(conceptName);

  if (!concept) {
    throw new Error("Concept '" + conceptName + "' not found inside '" +
      kSpecName + "'");
  }

  // array for values to read.
  var values = {};

  // iterate over all the fields.
  jQuery.each(concept.fields, function(_, field) {

    var fieldValues = [];

    if (field.type == KAT.model.Field.types.text) {
      // find all the tags and get the text.
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function() {
        fieldValues.push(jQuery(this).text());
      });

    } else if (field.type == KAT.model.Field.types.reference) {
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function() {
        fieldValues.push(jQuery(this).attr("rdf:nodeID"));
      });
    } else if (field.type == KAT.model.Field.types.select) {
      annotRDF.find(makeNSTag(field.rdf_pred, true)).each(function() {
        var optionSpec = jQuery(this).attr("rdf:resource");

        // go over the options
        for (var i = 0; i < field.validation.length; i++) {

          // and find the right one.
          if (field.validation[i].rdf_obj === optionSpec || field.validation[
              i].value === optionSpec) {
            fieldValues.push(field.validation[i]);
            return;
          }
        }

        throw new Error("Option '" + optionSpec +
          "' not found inside '" + kSpecName + "'");
      });
    }

    // store the field values.
    // if they are missing it is just an empty array.
    values[field.value] = fieldValues;
  });

  var newAnnot = new KAT.storage.Annotation(store, selection, concept, values,
    id);

  return newAnnot;
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
KAT.storage.Annotation.prototype.toRDF = function(docURL, runID) {

  var me = this;

  // a few shorthands
  var concept = this.concept;
  var target = docURL + "#" + encodeURIComponent(KAT.storage.Store.Selection2UUID(
    this.selection));

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


  jQuery.each(concept.fields, function(i, field) {
    var value = me.values[field.value];

    // check if the value is an array.
    var fieldVal = jQuery.isArray(value) ? value : [value];

    jQuery.each(fieldVal, function(i, value) {


      // create an element to add to the RDF
      var rdfElement = $(
        KAT.rdf.create(
          KAT.rdf.buildNameSpace(field.rdf_pred, concept.KAnnSpec.xml)
        )
      ).appendTo(contentDesc);


      if (field.type == KAT.model.Field.types.text) {
        // for a text field, simply store the value.
        rdfElement.text(value);
      } else if (field.type == KAT.model.Field.types.reference) {
        // for a reference, point to the RDF id.
        KAT.rdf.attr(
          rdfElement,
          "rdf:nodeID",
          value.uuid
        );

      } else if (field.type == KAT.model.Field.types.select) {
        // For a select, use the rdf_obj property
        KAT.rdf.attr(
          rdfElement,
          "rdf:resource",
          value.rdf_obj ? value.rdf_obj : (value.value)
        );
      }

    });
  });

  //get the Dom Node.
  return parent.get(0);
};

//===
//edit & delete
//===

/**
 * Shows an edit form for the annotation.
 *
 * @function
 * @name edit
 * @memberof KAT.storage.Annotation
 */
KAT.storage.Annotation.prototype.edit = function(env) {

  KAT.sidebar.generateAnnotationForm(
    env,
    function(selection, concept, valuesJSON, annotation) {
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
 * Deletes an annotation
 *
 * @function
 * @name delete
 * @memberof KAT.storage.Annotation
 */
KAT.storage.Annotation.prototype.delete = function() {

  //undraw me.
  this.undraw();

  //look for this annotation by id and remove it.
  for (var i = 0; i < this.store.annotations.length; i++) {
    if (this.store.annotations[i].uuid == this.uuid) {
      this.store.annotations.splice(i, 1);
      break;
    }
  }
};

//=======
//Drawing & Highlighting
//=======

/**
 * Draws an annotation to the text.
 *
 * @function
 * @name draw
 * @memberof KAT.storage.Annotation
 */

KAT.storage.Annotation.prototype.draw = function() {

  //this is me.
  var me = this;

  console.log(this);
  console.log(this.selection);

  // find the elements in the selection.
  this.store.gui.getRange(this.selection)

  // and iterate over them
  .each(function() {
    var $me = $(this);

    //register eventListener for left-clicks to show references
    $me.click(function() {
      me.showReferences();
    });

    // store the id of this annotation on the element itself
    // however some other annotations might already be registered to this element.

    // get current annotations and store them somewhere
    var current = $me.data("KAT.Annotation.UUID") || [];

    var before = current.slice();

    // add this annotation and push it to the UUIDs
    current.push(me.uuid);
    $me.data("KAT.Annotation.UUID", current);
  });

  // and re-draw
  this.updateDrawing();
};

/**
 * Updates the rendering of all elements in the current selection.
 * Incorperates overlapping annotations.
 *
 * @function
 * @name updateDrawing
 * @memberof KAT.storage.Annotation
 */
KAT.storage.Annotation.prototype.updateDrawing = function() {

  // get a refernce to the store to find other annotations.
  var store = this.store;


  // find the elements in the selection.
  this.store.gui.getRange(this.selection)

  // and iteratate over them
  .each(function() {

    var $me = $(this);

    // get all the annotations linked to the given selection.
    var annotations = $me.data("KAT.Annotation.UUID") || [];


    if (annotations.length === 0) {
      // no annotations are linked to this element anymore
      // so remove all the magic.

      // remove the background color
      // again we need to differentiate the MathML and non-mathml cases
      if (this.namespaceURI.indexOf("MathML") != -1) {
        $me.removeAttr("mathbackground") // remove the MathBackground
          .attr("mathbackground", $me.data(
            "KAT.Annotation.orgBackgroundAttr")) // set it to the original value
          .removeData("KAT.Annotation.orgBackgroundAttr"); // and discard the stored value.
      } else {
        $me.css('background-color', '') // reset the css background color.
          .css("background-color", $me.data(
            "KAT.Annotation.orgBackgroundAttr")) // set it to the original value
          .removeData("KAT.Annotation.orgBackgroundAttr"); // and discard the stored value.
      }

      // and the Background cache is gone.
      $me.removeData("KAT.Annotation.hasBGCache");

      // remove the title attribute.
      $me.removeAttr("title")
        .attr("title", $me.data("KAT.Annotation.orgTitleAttr")) // and set it back to what it was before.
        .removeData("KAT.Annotation.orgTitleAttr")
        .removeData("KAT.Annotation.content")
        .removeData("KAT.Annotation.hasTCache");

    } else {
      // we have some annotation bound to this element.
      // so we need to work with that annotation.


      // for now, just take the first annotation that is bound to the element.
      // TODO: What do we do if there are multiple annotations?

      //for the coloring, just use the last one until we figure things out with the canvas
      var me = store.find(annotations[annotations.length - 1]);

      // set the background color to this one
      var color = me.concept.displayColour;

      // we need to differentiate between MathML and non-mathml nodes here
      if (this.namespaceURI.indexOf("MathML") != -1) {

        // if we do not have a cache, we need to store the old color
        if ($me.data("KAT.Annotation.hasBGCache") !== true) {
          $me
            .data("KAT.Annotation.hasBGCache", true)
            .data("KAT.Annotation.orgBackgroundAttr", $me.attr(
              "mathbackground"));
        }

        $me.attr("mathbackground", color); // and set the new display color
      } else {

        // if we do not have a cache, we need to store the old color
        if ($me.data("KAT.Annotation.hasBGCache") !== true) {
          $me
            .data("KAT.Annotation.hasBGCache", true)
            .data("KAT.Annotation.orgBackgroundAttr", $me.css(
              'background-color'));
        }

        $me.css('background-color', color); // and set the new display color
      }

      // we need to recompute the tooltip
      // and need to take care of overlapping annotations

      // store the original title attribute if available
      if ($me.data("KAT.Annotation.hasTCache") !== true) {
        $me
          .data("KAT.Annotation.hasTCache", true)
          .data("KAT.Annotation.orgTitleAttr", $me.attr("title"));
      }


      //just compute the tooltip for each element and add all of them into a single annotation
      var computedTooltip = "";
      $(annotations).each(function(i, annot) {
        computedTooltip += "<p>" + store.find(annot).recomputeTooltip() +
          "</p>";
      });

      // and insert the result
      $me
        .removeAttr("title")
        .data("KAT.Annotation.content", computedTooltip);

    }

  });
};

/**
 * Un-draws an annotation to the text.
 *
 * @function
 * @name undraw
 * @memberof KAT.storage.Annotation
 */
KAT.storage.Annotation.prototype.undraw = function() {
  //this is me
  var me = this;

  //find the elements in the selection.
  var range = this.store.gui.getRange(this.selection);

  //remove the class and data
  range.each(function() {
    var $me = $(this);

    //unregister eventListener for all click events
    $me.off("click");

    //the current data
    var current = $(this).data("KAT.Annotation.UUID") || [];

    //find the current index and remove it.
    var index = current.indexOf(me.uuid);

    //if we have the right index, remove an element.
    if (~index) {
      current.splice(index, 1);
      $me.data("KAT.Annotation.UUID", current);
    }
  });

  // and re-draw
  this.updateDrawing();
};

/**
 * Computes the tooltip of an element.
 *
 * @function
 * @returns {string}
 * @memberof KAT.storage.Annotation
 */
KAT.storage.Annotation.prototype.recomputeTooltip = function() {

  var me = this;

  // the display we will fill with doT.js
  var display = me.concept.display;

  // a replacer function for backward compatibility.
  var replacer = function(name) {
    return "{{= " + name +
      ".map(function(val){return val.toString()}).join() }}";
  };

  var keys = [];

  for (var key in me.values) {
    if (me.values.hasOwnProperty(key)) {

      // backward compatibilize the old display tag.
      display = display
        .replace("{" + key + "}", replacer(key))
        .replace("{" + key.toLowerCase() + "}", replacer(key));

      //add the key to the variables
      keys.push(key);
    }
  }

  // a cache for annotation objects.
  var annotationCache = {};


  var mapAnnotationObject = function(annot) {

    // if we have already mapped this, return it form the cache.
    // this will prevent bugs with circular annotations.
    if (annotationCache.hasOwnProperty(annot.uuid)) {
      return annotationCache[annot.uuid];
    }

    // an object of parameters we store in the cache.
    var valObject = annotationCache[annot.uuid] = {};

    // map each of the fields.
    $.each(annot.concept.fields, function(i, field) {
      if (field.type === KAT.model.Field.types.reference) {
        // for references, point to the sub object.
        valObject[field.value] = annot.values[field.value].map(
          mapAnnotationObject);
      } else if (field.type === KAT.model.Field.types.select) {
        // for selects, use the name (or value if it is missing)
        valObject[field.value] = annot.values[field.value].map(function(
          field) {
          return field.name || field.value;
        });
      } else {
        // for texts, simply make a copy of the strings.
        valObject[field.value] = annot.values[field.value].slice();
      }
    });

    // and store the self reference as an "_"
    valObject._ = annot;

    // now return the object.
    return valObject;
  };

  // get a nice json object.
  var myObj = mapAnnotationObject(me);

  // and build a template.
  var fn = doT.template(
    display, {
      evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
      interpolate: /\{\{=([\s\S]+?)\}\}/g,
      encode: /\{\{!([\s\S]+?)\}\}/g,
      use: /\{\{#([\s\S]+?)\}\}/g,
      useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
      define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
      defineParams: /^\s*([\w$]+):([\s\S]+)/,
      conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
      iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
      varname: "_," + keys.join(","),
      strip: true,
      append: true,
      selfcontained: false,
      doNotSkipEncoded: false
    }
  );

  var args = [myObj].concat(keys.map(function(k, i) {
    return myObj[k];
  }));

  // and fill in the function.
  return fn.apply(this, args);
};

/**
 * Flashes an annotation.
 *
 * @function
 * @name flash
 * @memberof KAT.storage.Annotation
 */

//called in rightclick: highlight annotation
KAT.storage.Annotation.prototype.flash = function() {

  var me = this;

  //get the range.
  this.store.gui
    .getRange(this.selection).stop()
    .animate({
      backgroundColor: "red"
    }, 1500, function() {
      me.updateDrawing();
    });
};

/**
 * Brings an annotation into focus.
 *
 * @function
 * @name focus
 * @memberof KAT.storage.Annotation
 */

KAT.storage.Annotation.prototype.focus = function() {

  /* both taken from
   * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139 */
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  //takes rgb color and return corresponding representation in hexadecimal
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function colorBlending(canvasColor, elementColor, alpha) {
    return Math.round((1 - alpha) * canvasColor + elementColor);
  }

  function isMathML(element) {
    return (typeof $(element).attr("xml:id") !== typeof undefined && $(
      element).attr("xml:id") !== false);
  }

  //idea: create 2 divs, one which covers annotation and another one
  //      that covers all of screen

  var selection = this.store.gui
    .getRange(this.selection).stop();

  //find closest div and change z-index, so it appears in front of overlay
  selection.closest("div").css({
      "position": "relative",
      "z-index": 2
    })
    .addClass("focused");

  //take all elements in next highest div and change color of MathML
  //elements not in selection
  $(".focused").find("*").not(selection).each(function(index) {

    //if it is a math element which is annotated-> change the color
    if (isMathML(this)) {

      if ($(this).attr("mathbackground") !== undefined) {

        var oldColor = $(this).attr("mathbackground");
        $(this).attr("oldcolor", oldColor);

        //compute the new color out of old color
        var newColor = rgbToHex(colorBlending(parseInt(hexToRgb(oldColor)
            .r), parseInt(hexToRgb("#000000").r), 0.4),
          colorBlending(parseInt(hexToRgb(oldColor).g), parseInt(
            hexToRgb("#000000").g), 0.4),
          colorBlending(parseInt(hexToRgb(oldColor).b), parseInt(
            hexToRgb("#000000").b), 0.4));
        $(this).attr("mathbackground", newColor);

      }

    } else if ($(this).css("background-color") !== undefined && $(this).css(
        "background-color").match(/\d+/g)) {

      var oldStyle = $(this).css("background-color");
      $(this).attr("oldstyle", oldStyle);

      //compute the new color out of old color
      var newStyle = rgbToHex(colorBlending(parseInt($(this).css(
          "background-color").match(/\d+/g)[0]), parseInt(hexToRgb(
          "#000000").r), 0.4),
        colorBlending(parseInt($(this).css("background-color").match(
          /\d+/g)[1]), parseInt(hexToRgb("#000000").g), 0.4),
        colorBlending(parseInt($(this).css("background-color").match(
          /\d+/g)[2]), parseInt(hexToRgb("#000000").b), 0.4));
      $(this).css("background-color", newStyle);

    }
  });

  var div = $("<div>")
    .addClass("focus")
    .css({
      "width": "100%",
      "height": "100%",
      "background": 'rgba(0,0,0,0.4)',
      "top": 0,
      "left": 0,
      "position": "fixed",
      "z-index": 1
    })
    .appendTo("body");

  //center the selected annotation on the screen
  var offset = $(selection[0]).offset().top;
  var halfScreen = Math.round($(window).height() / 2);
  var newOffset = offset - halfScreen;

  //prevent values from going out of screen range
  if (newOffset > 0)
    window.scrollTo(0, newOffset);
  else
    window.scrollTo(0, 0);

  //initialize code to revert the changes on this element
  KAT.storage.Annotation.prototype.unfocus = function() {
    div.remove();

    //remove the overlay color and go back to old colors
    $(".focused").find("*").not(selection).each(function(index) {

      if (isMathML(this) && $(this).attr("mathbackground") !==
        undefined) {

        var oldColor = $(this).attr("oldcolor");
        $(this).removeAttr("oldcolor");
        $(this).attr("mathbackground", oldColor);

      } else if ($(this).attr("oldstyle") !== undefined) {

        $(this).css("background-color", $(this).attr("oldstyle"));
        $(this).removeAttr("oldstyle");

      }
    });


    $(".focused") //remove changes
      .css({
        "position": "",
        "z-index": 0
      })
      .removeClass("focused");
    KAT.storage.Annotation.prototype.unfocus = function() {};
  };

};

/**
 * Reverts the changes of KAT.storage.Annotation.prototype.focus
 *
 * @function
 * @name unfocus
 * @memberof KAT.storage.Annotation
 */

KAT.storage.Annotation.prototype.unfocus = function() {};


/**
 * Show the references of this annotation.
 *
 * @function
 * @name showReferences
 * @memberof KAT.storage.Annotation
 */

KAT.storage.Annotation.prototype.showReferences = function() {

  //helper function to find a selection element that contains position information
  var findArrowPoint = function(selection) {
    index = 0;
    while (selection[index] && selection[index].offsetLeft === undefined) {
      ++index;
    }
    if (selection[index] === undefined) {
      console.log("No starting position for arrow found.");
      return -1;
    }

    return index;
  };

  var me = this;

  var selection = this.store.gui.getRange(this.selection).stop();

  //find an element that can be pointed to
  var index = findArrowPoint(selection);
  if (index == -1) {
    return;
  }

  var arrowStartX = $(selection[index]).offset().left;
  var arrowStartY = $(selection[index]).offset().top;

  //initialize canvas all arrows are drawn on
  var canvas = Raphael(0, 0, "100%", $(document).height());

  //for debugging : KAT.sidebar.store.annotations[0].concept
  //loop over all fields of an annotation
  $.each(this.concept.fields, function(index, field) {
    if (field.type == "reference") {

      //loop over all references within a field
      $.each(me.values[field.value], function(index, referencedAnnot) {
        var referenceSelection = this.store.gui.getRange(this.selection)
          .stop();

        //find an element that can be pointed to
        index = findArrowPoint(referenceSelection);
        if (index == -1) {
          return;
        }

        var arrowEndX = $(referenceSelection[index]).offset().left;
        var arrowEndY = $(referenceSelection[index]).offset().top;

        var controlX = (arrowStartX + arrowEndX) / 2 - 30;
        var controlY = Math.min(arrowStartY, arrowEndY) - 100;

        //draw arrow
        canvas.path("M" + arrowStartX + " " + arrowStartY + " Q " +
            controlX + " " + controlY + " " + arrowEndX + " " +
            arrowEndY)
          .attr("stroke", "black")
          .attr("stroke-width", "5");

        //show which relationship an arrow is representing
        var labelX = (arrowEndX + arrowStartX) / 2;
        var labelY = (arrowEndY + arrowStartY) / 2;
        canvas.text(labelX, labelY, field.name)
          .attr({
            "font-family": "serif",
            "font-size": "40",
            "font-weight": "bold"
          });
      });
    }
  });

  //remove overlay again when somebody clicks on the document
  $(document).click(function() {
    $("svg").remove();
  });
};
