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
