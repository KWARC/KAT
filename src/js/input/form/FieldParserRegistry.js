/**
 * The Field Parser Registry contains all the field parsers that are available to parse
 * an annotation field.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.FieldParserRegistry", {
  init: function () {
    for (var parserName in kat.input.form.fieldparser) {
      if (kat.input.form.fieldparser[parserName] instanceof Function) {
        var parser = new kat.input.form.fieldparser[parserName]();
        this._registry.push(parser);
      }
    }
  },

  methods: {
    /**
     * Returns a parser for the given field or throws an error if one
     * @param {kat.util.XMLDoc} xmlField the field to pe parsed
     * @return {*}
     */
    getParser: function (xmlField) {
      for (var i = 0; i < this._registry.length; i++) {
        if (this._registry[i].canParse(xmlField) === true) {
          return this._registry[i];
        }
      }
      throw Error("No suitable field parser found for this input " + xmlField.to)
    }
  },

  internals: {
    registry: []
  }
})
