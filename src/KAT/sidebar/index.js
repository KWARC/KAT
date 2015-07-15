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

  //Make sure to show the sidebar
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

  //close all popovers
  $('.popover').popover('destroy').remove();

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
  var newAnnotation = $("<li>").append("<h4> "+concept.name+" - "+task+" Annotation Details</h4>")
    .appendTo(".KATMenuItems");

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
      var wrapper = $("<div id='test'>")
        .addClass("form-group")
        .appendTo(fieldGroup)
        .css({'overflow':'visible'});

      // create an id for the form element.
      var id =  "KAT_form_"+(new Date().getTime())+"_"+(Math.floor(Math.random()*10000));

      // grab the name of the field.
      var value = current.value;

      // create a label
      // and add it to the form.
      $("<label>").addClass("control-label").attr("for", id).text(value).appendTo(wrapper);

      // add some spacing.
      wrapper.append("&nbsp;");

      //variables for field repetition
      var container = $("<div>")
          .appendTo(wrapper);

      var selectGroup;
      var inputGroup;

      var atleast = current.minimum || 1;
      var atmost = current.maximum || atleast;

      var numOfReferences = 0;

      function makePlusClickHandler(event){
            event.preventDefault();  //prevents window from being closed
            createSelect(true);
      }

      function makeTextPlusClickHandler(event){
            event.preventDefault();  //prevents window from being closed
            createTextField(true);
      }

      function makeMinusClickHandler(event){

        var buttonGroup = $(event.target).parent();

        buttonGroup.prev("br").remove(); //remove leading <br>
        buttonGroup.remove(); //remove buttonGroup
        event.preventDefault();

        numOfReferences--;

        //enable plus buttons again
        $.each($(".plusButton."+current.name), function(index, button){
          $(button).removeAttr("disabled");
        });

      }

      function makeTextMinusClickHandler(event){

        var buttonGroup = $(event.target).parent().parent();

        buttonGroup.prev("br").remove(); //remove leading <br>
        buttonGroup.remove(); //remove buttonGroup
        event.preventDefault();

        numOfReferences--;

        //enable plus buttons again
        $.each($(".plusButton."+current.name), function(index, button){
          $(button).removeAttr("disabled");
        });

      }

      function createSelect(addMinusButtonBool) {

        //NOTE: you need functions here because you can't make them within the loop

        function insertAllowedAnnotations(index, annot){
          jQuery("<option>")
          .text(annot.uuid)
          .val(annot.uuid)
          .appendTo(newField);
        }


        var prevValue;

        if(numOfReferences < atmost) {
          addMinusButtonBool = addMinusButtonBool || false;

          selectGroup = $("<div class='btn-group' role='group'>")
            .appendTo(container);

          // create a new select
          newField = jQuery("<select>")
          .attr("id", id)
          .addClass("form-control")
          .appendTo(selectGroup);

          if(current.type === KAT.model.Field.types.select) {
            // add all the values
            jQuery.each(current.validation, function(j, opt){
              jQuery("<option>")
              .text(opt.value)
              .val(j)
              .appendTo(newField);
            });

          // if we have a previous value
          // set that up properly
          if (typeof annotation !== "undefined"){
            prevValue = values[value];

            for(var i=0;i<current.validation.length;i++){
              if(current.validation[i].value === prevValue[0].value){
                newField.val(i);
              }
            }
          }

          } else { //reference

            //Find all the allowed concepts
            var allowedAnnotations = env.store.filterByConcept.apply(env.store, current.validation);

            // filter the allowed annotations
            jQuery.each(allowedAnnotations, insertAllowedAnnotations);

            // if applicable, load previous values.
            if(values){
              prevValue = values[value];
              newField.val(prevValue[0].uuid);
            }
          }

          $("<br>").appendTo(container);

          if(addMinusButtonBool) {
            var minusButton = $("<button class='btn btn-default minusButton " + current.name + "' >")
              .on("click", makeMinusClickHandler)
              .text("-")
              .appendTo(selectGroup);
          }
          numOfReferences++;

          //disable plus buttons
          if(numOfReferences == atmost) {
            $.each($(".plusButton."+current.name), function(index, button){
              $(button).attr("disabled", "true");
            });
          }

        }
      }

      function createTextField(addMinusButtonBool) {

        if(numOfReferences < atmost) {
          addMinusButtonBool = addMinusButtonBool || false;

          inputGroup = $("<div>") //equivalent to select group / change name??
            .addClass("input-group")
            .appendTo(container);

          // create a new text field
          newField = $("<input type='text'>")
          .attr("id", id)
          .addClass("tfield")
          .addClass("form-control")

          // append it to the inputGroup
          .appendTo(inputGroup)

          // and revalidate upon changing something.
          .keyup(function(){
            revalidate();
          });

          // parse the RegEx we want to valiate against.
          var RegExpression = current.validation;

          //info addon to textfield with expected RegExp
          var addon = $("<span>")
            .addClass("input-group-btn")
            .appendTo(inputGroup);

          var info = "<p>"+current.documentation + "</p><p>" +
            "You are expected to match the following Regular Expression: </br>" +RegExpression +"</p>";

          var popover = $("<button type='button' class='btn btn-default'>")
          .attr("data-container", "#test")
          .attr("title","Information")
          .attr("data-content", info)
          .text("?")
          .popover({html:true, toggle:"popover", placement:"top"})
          .appendTo(addon);

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

          $("<br>").appendTo(container);

          if(addMinusButtonBool) {
            var span = $("<span class='input-group-btn'>")
                .prependTo(inputGroup);

            var minusButton = $("<button class='btn btn-default minusButton " + current.name + "' >")
              .on("click", makeTextMinusClickHandler)
              .text("-")
              .appendTo(span);
          }
          numOfReferences++;

          //disable plus buttons
          if(numOfReferences == atmost) {
            $.each($(".plusButton."+current.name), function(index, button){
              $(button).attr("disabled", "true");
            });
          }

        }

      }

      // differentiate between the type of field
      if(current.type === KAT.model.Field.types.text){
        (function(){

          while(numOfReferences < atleast) {

            createTextField();

            //add plus buttons
            if(i < atleast && atmost > 1) {
              var span = $("<span class='input-group-btn'>")
                .prependTo(inputGroup);

              var plusButton = $("<button class='btn btn-default plusButton " + current.name + "' >")
                .on("click", makeTextPlusClickHandler)
                .text("+")
                .appendTo(span);
            }

          }

          // set the previous value
          // of the annotation
          // if available.

          // if (typeof annotation !== "undefined"){
          //   var prevValue = values[value];
          //   newField.val(prevValue[0]);
          // }
        })();

      } else if(current.type === KAT.model.Field.types.select){
        (function() {

          while(numOfReferences < atleast) {

            createSelect();

            //add plus buttons
            if(i < atleast && atmost > 1) {
              var plusButton = $("<button class='btn btn-default plusButton " + current.name + "' >")
                .on("click", makePlusClickHandler)
                .text("+")
                .appendTo(selectGroup);
            }

          }

          //TODO: Do proper validation here
          // and automatically add new annotations if they become available.
          validations.push(function(){
            wrapper.addClass("has-success");
            return true;
          });

         
        })();
      } if(current.type === KAT.model.Field.types.reference){ // for a reference list possible annotations.

        (function() {

          while(numOfReferences < atleast) {

            createSelect();

            //add plus buttons
            if(i < atleast && atmost > 1) {
              var plusButton = $("<button class='btn btn-default plusButton " + current.name + "' >")
                .on("click", makePlusClickHandler)
                .text("+")
                .appendTo(selectGroup);
            }

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

    //close all popovers
    $('.popover').popover('destroy').remove();

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
    //close all popovers
    $('.popover').popover('destroy').remove();

    // remove the entire form
    newAnnotation.remove();
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
