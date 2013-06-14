/**
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

FlancheJs.defineClass("kat.display.AnnotationRenderer", {

  init: function (annotation) {
    this._annotation = annotation
  },

  methods: {
    render: function () {
      return {
        idBase  : this._annotation.getIdBase(),
        idExtent: this._annotation.getIdExtent(),
        content : JSON.stringify(this._annotation.getAnnotationValues())
      }
    }
  },

  internals: {
    annotation: null
  }

})
