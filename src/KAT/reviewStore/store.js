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

	this.annotationReviews = [];




};