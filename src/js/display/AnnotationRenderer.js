/**
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

FlancheJs.defineClass("kat.display.AnnotationRenderer", {
  init: function(annotation, conceptRegsitry) {
    this._annotation = annotation;
    this._conceptRegistry = conceptRegsitry;
  },
  methods: {
    render: function() {
      return {
        idBase: this._annotation.getIdBase(),
        idExtent: this._annotation.getIdExtent(),
        content: this._buildContent()
      }
    }
  },
  internals: {
    annotation: null,
    conceptRegistry: null,
    
    buildContent: function() {
      var annotationType = this._conceptRegistry.lookupConcept(this._annotation.getConcept());
      var display = annotationType.getDefinition().getXmlDoc().getElementsByTagName("template");  
      if(!display.length){
        throw Error("Each annotation concept must define a display!");
      }   
      var template = display[0].textContent;
      var replacements = this._annotation.getAnnotationValues();
      for (var name in replacements) {
        template = template.replace(new RegExp("{" + name + "}", "g"), replacements[name]);
      }
      return template;
    }
  }

})
