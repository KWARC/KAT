/*
 * This file is part of KAT, the KWARC Annotation Tool,
 * see https://github.com/KWARC/KAT
 *
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 *
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/*
 * Creates and controls the annotation displays.
 */

/**
* Class constructor
* @param {Array[Object{idBase, idExtent, content}]} annotations The array of
* annotations to be displayed.
* @param {String} specialClass The class to be added to the words having
* annotations bound.
*/
kat.Display = function (annotations, annotationRegistry, conceptRegistry, specialClass) {
  
  //init properties
  this.$annotations = []; 
  this.$specialClass = kat.Constants.Display.SpecialClass; 

  //set the annotations
  this.setAnnotations(annotations);
  if (specialClass) {
    this.setSetSpecialClass(specialClass);
  }

  //set registries
  this._annotationRegistry = annotationRegistry;
  this._conceptRegistry = conceptRegistry;
}; 

/*
  Sets the annotations property
*/
kat.Display.prototype.setAnnotations = function(annotations){
  this.$annotations = annotations; 
}

/*
  Gets the annotation property
*/
kat.Display.prototype.getAnnotations = function(){
  return this.$annotations; 
}


/*
  Sets the specialClass property
*/
kat.Display.prototype.setSpecialClass = function(specialClass){
  this.$specialClass = specialClass; 
}

/*
  Gets the specialClass property
*/
kat.Display.prototype.getSpecialClass = function(){
  return this.$specialClass; 
}

/*
  Adds an annotation to the display
*/
kat.Display.prototype.addAnnotation = function (annotation) {
  this.$annotations.push(annotation);
}; 

/*
  Removes an annotation from the display
*/
kat.Display.prototype.deleteAnnotation = function (id) {

  //find all annotations with the given id
  for (var i = 0; i < this.$annotations.length; i++) {
    if (this.$annotations[i]["id"] == id) {
      this.$annotations.splice(i, 1);
    }
  }

};

/*
  Adds the class to the spans having annotations bound
*/
kat.Display.prototype.addSpecialClassToSpans = function () {

  //iterate over the annotations
  for (var i = 0; i < this.getAnnotations().length; i++) {
    var annotation = this.$annotations[i];

    //get the start and end id
    var id1 = annotation["idBase"];
    var id2 = annotation["idExtent"];

    //exchange if necessary, to start from the smallest
    if ($("#" + id1).index() > $("#" + id2).index()) {
      var aux = id2;
      id2 = id1;
      id1 = aux;
    }

    //console.log("ids ", id1, id2); //Log all the ids
    
    //find the ids of the annotated elements
    var annotatedIds;
    if (id1 === id2) {
      annotatedIds = $('#' + id1);
    } else {
      annotatedIds = $("#" + id1).nextUntil("#" + id2).andSelf().add($('#' + id2));
    }

    //Classes for the CSS
    var ontologyClass = 'ontology-' + annotation.ontology;
    var conceptClass = 'concept-' + annotation.concept.replace(/\./g, '-');
    var classes = [this.getSpecialClass(), ontologyClass, conceptClass].join(" ");

    //get the current Id
    var currentAnnotationId = annotation["id"];

    //wrap the annotated spans and add classes and stuff
    annotatedIds.wrapAll("<span " +
      "id='" + currentAnnotationId + "' " +
      "class='" + classes + "' " +
      "ontology='" + annotation.ontology + "' " +
      "concept='" + annotation.concept + "'>"
    );

    //update the id
    annotation["id"] = currentAnnotationId;
    
    //add style to the spans
    if (annotation["style"] != null) {
      var rules = annotation["style"].split(";");
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j].split(":");
        if (rule.length == 2) {
          $("#" + currentAnnotationId).css(rule[0].trim(), rule[1].trim());
        }
      }
    }

  }
}; 

