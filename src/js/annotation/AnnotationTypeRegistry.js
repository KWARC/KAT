/**
 * A registry to keep track of all available annotation types
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.annotation.AnnotationTypeRegistry", {

  init: function () {

  },

  methods: {
    /**
     * Adds a type to the registry
     * @param {kat.annotation.AnnotationType} annotationType
     */
    addType: function (annotationType) {
      this.registry[annotationType.getName()] = annotationType;
    },

    /**
     * Looks up an annotation type in the registry
     * @param {String} annotationTypeName the annotation type name
     * @return {kat.annotation.AnnotationType}
     */
    lookupType: function (annotationTypeName) {
      return this.registry[annotationTypeName];
    },

    /**
     * Returns all the types in the registry as a map of form name => annotationType
     * @return {Object}
     */
    getAllTypes: function () {
      return this._registry;
    }
  },

  internals: {
    registry: {}
  }

})
