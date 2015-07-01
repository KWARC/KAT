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

  //mode of the sidebar.
  var mode;

  //which is either Reading or Annotation.
  if (KAT.sidebar.annotationMode){ mode = "Reading"; } else { mode = "Annotation"; }

  //get the height of the window.
  var winHeight = jQuery(window).height();

  //create a button to toggle annotations
  KAT.sidebar.modeToggleButton = $("<button>")
    .text("Enable " +mode+ " Mode")
    .addClass("annotationToggle")
    .addClass("btn btn-default").BS()
    .click(function(){
      KAT.sidebar.toggleAnnotationMode();
    });

  //create collapsible sidebar
  var collapsibleMenu = jQuery('<div>').addClass("collapsible")

  .append(
    //add a heading
    $("<div>").addClass("KATTitle").html("<h3>KWARC Annotation Tool</h3>"),

    // and a lot of buttons
    $("<div>").addClass("KATSidebarButtons")
    .append(
      //to toggle the mode
      KAT.sidebar.modeToggleButton,
      "<br/>",

      //to import annotations
      $("<button>")
        .text("Import Annotations")
        .addClass("helpButton")
        .addClass("btn btn-default")
        .click(function(){
          //TODO: Toggle Import annotations
          alert("TODO: Import annotations binding!");
        }),
      "<br/>",

      // to export annotations
      $("<button>")
        .text("Export Annotations")
        .addClass("helpButton")
        .addClass("btn btn-default")
        .click(function(){
          //TODO: Toggle Export annotations
          alert("TODO: Export annotations binding!");
        }),
      "<br/>",

      //to help
      $("<button>")
        .append(
          $("<span>").addClass("glyphicon glyphicon-info-sign")
          .text("Help")
        )
        .addClass("helpButton")
        .addClass("btn btn-default")
        .click(function(){
          //TODO: Toggle Help
          alert("TODO: Help!");
        })
    ),
    $("<ul>").addClass("KATMenuItems")
  )
  .css({
    'position':'fixed',
    'right': KAT.sidebar.hideWidth,
    'height': winHeight-10
  }).prependTo("body");

  // create button to toggle collapse and resurection of sidemenu and define properties
  var collapsibleToggle = $("<button>")
  .text("«")
  .addClass("collapseToggle")
  .css({'height': winHeight-10})
  .click(KAT.sidebar.toggleSidebar).prependTo(collapsibleMenu); //adapted from init function below

  //Make sure to shwo the sidebar
  KAT.sidebar.showSidebar();

  // define changes to sidemenu when page is resized
  // this seems hacky, try to make it all relative with global CSS
  jQuery( window ).resize(function() {
    winHeight = jQuery(window).height();

    collapsibleMenu.css({
      'position':'fixed',
      'right': KAT.sidebar.hideWidth,
      'height': winHeight-10
    });

    collapsibleToggle.css({
      'height': winHeight-10
    });
  });
};

/**
* Shows the sidebar.
*
* @function
* @static
* @name hideSidebar
* @memberof KAT.sidebar
*/
KAT.sidebar.showSidebar = function(){
    KAT.sidebar.extended = true;

    jQuery(".collapseToggle")
    .text("»")
    .parent().animate({right: "0"}, KAT.sidebar.animateLength );
};

/**
* Hides the sidebar.
*
* @function
* @static
* @name hideSidebar
* @memberof KAT.sidebar
*/
KAT.sidebar.hideSidebar = function(){
    KAT.sidebar.extended = false;

    jQuery(".collapseToggle")
    .text("«") // Change text of button.
    .parent().animate({right: KAT.sidebar.hideWidth}, KAT.sidebar.animateLength);
};

/**
* Toggles the state of the sidebar.
*
* @function
* @static
* @name toggleSidebar
* @memberof KAT.sidebar
*/
KAT.sidebar.toggleSidebar = function(){
    if (KAT.sidebar.extended){
      //we are now hidden
      KAT.sidebar.hideSidebar();
    } else {
      //we are now visible
      KAT.sidebar.showSidebar();
    }
  };

/**
* Toggles the annotation mode of KAT.
*
* @function
* @static
* @name toggleAnnotationMode
* @memberof KAT.sidebar
*/
KAT.sidebar.toggleAnnotationMode = function(){
  KAT.sidebar.annotationMode = !KAT.sidebar.annotationMode;

  var mode;
  if (KAT.sidebar.annotationMode){
    mode = "Reading";
    KAT.sidebar.showSidebar();
  } else {
    mode = "Annotation";
  }
  KAT.sidebar.modeToggleButton.text("Enable " +mode+ " Mode");
};

