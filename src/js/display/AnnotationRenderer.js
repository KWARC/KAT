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
        content : this._buildContent()
      }
    }
  },

  internals: {
    annotation: null,

    buildContent: function () {
      var annotationType = kat.annotation.AnnotationTypeRegistry.lookupType(this._annotation.getAnnotationTypeName());
      var template = annotationType.getXmlOntology().filter("//annotation:visualization/format")[0].toString().replace("<format>", "").replace("</format>", "");
      var replacements = this._annotation.getAnnotationValues();
      for (var name in replacements) {
        template = template.replace(new RegExp("{" + name + "}", "g"), replacements[name]);
      }
      return template;
    }
  }

})
