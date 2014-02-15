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
      EditAnnotationFormTitle: "Edit annotation",
      SelectOntologyText : "Select an ontology",
      SelectConceptText  : "Select a concept",
      FormText           : "Fill in the following form",
      EditFormText       : "",
      CPanelTitle        : "KAT Control Panel"
    },
    Form            : {
      FieldPrefix: "field-id-",
      FieldWrapPrefix: "field-wrap-id-",
      FieldWrapClass: "kat-form-field-wrapper",
      FieldClass: "kat-form-field",
      ValuesSeparator: " | "
    }
  }
});



