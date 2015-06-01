/**
* Namespace for storage used by KAT.
* @namespace
* @alias KAT.storage
*/
KAT.storage = {};

/**
  * Resolves a relative url.
	* @param {string} url	Url to resolve
	* @param {string} [base = "."]	Optional. Base url to use.
	* @param {boolean} [isDir = false]	Optional. If set to true, will return a directory name ending with a slash.

  * @returns {string} - An absolute (resolved) url.
  * @function
  * @static
  * @name resolve
  * @memberof KAT.storage
  */
KAT.storage.resolve = function(url, base, isDir){

  // read in parameters
	var resolveWithBase = false;
	var baseUrl, oldBase, newBase;

  // do we have a base to resolve first?
	if(typeof base === "string"){
		resolveWithBase = true;

    //resolve the <base>
		baseUrl = arguments.callee(base, true);

		oldBase = jQuery("base").detach();
		newBase = jQuery("<base>").attr("href", baseUrl).appendTo("head");
	}

  // create a link with the right url.
  // TODO: Cleanup this code.
  var el = document.createElement('div');
  el.innerHTML = '<a href="'+jQuery('<span/>').text(url).html()+'">x</a>';

  // take the absolute url from the div.
  var absUrl = el.firstChild.href;

  // remove the base if it was added.
  if(resolveWithBase){
  	newBase.remove();
  	oldBase.appendTo("head");
  }

  // add a slash to the directory.
  if( (base === true || isDir === true ) && absUrl[absUrl.length - 1] != "/"){
    absUrl = absUrl + "/";
  }

  // return the absolute URL.
  return absUrl;
}; 
