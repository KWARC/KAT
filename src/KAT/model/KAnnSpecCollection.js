/** Creates a new KAnnSpecCollection instance.
 *
 * @name KAT.model.KAnnSpecCollection
 * @this {KAT.model.KAnnSpecCollection}
 * @Alias KAT.model.KAnnSpecCollection
 * @class
 */
KAT.model.KAnnSpecCollection = function() {
  /**
   * KAnnSpecs stored in this KAnnSpecCollection
   *
   * @type {KAT.model.KAnnSpec[]}
   * @name KAT.model.KAnnSpecCollection#KAnnSpecs
   */
  this.KAnnSpecs = [];
};

/** Adds an onology to this KAnnSpecCollection.
 *
 * @param {KAT.model.KAnnSpec} KAnnSpec - KAnnSpec to add
 *
 * @function
 * @instance
 * @name addKAnnSpec
 * @memberof KAT.model.KAnnSpecCollection
 * @return {KAT.model.KAnnSpec|boolean} - newly added KAnnSpec or false in case of errors
 */
KAT.model.KAnnSpecCollection.prototype.addKAnnSpec = function(KAnnSpec) {

  //check if we already have it.
  if (this.getKAnnSpec(KAnnSpec.name)) {
    return false;
  }

  //push the KAnnSpec
  this.KAnnSpecs.push(KAnnSpec);

  //and return it.
  return KAnnSpec;
};

/** Creates a new KAnnSpec instance and adds it to this KAnnSpecCollection.
 *
 * @param {document} xml - XML document representing KAnnSpec.
 * @param {string} url - URL of KAnnSpec represented by the XML. 
 *
 * @function
 * @instance
 * @name addNewKAnnSpec
 * @memberof KAT.model.KAnnSpecCollection
 * @return {KAT.model.KAnnSpec|boolean} - newly created KAnnSpec or false in case of errors
 */
KAT.model.KAnnSpecCollection.prototype.addNewKAnnSpec = function(xml, url) {
  return this.addKAnnSpec(new KAT.model.KAnnSpec(xml, url, this));
};

/** Initialises this KAnnSpecCollection. Should be called once all KAnnSpecs have been added.
 *
 * @function
 * @instance
 * @name init
 * @memberof KAT.model.KAnnSpecCollection
 * @return {KAT.model.KAnnSpec} - this KAnnSpec store
 */
KAT.model.KAnnSpecCollection.prototype.init = function() {
  //iterate over the fields
  //this may take a while
  $.each(this.KAnnSpecs, (function(i, spec) {
    $.each(spec.concepts, (function(j, concept) {
      $.each(concept.fields, (function(k) {
        if (this.type == KAT.model.Field.types.reference) {
          for (var l = 0; l < this.validation.length; l++) {
            var name = this.validation[l];

            //it is already referenced, get the name out of it
            if (name instanceof KAT.model.Concept) {
              name = name.getFullName();
            }

            //find the concept, try it within this KAnnSpec first
            var concept = this.concept.KAnnSpec.getConcept(
              name);

            //and then do it in the KAnnSpecCollection
            if (!concept) {
              concept = this.concept.KAnnSpec.collection.getConcept(
                name);
            }

            if (!concept) {
              throw new KAT.model.ParsingError(
                "KAT.model.Field: Invalid XML for field '" +
                this.getFullName() +
                "' (Concept not found: '" + name + "'). ",
                this.xml);
            }

            //store the concept in the validation.
            this.validation[l] = concept;
          }
        }
      }).bind(concept));
    }).bind(spec));
  }));

  return this;
};


/**
 * Finds an KAnnSpec by name.
 *
 * @param {string} name - Name of KAnnSpec to search for.
 *
 * @function
 * @instance
 * @name getKAnnSpec
 * @memberof KAT.model.KAnnSpecCollection
 * @return {KAT.model.KAnnSpec|boolean} - the KAnnSpec searched for or false.
 */
KAT.model.KAnnSpecCollection.prototype.getKAnnSpec = function(name) {
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if (!KAT.model.nameRegEx.test(name)) {
    return false;
  }

  //Search for the name
  for (var i = 0; i < this.KAnnSpecs.length; i++) {
    if (this.KAnnSpecs[i].name == name) {
      return this.KAnnSpecs[i];
    }
  }

  //return false if not found.
  return false;
};

/**
 * Finds a concept by name.
 *
 * @param {string} name - Name of concept to search for. Should be of the form KAnnSpecName.ConceptName
 *
 * @function
 * @instance
 * @name getConcept
 * @memberof KAT.model.KAnnSpecCollection
 * @return {KAT.model.Concept|boolean} - the concept searched for or false.
 */
