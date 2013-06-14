/**
 * Describes an annotation registry that keeps track of all the annotations for the current document
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.annotation.AnnotationRegistry", {
  init: function () {
    if (localStorage.getItem(this.KLocalStorageRegistryKey)) {
      this._loadRegistry();
    }
    else {
      this._registry = {}
    }
  },

  methods: {
    addAnnotation: function (annotation) {
      this._registry[annotation.getId()] = annotation;
      this._saveRegistry();
    },

    getAnnotations: function () {
      var annotations = [];
      for (var name in this._registry) {
        annotations.push(this._registry[name]);
      }
      return annotations;
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
        this._registry[name] = kat.annotation.Annotation.fromSerializedString(values[name]);
      }
    }

  },

  statics: {
    KLocalStorageRegistryKey: "annotationRegistry"
  }

});
