/**
 * A registry to keep track of all available annotation types
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.annotation.AnnotationTypeRegistry", {

  init: function () {
    if (window.localStorage.getItem(this.KLocalStorageRegistryKey)) {
      this._loadRegistry();
    }
    else {
      this._registry = {};
    }
  },

  methods: {
    /**
     * Adds a type to the registry
     * @param {kat.annotation.AnnotationType} annotationType
     */
    addType: function (annotationType) {
      this._registry[annotationType.getName()] = annotationType;
      this._saveRegistry();
    },

    /**
     * Looks up an annotation type in the registry
     * @param {String} annotationTypeName the annotation type name
     * @return {kat.annotation.AnnotationType}
     */
    lookupType: function (annotationTypeName) {
      return this._registry[annotationTypeName];
    },

    /**
     * Removes an annotation type from the registry.
     * @param annotationTypeName
     */
    removeType: function (annotationTypeName) {
      delete this._registry[annotationTypeName];
    },

    /**
     * Returns all the types in the registry as a map of form name => annotationType
     * @return {Object}
     */
    getAllTypes: function () {
      return this._registry;
    },

    /**
     * Removes all entries from the registry
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
      kat.annotation.AnnotationRegistry.clearRegistry();
    }
  },

  internals: {
    registry: {},

    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
    },

    loadRegistry: function () {
      var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
      for (var name in values) {
        this._registry[name] = kat.annotation.AnnotationType.fromSerializedString(values[name]);
      }
    }
  },

  statics: {
    KLocalStorageRegistryKey: "annotationTypeRegistry"
  }

})
