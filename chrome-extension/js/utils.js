
// Which of the log functions to use. Default = ALL
// 1 - error, 2 - warn, 3 - info, 4 - log
var logLevel = 4;

/**
 * Wrapper for console.* logging functions which either print or not depending
 * on logLevel above.
 */
var logger = (function () {
  var order = ['error', 'warn', 'info', 'log'];
  var obj = {};

  for (var i=0; i<order.length; ++i) {
    (function (index, name) {
      obj[name] = function () {
        if (logLevel < index) { return; }
        return console[name].apply(console, arguments);
      };
    })(i, order[i]);
  }

  return obj;
})();

/**
 * localStorage enhancer. Auto JSON.stringify and JSON.encodes all the elements.
 * @type {Object}
 */
var ls = {
  /**
   * Set a key. Auto JSON.stringify
   * @param {String|Object} key  Set multiple keys at once by passing an object as a key and no value.
   * @param {Mixed} value Optional if the first argument is an Object.
   * @return {Object} chainable
   */
  set: function (key, value) {
    if (arguments.length === 1 && typeof key == 'object' && key !== null) {
      for (var name in key) { ls.set(name, key[name]); }
    } else {
      localStorage[key] = JSON.stringify(value);
    }
    return this;
  },

  /**
   * Get a key from localStorage. Auto JSON.parse
   * @param  {String} key
   * @param  {Mixed} defaultValue Optional. A default value to return if the key does not exist.
   * @return {Mixed}
   */
  get: function (key, defaultValue) {
    if (!(key in localStorage)) {
      return defaultValue;
    }
    try {
      return JSON.parse(localStorage[key]);
    } catch (ex) {
      console.warn('Never use plain localStorage to set shit!\nOtherwise this happens: ' + ex, ex.stack);
      return defaultValue;
    }
  },

  /**
   * Deletes a key from localStorage
   * @param  {String} key
   * @return {Boolean}
   */
  remove: function (key) {
    return (delete localStorage[key]);
  },

  /**
   * Prints out an indented stringified JSON of the value.
   * Takes the same arguments as ls.get();
   * @see get
   * @return {Object} chainable
   */
  debug: function () {
    console.log(JSON.stringify(ls.get.apply(ls, arguments), null, 2));
    return this;
  },
};

/**
 * Returns all the components of an URI.
 *
 * Example: parseURI("http://example.com:3000/pathname/?search=test#hash")
 * will return:
 *
 * {  protocol: "http:",
 *    hostname: "example.com",
 *    port: "3000",
 *    pathname: "/pathname/",
 *    search: "?search=test",
 *    hash: "#hash",
 *    host: "example.com:3000",
 * }
 *
 * @param  {String} str
 * @return {Object}
 */
function parseURI (str) {

  var parser = document.createElement('a');
  parser.href = str;

  var result = {};
  var keys = ['protocol', 'hostname', 'port', 'pathname', 'search', 'hash', 'host'];
  keys.forEach(function (key) { result[key] = parser[key]; });

  return result;
}

/**
 * Performs a deep copy of the object (in a not very efficient nor save manner).
 * @param  {Object} obj
 * @return {Object}
 */
function cloneObject (obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Basically calls Array.prototype.slice.call() on the argument.
 * @param  {Object} obj
 * @return {Array}
 */
function toArray (obj) {
  return Array.prototype.slice.call(obj);
}
