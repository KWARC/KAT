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
 * Parses the fields of type reference
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.ReferenceParser", {

  implements: ["kat.input.form.fieldparser"],

  init: function (annotationRegistry) {
    this._annotationRegistry = annotationRegistry;
  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "reference") {
        return true;
      }
      return false;
    },

    parse: function (xmlField) {
      var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
      if (documentation != "") {
        documentation = "data-documentation='" + documentation + "'";
      }
      var referencedType = xmlField.getXmlDoc().getElementsByTagName("referencedType").length ? xmlField.getXmlDoc().getElementsByTagName("referencedType")[0].textContent : "";
      if (referencedType == "") {
        throw Error("Error in the Annotation Ontology. No referencedType provided for the reference field!");
      }
      var name = "name='" + xmlField.getAttribute("name") + "'";
      var annotations = this._annotationRegistry.getAnnotationsForConcept(referencedType);
      var options = "";
      for (var i = 0; i < annotations.length; i++) {
        var annotationText = annotations[i].getText();
        options += '<option data-annotation-id="' + annotations[i].getId() + '" value="' + annotationText["text"] + '">' + annotationText["trimmedText"] + '</option>\n';
      }
      if (options == "") {
        options = '<option value="undefined">No annotation found</option>';
      }
      var ret = this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{documentation}/g, documentation)
        .replace(/{options}/g, options);

      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      ret = "<div " + wrapperClass + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>" + "<label class='control-label'>" + label + "</label>" + ret + "</div>";
      return ret;
    }
  },

  internals: {
    annotationRegistry: null
  },

  statics: {
    template: "<div class='control-group'> <div class='controls'><select class='reference-field' {name} {documentation} required='true' id='{id}'>{options}</select></div></div>"
  }

})

