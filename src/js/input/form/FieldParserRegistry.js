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
 * The Field Parser Registry contains all the field parsers that are available to parse
 * an annotation field.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.FieldParserRegistry", {
  init: function (annotationRegistry) {
    for (var parserName in kat.input.form.fieldparser) {
      if (kat.input.form.fieldparser[parserName] instanceof Function) {
        var parser = new kat.input.form.fieldparser[parserName](annotationRegistry);
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
      throw Error("No suitable field parser found for this input type" + xmlField.toString())
    }
  },

  internals: {
    registry: []
  }
})
