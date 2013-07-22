/**
 * Describes an annotation registry that keeps track of all the annotations for the current document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.AnnotationRegistry", {

  /**
   * Constructor for the class
   */
  init: function () {
    if (localStorage.getItem(this.KLocalStorageRegistryKey)) {
      this._loadRegistry();
    }
    else {
      this._registry = {}
    }
  },

  methods: {
    /**
     * Add an annotation to the registry. It will be automatically persisted to the selected storage medium.
     * @param annotation
     */
    addAnnotation: function (annotation) {
      this._registry[annotation.getId()] = annotation;
      this._saveRegistry();
    },

    /**
     * Returns a list of the annotations in the system.
     * @return {Array}
     */
    getAnnotations: function () {
      var annotations = [];
      for (var name in this._registry) {
        annotations.push(this._registry[name]);
      }
      return annotations;
    },

    /**
     * Removes all annotations from the registry and from the storage medium.
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
      //also remove styles and popovers for all annotations
      jQuery("." + kat.Constants.Display.SpecialClass).popover('destroy');
      jQuery("." + kat.Constants.Display.SpecialClass).removeClass(kat.Constants.Display.SpecialClass);
    }
  },

  internals: {
    registry: {},

    /**
     * Persists the registry to the given storage medium.
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
    },

    /**
     * Loads the registry from the given storage medium
     */
    loadRegistry: function () {
      var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
      for (var name in values) {
        this._registry[name] = kat.annotation.Annotation.fromSerializedString(values[name]);
      }
    }

  },

  statics: {
    KLocalStorageRegistryKey: "annotationRegistry"
  }

});
