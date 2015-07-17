/**
* generates a new reference field in the annotation form.
*
* @param {KAT.model.Field} current - Field to generate.
* @param {KAT.modules.loadModule} env - Current KAT module
* @param {jQuery} wrapper - Wrapper element to append the text field to.
* @param {KAT.Store.annotation} annotation - Annotation currently being edited (if available).
* @param {function[]} validations - Validation function array
* @param {function} revalidate - Function to call when revalidating.
* @function
* @static
* @name generateAnnotationReferenceField
* @memberof KAT.sidebar
*/
KAT.sidebar.generateAnnotationReferenceField = function(current, env, wrapper, annotation, validations, revalidate){

  //read minimum and maximum field repetitions
  var atleast = current.minimum || 1;
  var atmost = current.maximum || atleast;
  var numFields = 0; // current number of fields

  // generate a container to contain all the text fields.
  var container = $("<div>")
  .appendTo(wrapper);

  validations.push(function(){
    // TODO: validate properly.
    // for now everything is just fine.
    wrapper.addClass("has-success");
    return true;
  });

  // a group for selects
  var selectGroup;

  function createSelect(addMinusButtonBool) {

    // we want to add another field
    // but only if we do not have the max already.
    if(numFields < atmost) {

      // do we want to add a minus button?
      addMinusButtonBool = addMinusButtonBool || false;

      // create a new group to append these controls to
      selectGroup = $("<div class='btn-group' role='group'>")
      .appendTo(container);

      // create a new select to add the options to
      // TODO: Make it bootstrap
      newField = jQuery("<select>")
      .addClass("form-control")
      .appendTo(selectGroup);

      //Find all the allowed concepts
      var allowedAnnotations = env.store.filterByConcept.apply(env.store, current.validation);

      // filter the allowed annotations
      jQuery.each(allowedAnnotations, function (i, annot){
        jQuery("<option>")
        .text(annot.uuid)
        .val(annot.uuid)
        .appendTo(newField);
      });

      // and add some spacing.
      $("<br>").appendTo(container);

      // do we have to add a minus button?
      if(addMinusButtonBool) {

        // create a minus button and register a handler for it.
        var minusButton = $("<button class='btn btn-default minusButton " + current.name + "' >")
        .on("click", function(event){ // called to remove field
          event.preventDefault();

          var group = $(event.target).parent();

          // remove the br and input group
          group.prev("br").remove();
          group.remove();

          // show the plusButton from above
          wrapper.find(".plusButton."+current.name).removeAttr("disabled");

          // update the field counter
          numFields--;

          // and revalidate
          revalidate();
        })
        .text("-")
        .prependTo(selectGroup);
      }

      // and increase the counter for the fields.
      numFields++;

      // disable the plus button if it makes sense.
      if(numFields == atmost) {
        wrapper.find(".plusButton."+current.name).attr("disabled", "true");
      }

      // and revalidate
      revalidate();
    }
  }

  // create the initial fields
  // until we have the minimum number of fields
  while(numFields < atleast) {
    createSelect(); // create a select field
  }

  // add a plus button to the first field
  // if it makes sense to add it.
  if(numFields < atmost) {
    $("<button class='btn btn-default plusButton " + current.name + "' >")
    .on("click", function(e){
      e.preventDefault();
      createSelect(true);
    })
    .text("+")
    .prependTo(selectGroup);

  }

  // set the previous value for the form if available.
  if (typeof annotation !== "undefined"){

    // read the previous value
    var prevValue = annotation.values[current.value].slice();
    var count = 0;
    var val, fields;

    // keep adding each value that we have stored.
    while(prevValue.length !== 0){

      //grab the value from the beginning
      val = prevValue.shift();

      // and increase our counter
      count++;

      // if we do not yet have a
      if(container.find('select').length < count){
        createTextField(true);
      }

      // and the set the right value for the select field
      container.find('select').eq(count - 1).val(val.uuid);
    }
  }
};


