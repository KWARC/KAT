/**
 * A FormProcessor object takes an annotation ontology form definition as an xml node and returns
 * an HTML string form that can be added inside a document
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.main.KATService", {
  init: function (selector) {
    this._selector = selector,
    this._annotationRegistry = new kat.annotation.AnnotationRegistry();
    this._ontologyRegistry = new kat.annotation.OntologyRegistry();
    this._conceptRegistry = new kat.annotation.ConceptRegistry();
  },

  methods: {
    run: function () {
      /**
       * Clear local storage to remove old versions of kat registry
       */
      if(window.localStorage.getItem("kat.2") == null){
        window.localStorage.clear();
        window.localStorage.setItem("kat.2", true);
      }
      
      //
      window.onerror = function (message) {
        $.pnotify({
          title: 'KAT Error',
          text : message,
          type : 'error'
        })
      }
      var preProcessor = new kat.preprocessor.TextPreprocessor(this._selector, "", this._ontologyRegistry, this._conceptRegistry, this._annotationRegistry);
      preProcessor.run();
      var currentAnnotations = this._annotationRegistry.getAnnotations();
      var renderedAnnotations = [];
      for (var i = 0; i < currentAnnotations.length; i++) {
        var renderer = new kat.display.AnnotationRenderer(currentAnnotations[i], this._conceptRegistry);
        renderedAnnotations.push(renderer.render())
      }
      var displayer = new kat.Display(renderedAnnotations, this._annotationRegistry, this._conceptRegistry);
      displayer.run();
      preProcessor.setDisplay(displayer);
      this._annotationRegistry.setDisplay(displayer);
      var ontologyViewer = new kat.display.AnnotationOntologyViewer(this._ontologyRegistry, this._conceptRegistry, this._annotationRegistry);
      ontologyViewer.run();
    }
  },

  internals: {
    selector: null,
    annotationRegsitry: null,
    ontologyRegistry: null,
    conceptRegistry: null
  }

})
