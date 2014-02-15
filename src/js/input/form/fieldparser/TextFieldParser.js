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
 * Field processor for text fields. For more details see @link{kat.input.form.fieldparser.FieldParser}
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.TextFieldParser", {
  //implements: [kat.input.form.fieldparser],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "text") {
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
        .replace(/{label}/g, xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name"))
        .replace(/{value}/g, xmlField.getXmlDoc().getElementsByTagName("default").length ? xmlField.getXmlDoc().getElementsByTagName("default")[0].textContent : "")
        .replace(/{required}/g, "true")
        .replace(/{validation}/g, xmlField.getXmlDoc().getElementsByTagName("validation").length ? xmlField.getXmlDoc().getElementsByTagName("validation")[0].textContent : "")
        .replace(/{documentation}/g, xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "")
      }
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      //adding a wrap over the added fields
      var dataAtMost = "";
      if(atMost){
        dataAtMost = "data-atmost='"+ atMost +"'";
      }
      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      ret = "<div " + wrapperClass + dataAtMost + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>" + "<label class='control-label'>" + label + "</label>" + ret + "</div>";
      return ret;
    }
  },

  statics: {
    template: "<div class='control-group'> \n\
<div class='controls'><input class='" + kat.Constants.Form.FieldClass + "' {name} data-documentation='{documentation}' data-validation='{validation}' type='text' id='{id}' value='{value}' required='{required}' /></div></div>"
  }

});

