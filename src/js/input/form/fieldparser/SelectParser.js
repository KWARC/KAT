/**
 * Describes an annotation that was collected from a user and can be saved and transported over
 * network
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.Select", {

  implements: [kat.input.form.fieldparser],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("inputType") == "select") {
        return true;
      }
      return false;
    },

    parse: function (xmlField) {
      console.log("lalaa")
      var options = xmlField.getAttribute("options");
      if (!options) {
        throw Error("Error in the Annotation Ontology. No list of options provided for the select field!");
      }
      var optionsList = options.split("|");
      var optionsHtml = _.map(optionsList,function (value) {
        return "<option value='" + value + "'>" + value + "</option>"
      }).join("\n");

      var html = this.template
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name"))
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{required}/g, xmlField.getAttribute("required") == "true" ? "required" : "");
      return html;
    }
  },

  statics: {
    template: "<div class='control-group'><label class='control-label' for='{id}'>{label}</label> <div class='controls'><select {multiple} {required} id='{id}'>{options}</select></div></div>"
  }

})
