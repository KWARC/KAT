
(function () {
  var container = dce('div');

  // All IDs of the container will be converted into elements and added here.
  var containerComponents = {};

  // All events attached with attach_event() will be stored here fore cleanup purposes.
  var events = {};

  // The last payload generated during the last selection.
  var last_payload = null;

  // Classes

  /**
   * Will hold all the individual components that will compile to a query.
   * It also provides some options to filter out certain parts of the query.
   *
   * @param {Array} elements
   * @param {Boolean} noIndex
   * @param {Boolean} noClasses
   * @param {Boolean} noId
   * @param {Boolean} noTag
   */
  var Query = function (elements, noIndex, noClasses, noId, noTag) {
    this._elems = [];
    this.use = {
      index: !noIndex,
      classes: !noClasses,
      id: !noId,
      tag: !noTag,
    };

    if (elements && Array.isArray(elements)) { elements.forEach(this.add.bind(this)); }
  };

  Query.prototype = {
    use: {},
    _elems: null,

    /**
     * Add an element to the query.
     * @param {Node} elem
     */
    add: function (elem) {
      var cls = elem.getAttribute('class');
      this._elems.push({
        tag: elem.nodeName.toLowerCase().trim(),
        id: (elem.getAttribute('id') || '').trim(),
        classes: cls && cls.length ? cls.replace(/\s+/g, ' ').split(' ') : [],
        index: toArray(elem.parentNode.children).indexOf(elem) + 1,
      });
      return this;
    },

    /**
     * Gets a query component and stringifies it. Optionally using some custom constraints.
     * @param  {Object} elem
     * @param  {Object} use Optional. Will replace this.use
     * @param  {Boolean} useTags Optional. If set to true, a DOM representation of the query will be returned.
     * @return {String}
     */
    getComponent: function (elem, use, useTags) {
      use = use || this.use;

      var if_use = function (key, yes, no) {
        return use[key] && (key in elem) && elem[key] != '' ? yes : (no === undefined ? '' : no);
      }.bind(this);

      var wrap = !useTags ? function (name, str) { return str; } :
                            function (name, str) {
                              return '<span class="NI-query-item NI-query-' + name + '">' + str + '</span>';
                            };

      return  if_use('tag', wrap('tag', elem.tag)) +
              if_use('id', wrap('id', '#' + elem.id)) +
              if_use('classes', elem.classes.map(function (c) { return wrap('class', '.' + c); }).join('')) +
              if_use('index', wrap('index', ':nth-child(' + elem.index + ')'));
    },

    /**
     * Stringifies all the components.
     * @return {String}
     */
    toString: function () {
      return this._elems.map(function (elem) {
        return this.getComponent(elem);
      }.bind(this)).join(' ');
    },

    /**
     * Used when JSON.stringify() gets called on an instance.
     * Basically returns the toString().
     * @return {String}
     */
    toJSON: function () {
      return this.toString();
    },
  };

  // Setup Functions.

  function init () {
    if (window.selector_cleanup) { window.selector_cleanup(); }

    make_structure();
    containerComponents = extract_components(container, 'NI-');

    // Register cleanup
    window.selector_cleanup = cleanup;
  }

  function add_events () {
    attach_event('start_selection', containerComponents.startSelection, 'click', start_selection);
    // attach_event('split-view', containerComponents.splitView, 'click', split_view);
    attach_event('query_highlight', containerComponents.query, 'mouseover', query_highlight);
    attach_event('query_clear', containerComponents.query, 'mouseout', query_clear);
  }

  function make_structure () {
    container.setAttribute('id', 'NI-container');

    var checkbox = function (id, checked, label) {
      return  '<label for="NI-' + id + '">' +
                '<input type="checkbox" id="NI-' + id + '" ' + (checked ? 'checked' : '') + ' />' +
                (label || '') +
              '</label>';
    };

    container.innerHTML = ''+
      '<a href="javascript:void(0)" id="NI-start-selection">Select new tag</a>' +
      // '<a href="javascript:void(0)" id="NI-split-view">Split View</a>' +
      '<div id="NI-notifications"></div>' +
      '<h3 id="NI-query-header">Query:</h3>' +
      '<ul id="NI-query"></ul>' +
      '<div id="NI-xpath-wrapper"><b>XPATH selector:</b> <span id="NI-xpath"></span></div>';
    document.documentElement.appendChild(container);
  }

  // Helper functions.

  /**
   * Registers an annotation by sending it to the background page.
   * @param  {Object}   obj
   * @param  {Function} callback
   */
  function registerAnnotation (obj, callback) {
    chrome.runtime.sendMessage({
      action: 'addAnnotation',
      info: {
        query: obj.query.toString(),
        xpath: obj.xpath,
      }
    }, callback || function () {});
  }

  /**
   * Every descendant with an ID attribute will be returned as a reference in a collection.
   * All IDs will be converted to camelCase. I.E.: some-random-id --> someRandomId
   *
   * @param  {Node} elem
   * @param  {String} namespace Optional. If provided, all IDs prefixed with the namespace will have
   *                              the namespace removed.
   * @return {Object}
   */
  function extract_components (elem, namespace) {
    if (!elem) { return {}; }
    var result = {};
    var nodes = elem.querySelectorAll('[id]');

    for (var i=0; i<nodes.length; ++i) {
      var id = nodes[i].getAttribute('id');
      if (namespace && id.indexOf(namespace) == 0) { id = id.slice(namespace.length); }
      // Convert from dash-notation cu camelCaseNotation.
      id = id.replace(/-[a-z]/g, function (match) { return match[1].toUpperCase(); });
      result[id] = nodes[i];
    }

    return result;
  }

  /**
   * Attach an event to an element.
   * This keeps track of all events for cleanup purposes.
   *
   * @param  {String}   name
   * @param  {Node}   elem
   * @param  {String}   eventType
   * @param  {Function} callback  [description]
   */
  function attach_event (name, elem, eventType, callback) {
    if (name in events) { detach_event(name); }

    elem.addEventListener(eventType, callback, false);
    events[name] = [elem, eventType, callback];
  }

  /**
   * Remove an event attached with attach_event().
   * @param  {String} name
   */
  function detach_event (name) {
    if (!events[name]) { return; }

    events[name][0].removeEventListener(events[name][1], events[name][2], false);
  }

  /**
   * Checks if the given element in contained in another element.
   * @param  {Node} elem
   * @param  {Node} container
   * @return {Boolean}
   */
  function descendantOf (elem, parentElement) {
    var p = elem;

    while (p) {
      if (p == parentElement) { return true; }
      p = p.parentNode;
    }

    return false;
  }

  /**
   * Remove a class from all elements with that class.
   * Useful for removing all highlighted elements.
   * @param  {String} cls
   * @return {Node}     Returns all matched elements
   */
  function removeClasses (cls) {
    var old = document.querySelectorAll('.' + cls);

    if (!old) { return old; }

    for (var i=0; i<old.length; ++i) { old[i].classList.remove(cls); }

    return old;
  }

  /**
   * Creates the payload which will be sent to the background page.
   * @param  {DOMNode} elem
   * @return {Object}
   */
  function generate_payload (elem) {
    // Get parents list.
    var parents = [];
    var p = elem;
    while (p && p !== document.documentElement) {
      parents.push(p);
      p = p.parentNode;
    }
    parents.reverse();

    var query = new Query(parents);
    var xpath = '/' + query._elems.map(function (sel) {
      return '[' + sel.index + ']';
    }).join('/');

    return {
      elem: elem,
      query: query,
      xpath: xpath,
    };
  }

  /**
   * Shortcut for document.createElement();
   * @param  {String} type
   * @return {DOMNode}
   */
  function dce (type) {
    return document.createElement(type);
  }

  // Event callbacks:

  function start_selection (event) {
    attach_event('tag_highlight', document.documentElement, 'mouseover', tag_highlight);
    attach_event('tag_select', document.documentElement, 'contextmenu', tag_select);
  }

  function query_clear (event) {
    removeClasses('NI-query-hover');
    removeClasses('NI-highlight');
  }

  function query_highlight (event) {
    // Get the query element row.
    var elem = event.target;
    while (elem && !elem.classList.contains('NI-query-elem')) { elem = elem.parentNode; }

    var q = [];
    var sibl = elem.parentNode.children;
    for (var i=0; i<sibl.length; ++i) {
      sibl[i].classList.add('NI-query-hover');
      q.push(sibl[i].getAttribute('query-component'));

      if (sibl[i] === elem) { break; }
    }
    q = q.join(' ');

    // Select all matches:
    var matches = document.querySelectorAll(q);
    for (var i=0; i<matches.length; ++i) {
      matches[i].classList.add('NI-highlight');
    }
  }

  function tag_select (event) {
    // Stop event.
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    // Save the annotation:
    registerAnnotation(last_payload);

    // Clear event listeners.
    detach_event('tag_highlight');
    detach_event('tag_select');
  }

  function tag_highlight (event) {
    removeClasses('NI-hover');

    if (!event || !event.target) { return; }

    // Set new selection.
    if (descendantOf(event.target, container)) { return; }

    event.target.classList.add('NI-hover');

    last_payload = generate_payload(event.target);

    update_DOM(last_payload);
  }

  /**
   * Updates the panel with information about the current selection.
   * @param  {Object} payload The result of generate_payload();
   */
  function update_DOM (payload) {
    console.log('Query: %s', payload.query.toString());
    console.log('XPATH: %s', payload.xpath);
    console.log('Elements selected:', document.querySelectorAll(payload.query.toString()));

    // Update the Query section:
    var query = payload.query;
    containerComponents.query.innerHTML = '';
    for (var i=0; i<query._elems.length; ++i) {
      var elem = dce('li');
      elem.classList.add('NI-query-elem');
      elem.setAttribute('query-component', query.getComponent(query._elems[i]));
      elem.dataset.query = JSON.stringify(query._elems[i]);
      elem.innerHTML = query.getComponent(query._elems[i], null, true);
      containerComponents.query.appendChild(elem);
    }

    // Update the XPATH section:
    containerComponents.xpath.innerHTML = payload.xpath;
  }

  // Init & cleanup

  function cleanup () {
    // Clear events.
    for (var name in events) { detach_event(name); }

    // Remove elements.
    container.parentNode.removeChild(container);

    // Remove cleanup function from window.
    delete window.selector_cleanup;
  }

  init();

})();
