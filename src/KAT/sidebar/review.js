/**
 * Opens Form in the sidebar for Review Mode
 *
 * @function
 * @name generateReviewForm
 * @memberof KAT.sidebar
 */

KAT.sidebar.generateReviewForm = function() {

  var annotationText;

  var annotationPointer = -1;
  var annots = this.store.annotations;

  if (annots.length === 0)
    return;

  var appendAnnotationText = function() {

    //just compute the tooltip and show it in the review menu
    var computedTooltip = annots[annotationPointer % annots.length].recomputeTooltip();

    annotationText.html(computedTooltip);

  };


  var next = function() {
    var x = annots[0].unfocus() || undefined;
    annots[++annotationPointer % annots.length].focus();
    appendAnnotationText();

    checkButtonStatus();
  };

  var prev = function() {
    var x = annots[0].unfocus() || undefined;

    if (annotationPointer <= 0) {
      annotationPointer += annots.length;
    }

    annots[--annotationPointer % annots.length].focus();
    appendAnnotationText();

    checkButtonStatus();
  };


  var navigation = $("<li>")
    .addClass("review navigation")
    .appendTo(".KATMenuItems");


  /**********************************************/

  annotationText = $("<div>")
    .addClass("annotationText")
    .appendTo(navigation);

  /**********************************************/

  var navBtnGroup = $("<div>")
    .addClass("btn-group")
    .appendTo(navigation);

  var previousButton = $("<button>")
    .text("Previous")
    .addClass("btn btn-default")
    .click(function() {
      prev();
    })
    .appendTo(navBtnGroup);

  var nextButton = $("<button>")
    .text("Next")
    .addClass("btn btn-default")
    .click(function() {
      next();
    })
    .appendTo(navBtnGroup);

  /**********************************************/

  var rateBtnGroup = $("<div>")
    .addClass("btn-group")
    .appendTo(navigation);

  var likeButton = $("<button>")
    .addClass("btn btn-default like")
    .click(function() {
      removeButtonClass();
      likeButton.addClass("btn-success");
      reviewStore.annotationReviews[annots[annotationPointer % annots.length]
        .uuid] = "approve";
    })
    .appendTo(rateBtnGroup);

  $("<span>")
    .addClass("glyphicon glyphicon-thumbs-up")
    .appendTo(likeButton);

  var reviewStore = this.reviewStore;

  var dislikeButton = $("<button>")
    .addClass("btn btn-default dislike")
    .click(function() {
      removeButtonClass();
      dislikeButton.addClass("btn-danger");
      reviewStore.annotationReviews[annots[annotationPointer % annots.length]
        .uuid] = "disapprove";
    })
    .appendTo(rateBtnGroup);

  $("<span>")
    .addClass("glyphicon glyphicon-thumbs-down")
    .appendTo(dislikeButton);


  var removeButtonClass = function() {

    navigation.find("button").removeClass("btn-danger btn-success");

  };

  var checkButtonStatus = function() {

    removeButtonClass();

    if (reviewStore.annotationReviews[annots[annotationPointer % annots.length]
        .uuid] == "approve") {

      likeButton.addClass("btn-success");

    } else if (reviewStore.annotationReviews[annots[annotationPointer %
        annots.length].uuid] == "disapprove") {

      dislikeButton.addClass("btn-danger");

    }

  };


  /**********************************************/

  //initialize with focus on first annotation
  next();
};

/**
 * Closes Form in the sidebar for Review Mode
 *
 * @function
 * @name removeReviewForm
 * @memberof KAT.sidebar
 */

KAT.sidebar.removeReviewForm = function() {

  var navigation = $(".review.navigation");

  if (navigation)
    navigation.remove();

};
