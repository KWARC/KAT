/**
 * Sends the annotations being created on this document to the CoreTeX system.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.remote.CoreTexAnnotationInserter", {
  init: function (serviceUrl, documentId, conceptRegistry) {
    this._serviceUrl = serviceUrl;
    this._documentId = documentId;
    this._conceptRegistry = conceptRegistry;
  },

  methods: {
    save: function (annotationRegistry) {
      this._annotationRegistry = annotationRegistry;
      this._postData();
    }
  },

  internals: {
    serviceUrl        : null,
    annotationRegistry: null,
    documentId        : null,
    conceptRegistry   : null,

    postData: function () {
      var postUrl = this._serviceUrl + "?" + this.KServiceParameters + "&" + this.KDocumentIdParameter
      jQuery.post(postUrl, this._serializePostData(),function () {
        $.pnotify({
          title: 'Success',
          text : "The annotations were successfully saved.",
          type : 'success'
        });
      }).fail(function () {
          window.error("Could not save the annotations.");
        })
    },

    serializeAnnotation: function (annotation) {
      var serializedAnnotation = {
        id       : annotation.getId(),
        idBase   : annotation.getIdBase(),
        idExtent : annotation.getIdExtent(),
        values   : annotation.getAnnotationValues(),
        concept  : annotation.getConcept(),
        extraData: annotation.getExtraData()
      }
      return serializedAnnotation
    },

    serializePostData: function () {
      var rdfAnnotations = "";
      var serializedAnnotations = [];
      var self = this;
      var annotations = this._annotationRegistry.getAnnotations();
      _.each(annotations, function (annotation) {
        rdfAnnotations += annotation.toRDF(self._conceptRegistry);
        serializedAnnotations.push(self._serializeAnnotation(annotation));
      });

      var serializedObj = {};
      serializedObj[this.KAnnotationsParameter] = rdfAnnotations;
      serializedObj[this.KJSONAnnotationsParameter] = JSON.stringify(serializedAnnotations);
      serializedObj[this.KDocumentIdParameter] = this._documentId;

      return serializedObj;
    }
  },

  statics: {
    KServiceParameters       : "service=KAT",
    KDocumentIdParameter     : "id",
    KAnnotationsParameter    : "annotations",
    KJSONAnnotationsParameter: "jsannotations"
  }
})