/**
* generates a new select field in the annotation form.
*
* @param {KAT.model.Field} current - Field to generate.
* @param {jQuery} wrapper - Wrapper element to append the text field to.
* @param {KAT.Store.annotation} annotation - Annotation currently being edited (if available).
* @param {function[]} validations - Validation function array
* @param {function} revalidate - Function to call when revalidating.
* @function
* @static
* @name generateAnnotationSelectField
* @memberof KAT.sidebar
*/
KAT.sidebar.generateAnnotationSelectField = function(current, wrapper, annotation, validations, revalidate){

  //read minimum and maximum field repetitions
  var atleast = current.minimum || 1;
  var atmost = current.maximum || atleast;
  var numFields = 0; // current number of fields

  // generate a container to contain all the text fields.
  var container = $("<div>")
  .appendTo(wrapper);

  validations.push(function(){
    // we do not need to validate.
    // because the user will have to select one of the options anyways.
    wrapper.addClass("has-success");
    return true;
  });

  // a group for selects
  var selectGroup;

  function createSelect(addMinusButtonBool) {

    // we want to add another field
    // but only if we do not have the max already.
    if(numFields < atmost) {

      // do we want to add a minus button?
      addMinusButtonBool = addMinusButtonBool || false;

      // create a new group to append these controls to
      selectGroup = $("<div class='btn-group' role='group'>")
      .appendTo(container);

      // create a new select to add the options to
      // TODO: Make it bootstrap
      newField = jQuery("<select>")
      .addClass("form-control")
      .appendTo(selectGroup);

      // set up all the different options correctly.
      jQuery.each(current.validation, function(j, opt){
        jQuery("<option>")
        .text(opt.value)
        .val(j)
        .appendTo(newField);
      });

      // and add some spacing.
      $("<br>").appendTo(container);

      // do we have to add a minus button?
      if(addMinusButtonBool) {
        // create a minus button register a handler for it.
        var minusButton = $("<button class='btn btn-default minusButton " + current.name + "' >")
        .on("click", function(event){ // called to remove field
          event.preventDefault();

          var group = $(event.target).parent();

          // remove the br and input group
          group.prev("br").remove();
          group.remove();

          // show the plusButton from above
          wrapper.find(".plusButton."+current.name).removeAttr("disabled");

          // update the field counter
          numFields--;

          // and revalidate
          revalidate();
        })
        .text("-")
        .prependTo(inputGroup);
      }

      // and increase the counter for the fields.
      numFields++;

      // disable the plus button if it makes sense.
      if(numFields == atmost) {
        wrapper.find(".plusButton."+current.name).attr("disabled", "true");
      }

      // and revalidate
      revalidate();
    }
  }

  // create the initial fields
  // until we have the minimum number of fields
  while(numFields < atleast) {
    createSelect(); // create a select field
  }

  // add a plus button to the first field
  // if it makes sense to add it.
  if(numFields < atmost) {
    $("<button class='btn btn-default plusButton " + current.name + "' >")
    .on("click", function(e){
      e.preventDefault();
      createSelect(true);
    })
    .text("+")
    .prependTo(selectGroup);
  }

  // set the previous value for the form if available.
  if (typeof annotation !== "undefined"){

    // read the previous value
    var prevValue = annotation.values[current.value].slice();
    var count = 0;
    var val, fields;

    // keep adding each value that we have stored.
    while(prevValue.length !== 0){

      //grab the value from the beginning
      val = prevValue.shift();

      // and increase our counter
      count++;

      // if we do not yet have a
      if(container.find('select').length < count){
        createTextField(true);
      }

      // and the set the right value for the select field
      var selectField = container.find('select').eq(count - 1);

      // by iterating over all the options.
      for(var i=0;i<current.validation.length;i++){
        if(current.validation[i].value === val.value){
          selectField.val(i);
        }
      }
    }
  }
};

