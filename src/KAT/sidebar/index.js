/**
* Namespace for the sidebar
* @namespace
* @alias KAT.sidebar
*/
KAT.sidebar = {};

/**
* Set up and insert Annotation Toolkit sidemenu
*
* @param {KAT.Storage.Store} store - Annotation Store to bind to.
*
* @function
* @static
* @name init
* @memberof KAT.sidebar
*/
KAT.sidebar.init = function(store){

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
      "<br/>",

      //to import annotations
      $("<button>")
      .text("Import Annotations")
      .addClass("helpButton")
      .addClass("btn btn-default")
      .click(function(){
        store.showImportDialog();
      }),
      "<br/>",
      "<br/>",

      // to export annotations
      $("<button>")
      .text("Export Annotations")
      .addClass("helpButton")
      .addClass("btn btn-default")
      .click(function(){
        store.showExportDialog();
      }),
      /*
      "<br/>",
      "<br/>",

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
      }),
      */
      "<br/>",
      "<br/>",
      "<br/>"
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
  var newAnnotation = $("<li>").append(
    "<h4> "+concept.name+" - "+task+" Annotation Details</h4>"
  ).appendTo(".KATMenuItems");

  // a list of validation functions to run.
  var validations = [];

  // only if all of them return true,
  // we enable the save button.
  var revalidate = function(){
    var result = true;

    // loop over the validations.
    jQuery.each(validations, function(i, validate){
      result = result && validate();
    });

    // if all of the validations are OK,
    // we can unlock the 'save' button
    if(result){
      saveButton.removeAttr("disabled");
    } else {
      // else we need to disable it.
      saveButton.attr("disabled", "disabled");
    }

    return result;
  };

  // add a new form
  var newForm = $("<form>").addClass("form-inline").appendTo(newAnnotation).on("submit", function(e){

    // prevent form submission
    e.preventDefault();

    // click the save button
    saveButton.click();

    return false;
  });

  // map over the input fields
  var inputFieldGroups = jQuery.map(concept.fields, function(current){

    // create a new group
    // to append to the <form>
    var fieldGroup = $("<div>").appendTo(newForm);


    // the new field to return for now.
    var newField;

    // TODO: for each of the values do this
    jQuery.map([0], function(i){

      // create a wrapper element.
      var wrapper = $("<div>").addClass("form-group").appendTo(fieldGroup);

      // create an id for the form element.
      var id =  "KAT_form_"+(new Date().getTime())+"_"+(Math.floor(Math.random()*10000));

      // grab the name of the field.
      var value = current.value;

      // create a label
      // and add it to the form.
      $("<label>").addClass("control-label").attr("for", id).text(value).appendTo(wrapper);

      // add some spacing.
      wrapper.append("&nbsp;");


      // differentiate between the type of field
      if(current.type === KAT.model.Field.types.text){
        (function(){

          var inputGroup = $("<div>")
            .addClass("input-group")
            .appendTo(wrapper);

          // create a new text field
          newField = $("<input type='text'>")
          .attr("id", id)
          .addClass("tfield")
          .addClass("form-control")

          // append it to the wrapper
          .appendTo(inputGroup)

          // and revalidate upon changing something.
          .keyup(function(){
            revalidate();
          });


          // parse the RegEx we want to valiate against.
          var RegExpression = current.validation;

          //info addon to textfield with expected RegExp
          var addon = $("<div>")
            .addClass("input-group-addon")
            .appendTo(inputGroup);

          var info = "<p>"+current.documentation + "</p><p>" +
            "You are expected to match the following Regular Expression: </br>" +RegExpression +"</p>";

          var popover = $("<a href='#'>")
          .attr("data-container", "body")
          .attr("data-toggle", "popover")
          .attr("data-placement", "top")
          .attr("title","Information")
          .attr("data-content", info)
          .text("?")
          .appendTo(addon)
          .popover({html:true});


          // add our validation function.
          validations.push(function(){

            // remove the wrapper class
            wrapper.removeClass("has-success has-error");

            // if we pass validation
            if(RegExpression.test(newField.val())) {

              // add a success class
              wrapper.addClass("has-success");
              return true;
            } else {

              // else add an error class
              wrapper.addClass("has-error");
              return false;
            }
          });

          // set the previous value
          // of the annotation
          // if available.

          if (typeof annotation !== "undefined"){
            var prevValue = values[value];
            newField.val(prevValue[0]);
          }
        })();

      } else if(current.type === KAT.model.Field.types.select){
        (function() {

          // create a new select field
          newField = jQuery("<select>")
          .attr("id", id)
          .addClass("form-control")
          .appendTo(wrapper);

          // add all the values
          jQuery.each(current.validation, function(j, opt){
            jQuery("<option>")
            .text(opt.value)
            .val(j)
            .appendTo(newField);
          });


          //TODO: Do proper validation here
          // and automatically add new annotations if they become available.
          validations.push(function(){
            wrapper.addClass("has-success");
            return true;
          });

          // if we have a previous value
          // set that up properly
          if (typeof annotation !== "undefined"){
            var prevValue = values[value];

            for(var i=0;i<current.validation.length;i++){
              if(current.validation[i].value === prevValue[0].value){
                newField.val(i);
              }
            }
          }
        })();
      } if(current.type === KAT.model.Field.types.reference){ // for a reference list possible annotations.

        (function() {

          // create a new select
          newField = jQuery("<select>")
          .attr("id", id)
          .addClass("form-control")
          .appendTo(wrapper);

          // Find all the allowed concepts
          var allowedAnnotations = env.store.filterByConcept.apply(env.store, current.validation);

          // filter the allowed annotations
          jQuery.each(allowedAnnotations, function(index, annot){
            jQuery("<option>")
            .text(annot.uuid)
            .val(annot.uuid)
            .appendTo(newField);
          });

          // if applicable, load previous values.
          if(values){
            var prevValue = values[value];
            newField.val(prevValue[0].uuid);
          }
        })();
      }
    });

    return newField;
  });

  // add a bit of space
  newForm.append("<br />");

  // create a submit control group for the form
  var submitGroup = $("<div>").addClass("btn-group").appendTo(newForm);

  // create a save button
  // so we can submit the form.
  var saveButton = $("<button type='submit'>").addClass("btn btn-primary").text("Save").click(function(e){

    // prevent form submission
    e.preventDefault();

    // if we can not validate the form,
    // just return.
    if(!revalidate()){
      return;
    }

    // The result JSON
    // TODO: Make this smarter.
    var valuesJSON = {};

    // go over the input fields and gather the values.
    $.each(concept.fields, function(i, field){

      //also get the current input field.
      var infield = inputFieldGroups[i];

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

    return false;
  }).appendTo(submitGroup);

  // create a cancel button
  // to cancel editing when needed
  var cancelButton = $("<button type='button'>").addClass("btn btn-danger").text("Cancel").click(function(){
    newAnnotation.remove(); // remove the entire form
  }).appendTo(submitGroup);

  // and re-validate the form
  revalidate();
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
* @default -480
* @name KAT.sidebar.hideWidth
*/
KAT.sidebar.hideWidth = -480;

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

/**
* Contains a reference to the mode toggle button in the sidebar.
*
* @type {jQuery}
* @name KAT.sidebar.modeToggleButton
*/
KAT.sidebar.modeToggleButton = undefined;
