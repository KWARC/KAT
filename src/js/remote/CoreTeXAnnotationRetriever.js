/**
 * Retrieves the document and the annotations from the CoreTeX service and populates
 * the internal registry
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.remote.CoreTeXAnnotationRetriever", {
  init: function (serviceUrl, conceptRegistry, documentId, container) {
    this._serviceUrl = serviceUrl;
    this._conceptRegistry = conceptRegistry;
    this._documentId = documentId;
    this._container = container;
  },

  methods: {
    loadRegistry: function (annotationRegistry) {
      this._annotationRegistry = annotationRegistry;
      this._retrieveDocumentAndAnnotations();
    }
  },

  internals: {
    serviceUrl        : null,
    conceptRegistry   : null,
    annotationRegistry: null,
    documentId        : null,


    retrieveDocumentAndAnnotations: function () {
      var retrievalUrl = this._serviceUrl + "?" + this.KServiceParameters + "&" + this.KDocumentIdParameter + "=" + this._documentId;
      jQuery.get(retrievalUrl,function (data) {
        var decodedData = JSON.parse(data);
        var document = decodedData.document;
        var annotations = decodedData.annotations;
        if (document == null || annotations == null) {
          throw Error("Error while loading the document from the CoreTeX service.");
        }
        this._setupDocument(document);
        this._registerAnnotations(annotations);
      }).fail(function () {
          throw Error("Could not load the document and annotations from the specified url: " + retrievalUrl)
        })
    },

    setupDocument: function (documentString) {
      this._container.html(documentString);
    },

    registerAnnotations: function (annotations) {
      for (var annotationId in annotations) {
        var annotation = new kat.annotation.Annotation(annotations[annotationId].baseId,
          annotations[annotationId].idExtent,
          this._conceptRegistry.lookupConcept(annotations[annotationId].concept),
          annotations[annotationId].values,
          annotationId,
          annotations[annotationId].extraData
        )
        this._annotationRegistry.addAnnotation(annotation);
      }
    }
  },

  statics: {
    KServiceParameters  : "service=KAT",
    KDocumentIdParameter: "documentId"
  }


})