/**
* generates a new text field in the annotation form.
*
* @param {KAT.model.Field} current - Field to generate.
* @param {jQuery} wrapper - Wrapper element to append the text field to.
* @param {KAT.Store.annotation} annotation - Annotation currently being edited (if available).
* @param {function[]} validations - Validation function array
* @param {function} revalidate - Function to call when revalidating.
* @function
* @static
* @name generateAnnotationTextField
* @memberof KAT.sidebar
*/
KAT.sidebar.generateAnnotationTextField = function(current, wrapper, annotation, validations, revalidate){

  //read minimum and maximum field repetitions
  var atleast = current.minimum || 1;
  var atmost = current.maximum || atleast;
  var numFields = 0; // current number of fields

  // generate a container to contain all the text fields.
  var container = $("<div>")
  .appendTo(wrapper);

  // parse the RegEx we want to valiate against.
  var RegExpression = current.validation;

  // add our validation function.
  validations.push(function(){
    // we need to validate everything.
    var isFieldOK = true;

    container.children().each(function(){
      // we go over the sub wrapper.
      var subWrapper = $(this);
      var newField = subWrapper.find("input[type=text]");

      // if we do not have a field, just skip it.
      if(newField.length === 0){
        return;
      }

      // remove the validation classes
      subWrapper.removeClass("has-success has-error");

      // if we pass validation
      if(RegExpression.test(newField.val())) {

        // add a success class
        subWrapper.addClass("has-success");
        isFieldOK = isFieldOK && true;
      } else {
        // else add an error class
        subWrapper.addClass("has-error");
        isFieldOK = false; //  isFieldOK && false;
      }
    });

    return isFieldOK;
  });

  // a group of inputs
  var inputGroup;

  function createTextField(addMinusButtonBool) {

    // we want to add another field
    // but only if we do not have the max already.
    if(numFields < atmost) {

      // do we want to add a minus button?
      addMinusButtonBool = addMinusButtonBool || false;

      // create a new input group for this set of controls
      inputGroup = $("<div>")
      .addClass("input-group")
      .appendTo(container);

      // and create a text field
      $("<input type='text'>")
      .addClass("tfield")
      .addClass("form-control")

      // append it to the inputGroup
      .appendTo(inputGroup)

      // and revalidate upon changing something.
      .keyup(function(){
        revalidate();
      });

      // create an info button
      var addon = $("<span>")
      .addClass("input-group-btn")
      .appendTo(inputGroup);

      // and add a message to it.
      // TODO: Add how many times we may have this field.
      var info = "<p>"+current.documentation + "</p><p>" +
      "You are expected to match the following Regular Expression: </br>" +RegExpression +"</p>";

      // that we want to have as a popover.
      var popover = $("<button type='button' class='btn btn-default'>")
      .attr("title","Information")
      .text("?")
      .popover({html:true, toggle:"popover", placement:"top", content:info, container: "#"+current.name})
      .appendTo(addon);

      // add some spacing
      $("<br>").appendTo(container);

      // do we have to add a minus button?
      if(addMinusButtonBool) {

        // create a minus button.
        var span = $("<span class='input-group-btn'>")
        .prependTo(inputGroup);

        // and register a handler for it.
        var minusButton = $("<button class='btn btn-default minusButton " + current.name + "' >")
        .on("click", function(event){ // called to remove field
          event.preventDefault();

          var group = $(event.target).parent().parent();

          // remove the br and input group
          group.prev("br").remove();
          group.remove();

          // show the plusButton from above
          wrapper.find(".plusButton."+current.name).removeAttr("disabled");

          // update the field counter
          numFields--;

          // and revalidate
          revalidate();
        })
        .text("-")
        .appendTo(span);
      }

      // and increase the counter for the fields.
      numFields++;

      // disable the plus button if it makes sense.
      if(numFields == atmost) {
        wrapper.find(".plusButton."+current.name).attr("disabled", "true");
      }

      // and revalidate
      revalidate();

    }
  }

  // create the initial fields
  // until we have the minimum number of fields
  while(numFields < atleast) {
    createTextField(); // create a text field
  }

  // add a plus button to the first field
  // if it makes sense to add it.
  if(numFields < atmost) {
    $("<span class='input-group-btn'>").append(
      $("<button class='btn btn-default plusButton " + current.name + "' >")
      .on("click", function(e){
        e.preventDefault();
        createTextField(true);
      })
      .text("+")
    )
    .prependTo(inputGroup);
  }

  // set the previous value for the form if available.
  if (typeof annotation !== "undefined"){

    // read the previous value
    var prevValue = annotation.values[current.value].slice();
    var count = 0;
    var val, fields;

    // keep adding each value that we have stored.
    while(prevValue.length !== 0){

      //grab the value from the beginning
      val = prevValue.shift();

      // and increase our counter
      count++;

      // if we do not yet have a text field, create it
      if(container.find('input[type="text"]').length < count){
        createTextField(true);
      }

      // and the set the right value.
      container.find('input[type="text"]').eq(count - 1).val(val);
    }
  }
};

/**
* Set up and insert Annotation Toolkit sidemenu
*
* @param {JOBAD.modules.loadedModule} env - JOBAD loaded Module instance
* @param {function} callback - Callback that is called once the form is closed. Should return an annotation.
* @param {KAT.Store.annotation} annotation - Annotation currently being edited (if available).
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

  // create a submit control group for the form
  var submitGroup = $("<div>").addClass("btn-group");

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
      if(field.type == KAT.model.Field.types.reference){
        // for references, find the actual UUID.
        valuesJSON[field.value] = infield.find("select").map(function(){return env.store.find($(this).val()); }).get().slice();
      } else if(field.type == KAT.model.Field.types.select){
        // for option, store the selected option.
        valuesJSON[field.value] = infield.find("select").map(function(){return field.validation[$(this).val()]; }).get().slice();
      } else {
        // for text, simply store the values of the text fields
        valuesJSON[field.value] = infield.find("input[type=text]").map(function(){return $(this).val(); }).get().slice();
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


  // map over the input fields
  var inputFieldGroups = jQuery.map(concept.fields, function(current){

    // create a new group
    // to append to the <form>
    var fieldGroup = $("<div>").appendTo(newForm);

    // create a wrapper for it.
    var wrapper = $("<div id='" + current.name + "'>")
    .addClass("form-group")
    .appendTo(fieldGroup)
    .css({'overflow':'auto'})
    .append(
      $("<label>").addClass("control-label").text(current.value), // add a label
      "&nbsp;" //and some spacing.
    );

    // and create groups for them
    // depending on the type
    if(current.type === KAT.model.Field.types.text){
      KAT.sidebar.generateAnnotationTextField(current, wrapper, annotation, validations, revalidate);
    } else if(current.type === KAT.model.Field.types.select) {
      KAT.sidebar.generateAnnotationSelectField(current, wrapper, annotation, validations, revalidate);
    } else if(current.type === KAT.model.Field.types.reference) {
      KAT.sidebar.generateAnnotationReferenceField(current, env, wrapper, annotation, validations, revalidate);
    }

    // return our group of fields
    return fieldGroup;
  });

  // append the submit group and stuff
  newForm.append(
    "<br />",
    submitGroup
  );

  // and re-validate the form
  revalidate();
};
