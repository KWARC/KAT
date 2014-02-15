
var dependencies = [
  'css/selector.css',
  // 'css/kat.css',
  // 'js/kat.js',
  'js/utils.js',
  'js/selector.js',
];

var stateStyles = {
  meta: '#00b902',
  none: '#dc143c',
};

// Maps URLs to all the annotations for the current url.
var annotations = ls.get('annotations', {});;

// Any type of message send from contentscripts must be registered here.
// Maps actions to callbacks
var protocol = {
  /**
   * Register an annotation for the given URL.
   * Requires: {Object} info
   */
  addAnnotation: function (request, sender, sendResponse) {
    var url = hashURL(parseURI(sender.tab.url));
    annotations[url] = annotations[url] || {};
    annotations[url][request.info.query] = request.info;
    saveSettings();
    tabSpecificActions(sender.tab);
  },
};

init();

function init () {
  setState(undefined, 'none');

  chrome.browserAction.onClicked.addListener(function _browserActionClicked (tab){
    console.info('[KAT] Initializing: ', tab.url);
    syncLoading(dependencies, tab.id);
  });

  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (!request.action || !(request.action in protocol)) {
      logger.warn('[onMessage] Unknown protocol `' + request.action + '`', request);
      return;
    }
    protocol[request.action].apply(null, arguments);
  });

  chrome.tabs.onActivated.addListener(function (info) {
    console.log('activated:', info);
    chrome.tabs.get(info.tabId, function (tab) {
      tabSpecificActions(tab);
    });
  });

  chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status == 'loading') {
      tabSpecificActions(tab);
      return;
    }
    // TODO: do something when the page has finished loading.
  });
}

/**
 * Call this function every time you change something that needs to persist across sessions.
 * Aka, when stuff that needs to be cached in localStorage got updated.
 */
function saveSettings () {
  ls.set('annotations', annotations);
}

/**
 * Performs stuff depending if the URL matches something or not.
 * Generally used to check if there are any annotations stored for the given URL and
 *  change the badge accordingly.
 *
 * @param {String} url
 */
function tabSpecificActions (tab) {
  var url = hashURL(parseURI(tab.url));
  if (!(url in annotations)) { return; }
  setState(tab.id, 'meta');
}

/**
 * For an URL parsed with parseURI, hashes it accordingly (e.g. discards the hash, the search, etc).
 * @param  {Object} url Object parsed with parseURI().
 * @return {String}
 */
function hashURL (url) {
  return url.host + url.pathname;
}

/**
 * Changes the state of the extension and updates the browser action icon.
 * @param {Number} tabId Set to undefined to do a global change.
 * @param {Boolean} state
 */
function setState (tabId, state) {
  chrome.browserAction.setBadgeText({text:state, tabId:tabId});
  chrome.browserAction.setBadgeBackgroundColor({color:stateStyles[state], tabId:tabId});
}

/**
 * Sequencially load the files.
 * @param  {Object}   files
 * @param  {Number}   tab
 * @param  {Number}   index = 0
 * @param  {Function} callback
 */
function syncLoading (files, tab, index, callback) {
  tab = tab || null;
  index = index || 0;
  callback = callback || function _emptyCallback () {};

  var fileObject = typeof files[index] === 'object' ? files[index]
                                                      : { file: files[index] };
  var extension = fileObject.file.slice(fileObject.file.lastIndexOf('.')+1);
  var loadFunction = extension === 'js' ? 'executeScript' : 'insertCSS';

  chrome.tabs[loadFunction](
    tab,
    fileObject,
    (function _setupNextCallback (newFile, newIndex) {
      return function _callNextSyncLoading () {
        if (index + 1 < files.length) {
          syncLoading(files, tab, newIndex, callback);
        } else {
          callback(files);
        }
      };
    }(fileObject, index+1))
  );
}
