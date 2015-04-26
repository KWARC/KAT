KAT.sidebar = function(){

  /* Set up and insert Annotation Toolkit (sidemenu) */

  // GENERAL COMMENT: Use jQuery's chaining functionality more.
  // I added it whenever possible

  // globalVariables
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

//TODO (@Tom): Look at the stuff below

KAT.sidebar.genNewAnnotationForm = function(env,selection,concept){
  fields = concept.fields;
  var fieldIndex;

  var newAnnotation = document.createElement('li');
  jQuery(newAnnotation).addClass("currentForm");

  for (fieldIndex = 0; fieldIndex < fields.length; ++fieldIndex) {
    current = fields[fieldIndex];
    var value = current.value;
    var newTextField;
    var newSelectField;
    var options;
    jQuery( newAnnotation ).append(value);
    if (current.type == "text"){
      newTextField = document.createElement('input');
      newTextField.type="text";
      jQuery( newAnnotation ).append(newTextField);
    }
    if (current.type == "select"){
      options = current.validation;
      newSelectField = document.createElement('select');
      for (optionIndex = 0; optionIndex < options.length; ++optionIndex){
        opt = options[optionIndex];
        newOption = document.createElement('option');
        jQuery( newOption ).html(opt.value);
        jQuery( newSelectField ).append(newOption);
      }
      jQuery( newAnnotation ).append(newSelectField);
    }

    if (current.type == "reference"){
      var allowedAnnotations = current.validation;
      options = env.store.filterByConcept(allowedAnnotations[0]);
      newSelectField = document.createElement('select');
      for (optionIndex = 0; optionIndex < options.length; ++optionIndex){
        opt = options[optionIndex];
        newOption = document.createElement('option');
        jQuery( newOption ).html(opt);
        jQuery( newSelectField ).append(newOption);
      }
      jQuery( newAnnotation ).append(newSelectField);
    }
  }
  var button = document.createElement('input');
  button.type="submit";
  button.value="Add";
  var mylist = [];
  jQuery( button ).click(function(){
    valuesJSON = {};
    for (fieldIndex = 0; fieldIndex < fields.length; ++fieldIndex) {
      current = fields[fieldIndex];
      var value = current.value;
      mylist.push(jQuery( this ).parent().children("input:eq("+fieldIndex+")").val());
      valuesJSON [value] = mylist;
      mylist = [];
    }
    jQuery( this ).parent().remove();
    var newAnnotation = env.store.addNew(selection, concept, valuesJSON);
    newAnnotation.draw();
  });
  jQuery( newAnnotation ).append(button);
  jQuery( newAnnotation ).prepend("<b> Enter Annotation Details</b><br>");
  jQuery( ".KATMenuItems" ).append(newAnnotation);
};

/**
* Is the sidebar extended?
*
* @type {boolean}
* @name KAT.sidebar.collapsibleStatus
*/
KAT.sidebar.collapsibleStatus = false;
