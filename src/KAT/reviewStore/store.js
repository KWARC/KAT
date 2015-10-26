/**
* Namespace for reviewStore used by KAT.
* @namespace
* @alias KAT.reviewStore
*/

KAT.reviewStore = {};


/** Creates a new reviewStore instance.
*
*
* @name KAT.reviewStore.Store
* @this {KAT.reviewStore.Store}
* @Alias KAT.reviewStore.Store
* @class
*/

KAT.reviewStore.Store = function() {

	/**
	  * Stores annotationReviews by mapping to annotation-uuids
	  * Contains string "like" and "dislike" as values
	  *
	  * @type {KAT.reviewStore.annotationReviews[]}
	  * @name KAT.reviewStore.Store#annotationReviews
	  */

	this.annotationReviews = {};


};


/** Export reviews by showing a dialog.
*
* @function
* @instance
* @name exportReviews
* @memberof KAT.reviewStore.Store
*/

KAT.reviewStore.Store.prototype.exportReviews = function() {

	var json = JSON.stringify(this.annotationReviews);

	//and a textarea with it.
	  var textarea = $("<textarea rows='20' readonly='readonly'>").addClass("form-control").text(json); 

	  // make a dialog
	  var dialog = KAT.gui.dialog("Export Reviews", "", ["OK"], function(){this.close();});


	  // and add the document
	  dialog.$content.append(
	    $("<form>").addClass("form").append(textarea)
	  );

	  //add some magic focusing code.
	  textarea.focus(function() {
	    textarea
	    .select()
	    .mouseup(function(){
	      textarea.unbind("mouseup");
	      return false;
	    });
	  });

	  // and make it focus on click.
	  textarea.click(function(){
	    textarea.focus();
	  }).click();

};

/** Shows an import dialog and import received JSON.
*
* @function
* @instance
* @name importReviews
* @memberof KAT.reviewStore.Store
*/

KAT.reviewStore.Store.prototype.importReviews = function() {

	//TODO: check if JSON valid

	var json = prompt("Paste reviews to import here: ");

	this.annotationReviews = JSON.parse(json);

};