/**
 * Field processor for text fields. For more details see @link{kat.input.form.fieldparser.FieldParser}
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.TextAreaParser", {
  //implements: [kat.input.form.fieldparser],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "textarea") {
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
      //if no requirements, append the template
      if(!atLeast){
        var name="name='"+xmlField.getAttribute("name")+"'";
        ret = this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name"))
        .replace(/{value}/g, xmlField.getXmlDoc().getElementsByTagName("default").length ? xmlField.getXmlDoc().getElementsByTagName("default")[0].textContent : "")
        .replace(/{required}/g, "false")
        .replace(/{validation}/g, xmlField.getXmlDoc().getElementsByTagName("validation").length ? xmlField.getXmlDoc().getElementsByTagName("validation")[0].textContent : "")
        .replace(/{documentation}/g, xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "")
      }
      //if any requirements, append the minimum required numbers of instances
      for(var i = 0; i < atLeast; i++){
        var name="name='"+xmlField.getAttribute("name")+"'";
        ret += this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-" + i)
        .replace(/{label}/g, xmlField.getXmlDoc().getElementsByTagName("label").length != null ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name"))
        .replace(/{value}/g, xmlField.getXmlDoc().getElementsByTagName("default").length ? xmlField.getXmlDoc().getElementsByTagName("default")[0].textContent : "")
        .replace(/{required}/g, "true")
        .replace(/{validation}/g, xmlField.getXmlDoc().getElementsByTagName("validation").length ? xmlField.getXmlDoc().getElementsByTagName("validation")[0].textContent : "")
        .replace(/{documentation}/g, xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "")
      }
      
      //adding a wrap over the added fields
      var dataAtMost = "";
      if(atMost){
        dataAtMost = "data-atmost='"+ atMost +"'";
      }
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      ret = "<div " + wrapperClass + dataAtMost + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>"+ "<label class='control-label'>" + label + "</label>" + ret + "</div>";
      return ret;
    }
  },

  statics: {
    template: "<div class='control-group'><div class='controls'><textarea class='" + kat.Constants.Form.FieldClass + "' name='{name}' data-documentation='{documentation}' data-validation='{validation}' id='{id}' required='{required}'>{value}</textarea></div></div>"
  }

});

