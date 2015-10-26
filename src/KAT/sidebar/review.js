
/**
* Opens Form in the sidebar for Review Mode
*
* @function
* @name generateReviewForm
* @memberof KAT.sidebar
*/

KAT.sidebar.generateReviewForm = function() {

	console.log(this.reviewStore);

	var annotationText;

	var annotationPointer = -1;
	var annots = this.store.annotations;

	if(annots.length === 0)
		return;

	var appendAnnotationText = function() {

		//just compute the tooltip and show it in the review menu
		var computedTooltip = annots[annotationPointer % annots.length].recomputeTooltip();

	  	annotationText.html("Annotation: " + computedTooltip);

	};

	var next = function() {
		var x = annots[0].unfocus() || undefined;
		annots[++annotationPointer % annots.length].focus();
		appendAnnotationText();
	};

	var prev = function() {
		var x = annots[0].unfocus() || undefined;

		if(annotationPointer <= 0) {
			annotationPointer+= annots.length;
		}

		annots[--annotationPointer % annots.length].focus();
		appendAnnotationText();
	};


	var navigation = $("<li>")
		.addClass("review navigation")
		.append("Navigate: ")
	  	.appendTo(".KATMenuItems");

	/**********************************************/

	var navBtnGroup = $("<div>")
		.addClass("btn-group")
		.appendTo(navigation);

  	var nextButton = $("<button>")
	  	.text("Next")
	  	.addClass("btn btn-default")
	  	.click(function() { next(); })
	  	.appendTo(navBtnGroup);

  	var previousButton = $("<button>")
	  	.text("Previous")
	  	.addClass("btn btn-default")
	  	.click(function() { prev(); })
	  	.appendTo(navBtnGroup);

	/**********************************************/

		annotationText = $("<div>")
		.addClass("annotationText")
		.appendTo(navigation);

	/**********************************************/

	var rateBtnGroup = $("<div>")
		.addClass("btn-group")
		.appendTo(navigation);

	var likeButton = $("<button>")
		.addClass("btn btn-default")
		.click(function() { reviewStore.annotationReviews[annots[annotationPointer].uuid] = "like"; } )
		.appendTo(rateBtnGroup);

	$("<span>")
		.addClass("glyphicon glyphicon-thumbs-up")
		.appendTo(likeButton);

	var reviewStore = this.reviewStore;

	var dislikeButton = $("<button>")
		.addClass("btn btn-default")
		.click(function() { reviewStore.annotationReviews[annots[annotationPointer].uuid] = "dislike"; } )
		.appendTo(rateBtnGroup);

	$("<span>")
		.addClass("glyphicon glyphicon-thumbs-down")
		.appendTo(dislikeButton);

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

	if(navigation)
		navigation.remove();

};