KAT.model.KAnnSpecCollection.prototype.getConcept = function(name) {
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if (!KAT.model.nameRegEx2.test(name)) {
    return false;
  }

  //match the name regex
  name = name.match(KAT.model.nameRegEx2);

  //get the KAnnSpec
  var KAnnSpec = this.getKAnnSpec(name[1]);

  if (!KAnnSpec) {
    return false;
  }

  //get the concept
  return KAnnSpec.getConcept(name[2]);
};

/**
 * Finds all concepts in this KAnnSpecCollection
 *
 *
 * @function
 * @instance
 * @name getKAnnSpec
 * @memberof KAT.model.KAnnSpecCollection
 * @return {Kat.model.Concept[]} - concepts found
 */
KAT.model.KAnnSpecCollection.prototype.findConcepts = function() {
  var concepts = [];

  for (var i = 0; i < this.KAnnSpecs.length; i++) {
    for (var j = 0; j < this.KAnnSpecs[i].concepts.length; j++) {
      concepts.push(this.KAnnSpecs[i].concepts[j]);
    }
  }

  return concepts;
};

/**
 * Finds a field by name.
 *
 * @param {string} name - Name of field to search for. Should be of the form KAnnSpecName.ConceptName.FieldName
 *
 * @function
 * @instance
 * @name getField
 * @memberof KAT.model.KAnnSpecCollection
 * @return {KAT.model.Field|boolean} - the field searched for or false.
 */
KAT.model.KAnnSpecCollection.prototype.getField = function(name) {
  //normalise the name
  name = KAT.model.nameNormaliser(name);

  if (!KAT.model.nameRegEx3.test(name)) {
    return false;
  }

  //match the name regex
  name = name.match(KAT.model.nameRegEx3);

  //get the KAnnSpec
  var KAnnSpec = this.getKAnnSpec(name[1]);

  if (!KAnnSpec) {
    return false;
  }

  //get the concept
  var concept = KAnnSpec.getConcept(name[2]);

  if (!concept) {
    return false;
  }

  //get the field
  return concept.getField(name[3]);
};

/**
 * Assigns colours to each concept in this KAnnSpecCollection
 *
 *
 * @function
 * @instance
 * @name assignDisplayColour
 * @memberof KAT.model.KAnnSpecCollection
 */
KAT.model.KAnnSpecCollection.prototype.assignDisplayColour = function() {

  //byte2Hex and RGB2Color are used to convert from RGB to hex.
  var byte2Hex = function(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(
      n & 0x0F, 1);
  };

  var RGB2Color = function(r, g, b) {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  };

  //This function give a palette of 56 colours going accross the rainbow
  var makeColorGradient = function(frequency, phase1, phase2, phase3) {
    var center = 128;
    var width = 127;
    var len = 56;

    var colourValues = [];

    for (var i = 0; i < len; ++i) {
      var red = Math.sin(frequency * i + phase1) * width + center;
      var grn = Math.sin(frequency * i + phase2) * width + center;
      var blu = Math.sin(frequency * i + phase3) * width + center;
      colourValues.push(RGB2Color(red, grn, blu));
    }
    return colourValues;
  };

  //This function returns equidistant array indices
  var evenlySplitPalette = function(colorsNeeded, maxVal) {
    var diff = Math.floor(maxVal / colorsNeeded);
    var values = [];
    var nextVal = diff;
    while (nextVal <= maxVal) {
      values.push(nextVal);
      nextVal = diff + values[values.length - 1];
    }
    var expectedMidVal = Math.floor(maxVal / 2);
    var currentMidVal = values[Math.floor(values.length / 2)];
    var deviation = currentMidVal - expectedMidVal;
    if (values.length % 2 === 0) {
      deviation = Math.floor(deviation / 2);
    }
    values.forEach(function(entry, index) {
      values[index] = entry - deviation;
    });
    return values;
  };

  //Here we use the equidistant indices to access equidistant colours from the colour palette
  var colours = function(colorsNeeded) {
    var range = makeColorGradient(0.1, 0, 2, 4);
    var indices = evenlySplitPalette(colorsNeeded, range.length);
    var result = [];
    for (i = 0; i < indices.length; i++) {
      result.push(range[indices[i]]);
    }
    return result;
  };

  //concepts in current KAnnSpecCollection
  var concepts = this.findConcepts();
  var numberOfConcepts = concepts.length;

  //We get colours for each concept, and assign it to a concept
  var coloursSelected = colours(numberOfConcepts);
  for (i = 0; i < numberOfConcepts; i++) {
    concepts[i].displayColour = coloursSelected[i];
  }
};
