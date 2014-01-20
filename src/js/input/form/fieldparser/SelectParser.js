/**
 * Describes an annotation that was collected from a user and can be saved and transported over
 * network
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.SelectParser", {

  implements: ["kat.input.form.fieldparser"],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "select") {
        return true;
      }
      return false;
    },

    parse: function (xmlField) {
      var ret = "";
      //check if there is a number of instances of the field required
      var atLeast = 0;
      var atMost = 0;
      var number = xmlField.getXmlDoc().getElementsByTagName("number");
      if(number.length){
        atLeast = parseInt(number[0].getAttribute("atleast"));
        atMost = parseInt(number[0].getAttribute("atmost"));
      }
      var options = xmlField.getXmlDoc().getElementsByTagName("option");
      if (!options) {
        throw Error("Error in the Annotation Ontology. No list of options provided for the select field!");
      }
      var optionsHtml = _.map(options,function (value) {
        //check if the option is default
        var isDefault = value.getAttribute("default") ? "default='true'" : "";
        //option value is mandatory
        var val = value.getElementsByTagName("value");
        if(!val.length){
          throw Error("Error in the Annotation Ontology. All options must have a value!");
        }
        val = val[0].textContent
        //check if a label exists, if not, use the value
        var label = value.getElementsByTagName("label").length ? value.getElementsByTagName("label")[0].textContent : val;
        //add documentation if present
        var documentation = value.getElementsByTagName("documentation").length ? "data-documentation='" + value.getElementsByTagName("documentation")[0].textContent + "'" : "";
        return "<option value='" + val + "' " + isDefault + documentation + ">" + label + "</option>"
      }).join("\n");     
      //if no requirements, append to template
      if(!atLeast){
        var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
        if(documentation != ""){
          documentation = "data-documentation='" + documentation + "'";
        }
        var name="name='"+xmlField.getAttribute("name")+"'";
         ret = this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{documentation}/g, documentation)
        .replace(/{required}/g, "");
      }
      //if requirements, append as many as needed
      for(var i = 0; i < atLeast; i++){
        var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
        if(documentation != ""){
          documentation = "data-documentation='" + documentation + "'";
        }
         var name="name='"+xmlField.getAttribute("name")+"'";
         ret += this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-" + i)
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{documentation}/g, documentation)
        .replace(/{required}/g, "required");
      }
      //adding a wrap over the added fields
      var dataAtMost = "";
      if(atMost){
        dataAtMost = "data-atmost='"+ atMost +"'";
      }
      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      ret = "<div " + wrapperClass + dataAtMost + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>"+ "<label class='control-label'>" + label + "</label>"  + ret + "</div>";
      return ret;
    }
  },

  statics: {
    template: "<div class='control-group'> <div class='controls'><select {name} {documentation} {required} id='{id}'>{options}</select></div></div>"
  }

})
