/**
 * A form parser can be used to parse the fields and documentation from a given concept object.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.FormParser", {
  /**
   * Constructor for the class
   * @param {kat.annotation.Concept} concept an annotation:input xml element from which the form should be extracted
   */
  init: function(concept) {
    this._concept = concept;
  },
  methods: {
    /**
     * Parses the fields in xml format an returns an array of html input fields in string format.
     * @return {String[]}
     */
    parseFields: function() {
      var xmlFields = this._concept.getDefinition().getXmlDoc().getElementsByTagName("field");
      var fields = [];
      for (var i = 0; i < xmlFields.length; i++) {
        fields.push(this._parseField(new kat.util.XMLDoc(xmlFields[i])));
        this._fieldNames.push(xmlFields[i].getAttribute("name"));
      }
      return fields;
    },
    /**
     * Returns the documentation attached to the concept as a string.
     * @return {String}
     */
    parseDocumentation: function() {
      var documentation = "";
      if (this._concept.getDefinition().getXmlDoc().getElementsByTagName("documentation").length) {
        documentation = this._concept.getDefinition().getXmlDoc().getElementsByTagName("documentation")[0].textContent;
      }
      return documentation;
    },
    /**
     * Returns the form values as a map of form name => value
     * @return {Object}
     */
    getFormValues: function() {
      var values = {};
      for (var i = 0; i < this._fieldNames.length; i++) {
        var currentId = this._fieldNames[i];
        values[currentId] = "";
        //iterate over all of the inputs, possibly more than one
        jQuery("[name='" + currentId + "']").each(function() {
          //special handling for checkboxes
          if ($(this).attr("type") == "checkbox") {
            //take the ones that are checked
            if ($(this).is(":checked")) {
              //if it is the first one, just copy its value
              if (values[currentId] == "") {
                values[currentId] = $(this).val();
              }
              else {
                //if there was another one before, add a comma
                values[currentId] += "," + $(this).val();
              }
            }
          }
          else {
            //any other input
            //if it is the first one, just copy its value
            if (values[currentId] == "") {
              values[currentId] = $(this).val();
            }
            else {
              //if there was another one before, add a comma
              values[currentId] += "," + $(this).val();
            }
          }

        });
      }
      return values;
    }

  },
  internals: {
    concept: null,
    fieldNames: [],
    /**
     * Looks for a parser for the given field and if one is found it returns the parsed result.
     * @param {kat.util.XMLDoc} conceptField a concept field to be parsed
     * @return {String} the html input element as string parsed from the concept field
     */
    parseField: function(conceptField) {
      console.log(conceptField);
      var registry = new kat.input.form.FieldParserRegistry();
      return registry.getParser(conceptField).parse(conceptField);
    }
  }
})
