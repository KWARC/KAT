KAT.sidebar = function(){

/* Set up and insert Annotation Toolkit (sidemenu) */

  //globalVariables
  var hideWidth = '-230px'; //width that will be hidden
  var winHeight = jQuery(window).height(); 
  var collapsibleStatus = false;

  //create collapsible sidemenu & define properties
  var collapsibleMenu = document.createElement('div');
  jQuery(collapsibleMenu).addClass("collapsible")
    .html("<ul class=\"KATMenuItems\"></ul>")
    .css({'position':'fixed','right': hideWidth,'height': winHeight-10});

  // create button to toggle collapse and resurection of sidemenu and define properties
  var collapsibleToggle = document.createElement('button');
  jQuery(collapsibleToggle).html("&laquo;")
    .css({'height': winHeight-10})
    .click(function(){
      if(collapsibleStatus){
          jQuery(this).parent().animate({right: hideWidth}, 300 );
          jQuery(this).html('&laquo;'); //change text of button
          jQuery("body").css({'width': jQuery(window).width()-50});
          collapsibleStatus = false;
      }else{
          jQuery(this).parent().animate({right: "0"}, 300 ); 
          jQuery(this).html('&raquo;'); //change text of button
          jQuery("body").css({'width': jQuery(window).width()-260});
          collapsibleStatus = true;
      }
    });

  //render sidemenu on page ready
  jQuery( document ).ready(function(){
    jQuery( collapsibleMenu ).prepend(collapsibleToggle);
    jQuery( "body" ).prepend(collapsibleMenu);
    jQuery("body").css({'width': jQuery(window).width()-50});
  });

  //define changes to sidemenu when page is resized
  jQuery( window ).resize(function() {
    winHeight = jQuery(window).height();
    jQuery(collapsibleMenu).css({'position':'fixed','right': hideWidth,'height': winHeight-10});
    jQuery(collapsibleToggle).css({'height': winHeight-10});
    jQuery("body").css({'width': jQuery(window).width()-50});
  });
};

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
        console.log(options);
        newSelectField = document.createElement('select');
        for (optionIndex = 0; optionIndex < options.length; ++optionIndex){
          opt = options[optionIndex];
          newOption = document.createElement('option');
          jQuery( newOption ).html(opt.value);
          jQuery( newSelectField ).append(newOption);  
        }
        jQuery( newAnnotation ).append(newSelectField);
      }
  }
  var button = document.createElement('input');
    button.type="submit";
    button.value="Add";
    jQuery( button ).click(function(){
      valuesJSON = [];
      item = {};
      for (fieldIndex = 0; fieldIndex < fields.length; ++fieldIndex) {
        current = fields[fieldIndex];
        var value = current.value;
        item [value] = jQuery( this ).parent().children("input:eq("+fieldIndex+")").val();
      }
      valuesJSON.push(item);
      jQuery( this ).parent().remove();
      var newAnnotation = env.store.addNew(selection, concept, valuesJSON);
      newAnnotation.draw();
  });
  jQuery( newAnnotation ).append(button);
  jQuery( newAnnotation ).prepend("<b> Enter Annotation Details</b><br>");
  jQuery( ".KATMenuItems" ).append(newAnnotation);
};