/**
* Set up and insert Annotation Toolkit sidemenu
*
* @param {JOBAD.modules.loadedModule} env - JOBAD loaded Module instance
* @param {function} callback - Callback that is called once the form is closed. Should return an annotation.
* @param {KAT.gui.selection} selection - The selection to create an annotation for.
* @param {KAT.model.Concept} concept - Concept to generate annotation for.
* @function
* @static
* @name genNewAnnotationForm
* @memberof KAT.sidebar
*/
KAT.sidebar.generateAnnotationForm = function(env, callback, annotation, selection, concept){
  // TODO complete documentation comment above.
  // TODO: Work on a stored annotation, so values can be pre-filled.

  // make sure the sidebar is extended.
  if(!KAT.sidebar.extended){
    KAT.sidebar.toggleSidebar();
  }


  var values;
  var task;

  // get the task name based on if the annotation is defined or not.
  if (typeof annotation === "undefined"){
    task = "Enter";
  } else {
    task = "Edit";
    values = annotation.values;
  }

  // create a new element to add to the sidebar.
  // TODO: Have the .KATMenuItems in a variable from the init function.
  // TODO: XSS vulnerable.
  var newAnnotation = $("<li>").addClass("currentForm").append(
    "<b> "+task+" Annotation Details</b><br>"
  ).appendTo(".KATMenuItems");

  var inputFields = jQuery.map(concept.fields, function(current){

    // a new input element we will create
    var newField;

    // The current validation.
    var options = current.validation;

    // grab the value of the field and add it to the sidebar
    var value = current.value;
    newAnnotation.append("<br>").append(jQuery("<label>").text(value));

    var prevValue;

    if(current.type === KAT.model.Field.types.text){

      newField = createTextfield(newAnnotation, values, value, current);

    } else if(current.type === KAT.model.Field.types.select){

      newField = createDropdown(newAnnotation, options);

    } if(current.type === KAT.model.Field.types.reference){ // for a reference list possible annotations.

      newField = createReferenceSpinner(newAnnotation, env, annot, values, value);

    }

    return newField;
  });

  // Create a button
  var saveButton = makeButton(newAnnotation, "Save",function(){

    // The result JSON
    var valuesJSON = {};

    // go over the input fields and gather the values.
    $.each(concept.fields, function(i, field){

      //also get the current input field.
      var infield = inputFields[i];

      // store the value in the valueJSON as an array
      // TODO: Handle multiple fields here.
      if(field.type == KAT.model.Field.types.reference){
        // for references, find the actual UUID.
        valuesJSON[field.value] = [env.store.find(infield.val())];
      } else if(field.type == KAT.model.Field.types.select){
        // for option, store the selected option.
        valuesJSON[field.value] = [field.validation[infield.val()]];
      } else {
        // for text, just store the text.
        valuesJSON[field.value] = [infield.val()];
      }
    });

    // remove the entire form
    newAnnotation.remove();

    // callback
    var theannotation = callback(selection, concept, valuesJSON, annotation);
    theannotation.draw();
  }).addClass("save").attr("disabled", "disabled");


  //TODO: Make this more general.
  // Also do not use type='submit' here, as clicking that would reload page
  // if you are in a <form> tag, unless you cancel explititly
  makeButton(newAnnotation, "Cancel", function(){
        newAnnotation.remove(); // remove the entire form
      });

  function makeButton(parent, text, func) {

    return $("<button type='button'>")
      .text(text)
      .addClass("formButton")
      .appendTo(newAnnotation)
      .click(func);
  }

  function createTextfield(parent, values, value, current) {

    var newField =
    jQuery("<input type='text'>")
      .addClass("tfield")
      .addClass("form-control")
      .appendTo(parent)
      .keyup(function(){

        var RegExpression = current.validation;

        $(".currentForm").removeClass("has-success has-error");
        saveButton.removeAttr("disabled");

        if(RegExpression.test(newField.val())) {
          $(".currentForm").addClass("has-success");
        } else {
          $(".currentForm").addClass("has-error");
          saveButton.attr("disabled", "disabled");
        }
      });

    if (typeof annotation !== "undefined"){
      var prevValue = values[value];
      newField.val(prevValue[0]);
    }
    window.setTimeout(function(){
      newField.keyup();
    }, 100);
    return newField;

  }

  // TODO: Possibly use a styled dropbown from Bootstrap
  function createDropdown(parent, options) {

    // Create a select element.
    var newField = jQuery("<select>")
    .addClass("tfield")
    .appendTo(parent);

    // add all the values
    jQuery.each(options, function(j, opt){
      jQuery("<option>")
      .text(opt.value)
      .val(j)
      .appendTo(newField);
    });

    // TODO: Implement multiple values.
    // if applicable, find the previous value
    if (typeof annotation !== "undefined"){
      var prevValue = values[value];

      for(var i=0;i<options.length;i++){
        if(options[i].value === prevValue[0].value){
          newField.val(i);
        }
      }
    }

    return newField;

  }

  function createReferenceSpinner(parent, env, annot, values, value) {

    // create a new field.
    var newField = jQuery("<select>")
    .addClass("tfield")
    .appendTo(parent);

    // Find all the allowed concepts
    var allowedAnnotations = env.store.filterByConcept.apply(env.store, options);

    // for each
    jQuery.each(allowedAnnotations, function(index, annot){
      jQuery("<option>")
      .text(annot.uuid)
      .val(annot.uuid)
      .appendTo(newField);
    });

    if(values){
      prevValue = values[value];
      newField.val(prevValue[0].uuid);
    }
  }
};

/**
* Stores if the sidebar is extended.
* Should be read-only.
*
* @type {boolean}
* @name KAT.sidebar.extended
*/
KAT.sidebar.extended = false;

/**
* Stores if KAT is in annotation Mode.
* Should be readonly.
*
* @type {boolean}
* @name KAT.sidebar.annotationMode
*/
KAT.sidebar.annotationMode = false;

/**
* Width of the sidebar that will be hidden
*
* @type {integer}
* @default -230
* @name KAT.sidebar.hideWidth
*/
KAT.sidebar.hideWidth = -230;

/**
* Duration of animation
*
* @type {integer}
* @default 100
* @name KAT.sidebar.animateLength
*/
KAT.sidebar.animateLength = 100;

/**
* Contains a reference to the mode toggle button in the sidebar.
*
* @type {jQuery}
* @name KAT.sidebar.modeToggleButton
*/
KAT.sidebar.modeToggleButton = undefined;
