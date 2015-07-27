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
  .css({'height': winHeight-10, 
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
