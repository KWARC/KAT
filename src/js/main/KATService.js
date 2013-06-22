/**
 * A FormProcessor object takes an annotation ontology form definition as an xml node and returns
 * an HTML string form that can be added inside a document
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.main.KATService", {
  init: function (selector) {
    this._selector = selector
  },

  methods: {
    run: function () {
      window.onerror = function (message) {
        $.pnotify({
          title: 'KAT Error',
          text : message,
          type : 'error'
        })
      }
      var preProcessor = new kat.TextPreprocessor(this._selector);
      preProcessor.run();
      var currentAnnotations = kat.annotation.AnnotationRegistry.getAnnotations();
      var renderedAnnotations = [];
      for (var i = 0; i < currentAnnotations.length; i++) {
        var renderer = new kat.display.AnnotationRenderer(currentAnnotations[i]);
        renderedAnnotations.push(renderer.render())
      }
      var displayer = new kat.Display(renderedAnnotations);
      displayer.run();
      var ontologyViewer = new kat.display.AnnotationOntologyViewer();
      ontologyViewer.run();
    }
  },

  internals: {
    selector: null
  }

})
