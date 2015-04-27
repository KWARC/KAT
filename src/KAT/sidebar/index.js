/**
* Namespace for the sidebar
* @namespace
* @alias KAT.sidebar
*/
KAT.sidebar = {};

/**
* Set up and insert Annotation Toolkit sidemenu
*
* @function
* @static
* @name init
* @memberof KAT.sidebar
*/
KAT.sidebar.init = function(){

  // GENERAL COMMENT: Use jQuery's chaining functionality more.
  // I added it whenever possible
  // TODO: Finish documentation of function
  // TODO: Remove all the TODO comments once they have been dealt with.

  // TODO: Check HERE if the sidebar was already intialised
  // and if so, just return.


  //TODO: (@Sourabh) Try and move global state into the KAT.sidebar namespace directly.
  var hideWidth = -230; //width that will be hidden
  var winHeight = jQuery(window).height();

  //create collapsible sidemenu & define properties
  var collapsibleMenu = jQuery('<div>')
  .addClass("collapsible")
  .append(
    $("<ul>").addClass("KATMenuItems")
  )
  .css({
    'position':'fixed',
    'right': hideWidth,
    'height': winHeight-10
  }).prependTo("body");

  // create button to toggle collapse and resurection of sidemenu and define properties
  // TODO (@Sourabh): Make the button a bit bigger so that we can click on the
  // entire side of the window.

  var collapsibleToggle = $("<button>")
  .text("«")
  .css({'height': winHeight-10})
  .click(function(){

    if (KAT.sidebar.collapsibleStatus){

      //we are now hidden
      KAT.sidebar.collapsibleStatus = false;

      jQuery(this)
      .text("«") // Change text of button.
      .parent().animate({right: hideWidth}, 300 );

      jQuery("body").css({'width': jQuery(window).width()-50}); //HACK! Remove this please, as this interferes with global styling.
    } else {

      //we are now visible
      KAT.sidebar.collapsibleStatus = true;

      jQuery(this)
      .text("»")  // Change text of button.
      .parent().animate({right: "0"}, 300 );

      jQuery("body").css({'width': jQuery(window).width()-260}); //HACK! Remove this please, as this interferes with global styling.
    }
  }).prependTo(collapsibleMenu); //adapted from init function below

  //HACK! Remove this please, as this interferes with global styling.
  jQuery("body").css({'width': jQuery(window).width()-50});

  //define changes to sidemenu when page is resized
  // this seems hacky, try to make it all relative with global CSS
  jQuery( window ).resize(function() {
    winHeight = jQuery(window).height();

    collapsibleMenu.css({
      'position':'fixed',
      'right': hideWidth,
      'height': winHeight-10
    });

    collapsibleToggle.css({
      'height': winHeight-10
    });

    //HACK! Remove this please, as this interferes with global styling.
    jQuery("body").css({'width': jQuery(window).width()-50});
  });
};

/**
* Set up and insert Annotation Toolkit sidemenu
*
* @param {JOBAD.modules.loadedModule} env - JOBAD loaded Module instance
* @param {KAT.gui.selection} selection - The selection to create an annotation for.
* @param {KAT.model.Concept} concept - Concept to generate annotation for.
* @function
* @static
* @name genNewAnnotationForm
* @memberof KAT.sidebar
*/
KAT.sidebar.genNewAnnotationForm = function(env, selection, concept){
  // TODO complete documentation comment above.
  // TODO: Work on a stored annotation, so values can be pre-filled.


  // create a new element to add to the sidebar.
  // TODO: Have the .KATMenuItems in a variable from the init function.
  var newAnnotation = $("<li>").addClass("currentForm").append(
    "<b> Enter Annotation Details</b><br>"
  ).appendTo(".KATMenuItems");


  var inputFields = jQuery.map(concept.fields, function(current){
    // a new input element we will create
    var newField;

    // The current validation.
    var options = current.validation;

    // grab the value of the field and add it to the sidebar
    var value = current.value;
    newAnnotation.append(jQuery("<span>").text(value));

    //TODO: Implement repeat of fields.

    // for text fields, we just have a text field.
    // TODO: Implement validation of text fields.
    if(current.type === KAT.model.Field.types.text){
      newField =
      jQuery("<input type='text'>")
      .appendTo(newAnnotation);
    }

    // for select fields, create a dropdown
    // TODO: Possibly use a styled dropbown from Bootstrap
    if(current.type === KAT.model.Field.types.select){
      // Create a select element.
      newField = jQuery("<select>").appendTo(newAnnotation);

      // and add options to it.
      $.each(options, function(j, opt){
        jQuery("<option>")
        .text(opt.value)
        .val(j)
        .appendTo(newField);
      });
    }

    // for a reference list possible annotations.
    if(current.type === KAT.model.Field.types.reference){

      // create a new field.
      newField = jQuery("<select>").appendTo(newAnnotation);

      // Find all the allowed concepts
      // @Sourabh: I updated env.store.filterByConcept for this to work properly.
      var allowedAnnotations = env.store.filterByConcept.call(env.store, allowedAnnotations);

      // for eacjh
      jQuery.each(allowedAnnotations, function(index, annot){

        $("<option>")
        .text(annot.uuid)
        .value(annot.uuid)
        .appendTo(newField);

      });
    }

    return newField;
  });

  // Create a button
  //TODO: Make this more general.
  // Also do not use type='submit' here, as clicking that would reload page
  // if you are in a <form> tag, unless you cancel explititly
  $("<input type='button'>")
  .val("Add")
  .appendTo(newAnnotation)
  .click(function(){

    // The result JSON
    var valuesJSON = {};

    // go over the input fields and gather the values.
    $.each(concept.fields, function(i, current){

      //also get the current input field.
      var field = inputFields[i];

      // store the value in the valueJSON as an array
      // TODO: Handle multiple fields here.
      if(concept.type == KAT.model.Field.types.reference){
        // for references, find the actual UUID.
        valuesJSON[current.value] = [env.store.find(field.val())];
      } else if(concept.type == KAT.model.Field.types.reference){
        // for option, store the selected option.
        valuesJSON[current.value] = [current.validation[field.val()]];
      } else {
        // for text, just store the text.
        valuesJSON[current.value] = [field.val()];
      }
    });

    // remove the entire form
    newAnnotation.remove();

    // TODO: Have a callback here instead of hard-coding what happens.
    var theannotation = env.store.addNew(selection, concept, valuesJSON);
    theannotation.draw();
  });
};

/**
* Is the sidebar extended?
*
* @type {boolean}
* @name KAT.sidebar.collapsibleStatus
*/
KAT.sidebar.collapsibleStatus = false;
