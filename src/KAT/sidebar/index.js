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

  this.store = store;

  //mode of the sidebar.
  var mode;

  switch(KAT.sidebar.annotationMode) {
    
    case "Review":
      mode = "Review";
      break;

    case "Annotation":
      mode = "Annotation";
      break;

    default:
      mode = "Reading";
  }

  //get the height of the window.
  var winHeight = jQuery(window).height();

  //create a button to toggle annotations
  KAT.sidebar.modeButtonGroup = $("<div>")
    .addClass("btn-group")
    .attr("role", "group");
   //.BS();

  //add Button for each option
  ["Reading", "Annotation", "Review"].map( function(label) {

    //set some button initially active
    var isActive = "";
    if(label == mode) 
      isActive = "active";

    $("<button>")
      .attr("type", "button")
      .attr("mode", label)
      .addClass("btn btn-default")
      .addClass(isActive)
      .text(label)
      .click(function(){
        KAT.sidebar.toggleAnnotationMode(label);
      })
      .appendTo(KAT.sidebar.modeButtonGroup);

  } );


  //create collapsible sidebar
  var collapsibleMenu = jQuery('<div>').addClass("collapsible")

  .append(
    //add a heading
    $("<div>").addClass("KATTitle").html("<h3>KWARC Annotation Tool</h3>"),

    // and a lot of buttons
    $("<div>").addClass("KATSidebarButtons")
    .append(
      //to toggle the mode
      KAT.sidebar.modeButtonGroup,
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
      "<br/>",
      "<br/>",

      //to 
      $("<button>")
      .text("Report Issue")
      .addClass("helpButton")
      .addClass("btn btn-default")
      .click(function(){
        //open github issues page
        window.open("https://github.com/KWARC/KAT/issues", "_blank");
      }),
      "<br/>",
      "<br/>",

      "<br/>"
    ),
    $("<ul>").addClass("KATMenuItems")
  )
  .css({
    'position':'fixed',
    'right': KAT.sidebar.hideWidth,
    'height': winHeight
  }).prependTo("body");

  // create button to toggle collapse and resurection of sidemenu and define properties
  var collapsibleToggle = $("<button>")
  .text("«")
  .addClass("collapseToggle")
  .css({'height': winHeight-20, 
        'z-index': 100})
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
      'height': winHeight
    });

    collapsibleToggle.css({
      'height': winHeight-20
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
KAT.sidebar.toggleAnnotationMode = function(label){

  if(KAT.sidebar.annotationMode == "Review") {
    //remove specific menu
    KAT.storage.Annotation.prototype.unfocus();
    KAT.sidebar.removeReviewForm();

  }

  KAT.sidebar.annotationMode = label;
  KAT.sidebar.modeButtonGroup.find(".active").removeClass("active");
  KAT.sidebar.modeButtonGroup.find("[mode='"+label+"']").addClass("active");

  if(label == "Review")
    KAT.sidebar.generateReviewForm(this.store);


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
* @name KAT.sidebar.modeButtonGroup
*/
KAT.sidebar.modeButtonGroup = undefined;

