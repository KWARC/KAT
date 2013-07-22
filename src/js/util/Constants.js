/*
 * KAT Constants.
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.Constants", {
  init   : function () {

  },
  statics: {
    TextPreprocessor: {
      IdPrefix          : "kat",
      Selector          : "body",
      SpanClass         : "kat-counter",
      AnnotationLinkText: "Annotate!"
    },
    Display         : {
      SpecialClass       : "kat-annotated",
      Triger             : "hover",
      AnnotationIdPrefix : "kat-annotation",
      AnnotationFormTitle: "Add Annotation",
      SelectOntologyText : "Select an ontology",
      SelectConceptText  : "Select a concept",
      FormText           : "Fill in the following form"
    },
    Form            : {
      FieldPrefix: "field-id-",
      FieldWrapPrefix: "field-wrap-id-",
      FieldWrapClass: "kat-form-field-wrapper",
      FieldClass: "kat-form-field"
    }
  }
});



