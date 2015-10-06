
/**
* Opens Form in the sidebar for Review Mode
*
* @param {KAT.Storage.store} storage to retrieve annotations from
* @function
* @name generateReviewForm
* @memberof KAT.sidebar
*/

KAT.sidebar.generateReviewForm = function(store) {

	var annotationPointer = -1;
	var annots = store.annotations;

	if(annots.length === 0)
		return;

	var next = function() {
		var x = annots[0].unfocus() || undefined;
		annots[++annotationPointer % annots.length].focus();
	};

	var prev = function() {
		var x = annots[0].unfocus() || undefined;

		if(annotationPointer <= 0) {
			annotationPointer+= annots.length;
		}

		annots[--annotationPointer % annots.length].focus();
	};

	var navigation = $("<li>")
	.addClass("review navigation")
	.append("Navigate")
  	.appendTo(".KATMenuItems");

  	var nextButton = $("<button>")
  	.text("Next")
  	.click(function() { next(); })
  	.appendTo(navigation);

  	var previousButton = $("<button>")
  	.text("Previous")
  	.click(function() { prev(); })
  	.appendTo(navigation);


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