/*
  Creates Tooltip Displays. 
*/
kat.Display.prototype.createTooltipDisplays = function () {

  //iterate over all the annotations
  for (var i = 0; i < this.getAnnotations().length; i++) {

    //Button and tooltip html
    var editButton = '<i title="Edit" class="icon-edit pull-right edit-annotation" id="edit-annotation-' + this.$annotations[i].id + '"></i>';
    var closeButton = '<i title="Close" class="icon-remove"></i>';

    var tooltipsterOptions = {
      //"trigger": kat.Constants.Display.Triger,
      //"interactive": true,
      "title"    : 'Annotation <button type="button" class="close" id="close-' + this.$annotations[i].id + '" aria-hidden="true">' + closeButton + '</button>' + editButton,
      "html"     : true,
      "placement": "bottom",
      "content"  : this.$annotations[i].content
    }

    //get the current annotation
    var currentAnnotation = this._annotationRegistry.getAnnotation(this.$annotations[i].id);
    
    //create arrows if required
    if (currentAnnotation.getExtraData().referenceId) {
      this.createReferenceArrow(currentAnnotation, this.$annotations[i].id);
    }

    $("#" + this.$annotations[i].id).popover(tooltipsterOptions);
    
    var annotationId = "#" + this.$annotations[i].id;
    var annotationCloseId = "#" + 'close-' + this.$annotations[i].id;
    
    //scope and 
    (function (annotationId, annotationCloseId) {
      $("body").delegate(annotationCloseId, "click", function () {
        $(annotationId).popover('hide');
      })
    })(annotationId, annotationCloseId)
  }

  //register the edit annotation callback
  this._registerEditAnnotationCallback();
}; 

/*
  Creates reference arrows between annotations
*/
kat.Display.prototype.createReferenceArrow = function (currentAnnotation, annotationId) {
  var self = this;

  //get the curren
  var baseAnnotationSpan = jQuery("#" + currentAnnotation.getIdBase());
  var pointingAnnotationSpan = jQuery("#" + self._annotationRegistry.getAnnotation(currentAnnotation.getExtraData().referenceId).getIdBase());
  
  //create the new arrow
  var arrow = new kat.display.ArrowConnector(baseAnnotationSpan, pointingAnnotationSpan);

  //hide and destroy the arrow when hiding / showing the annotation 
  $("#" + annotationId)
  .on('shown', function () {
    arrow.render();
  })
  .on('hide', function () {
    arrow.destroy();
  });
};

/*
  Encapsulates the behavior of the Display by adding classes to annotated spans and creating display handlers.
*/
kat.Display.prototype.run = function () {
  this.addSpecialClassToSpans();
  this.createTooltipDisplays();
}; 

/*
  Resets the display object. 
*/
kat.Display.prototype.reset = function () {

  //remove the popovers
  for (var i = 0; i < this.$annotations.length; i++) {
    $("#" + this.$annotations[i].id).popover('destroy');
  }

  //remove the special class span
  $("." + this.getSpecialClass()).each(function () {
    $(this).children().unwrap();
  }); 

}; 

/*
  Updates the display
*/
kat.Display.prototype.update = function () {

  //reset and rerun
  this.reset();
  this.run();

}; 

/*
  register Edit Annotation Callback
*/
kat.Display.prototype._registerEditAnnotationCallback =  function () {
  var self = this;

  $("body")
  .off("click.kat", ".edit-annotation")
  .on("click.kat", ".edit-annotation", function () {
    //get the id
    var id = $(this).attr('id').split('edit-annotation-');
    id = id[1];

    //hide the popup
    $("#" + id).popover('hide');

    //edit all the stuff
    var annotation = self._annotationRegistry.getAnnotation(id);
    var concept = self._conceptRegistry.lookupConcept(annotation["$concept"]);
    var annotationEditForm = new kat.display.AnnotationEditForm(annotation, concept, self._annotationRegistry, self._conceptRegistry, self);
    annotationEditForm.run();
  });
}; 