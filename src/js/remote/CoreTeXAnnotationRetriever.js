/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

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
