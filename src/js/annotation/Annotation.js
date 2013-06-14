/**
 * Describes an annotation that was collected from a user and can be saved and transported over
 * network
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Annotation", {

  init: function (idBase, idExtent, annotationTypeName, annotationValues, id) {
    this.$idBase = idBase;
    this.$idExtent = idExtent;
    this.$annotationTypeName = annotationTypeName;
    this.$annotationValues = annotationValues;
    this.$id = id || kat.Constants.Display.AnnotationIdPrefix + "-" + parseInt(Math.random() * 100000);
  },

  properties: {
    idBase            : {value: null, writable: false},
    idExtent          : {value: null, writable: false},
    annotationTypeName: {value: null, writable: false},
    annotationValues  : {value: null, writable: false},
    id                : {value: null, writable: false}
  },

  methods: {
    serialize: function () {
      return JSON.stringify({
        idBase            : this.getIdBase(),
        idExtent          : this.getIdExtent(),
        annotationTypeName: this.getAnnotationTypeName(),
        annotationValues  : JSON.stringify(this.getAnnotationValues()),
        id                : this.getId()
      })
    }
  },

  statics: {
    fromSerializedString: function (json) {
      var values = JSON.parse(json);
      return new kat.annotation.Annotation(values.idBase, values.idExtent, values.annotationTypeName, JSON.parse(values.annotationValues), values.id);
    }
  }

})
