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
 * XMLDoc is a class that provides a series of utility functions for easier parsing of XML docs using XPath
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 * @version 3.0.0
 */
FlancheJs.defineClass("kat.util.XMLDoc", {

  init: function (xml) {
    var resXml;
    if ((xml instanceof Document) || (xml instanceof Element)) {
      resXml = xml;
    }
    else {
      var parser = new DOMParser();
      resXml = parser.parseFromString(xml, "application/xml");
    }
    this.setXmlDoc(resXml);
    this._setup();
  },

  properties: {
    xmlDoc: {}
  },

  methods: {
    filter: function (xPath) {
      var doc = this.getXmlDoc();
      var iter = doc.evaluate(xPath, doc, this._resolver, XPathResult.ANY_TYPE, null);
      var resultSet = [];
      do {
        var next = iter.iterateNext();
        if ((next instanceof Document) || (next instanceof Element)) {
          next = new kat.util.XMLDoc(next);
          resultSet.push(next);
        }
      } while (next != null);
      return resultSet;
    },

    contains: function (xPath) {
      var doc = this.getXmlDoc();
      var iter = doc.evaluate(xPath, doc, this._resolver, XPathResult.ANY_TYPE, null);
      return _.exists(iter.iterateNext())
    },

    toString: function () {
      var serializer = new XMLSerializer();
      return serializer.serializeToString(this.getXmlDoc());
    },

    getTextContents: function () {
      return this.getXmlDoc().textContent;
    },

    getAttribute: function (attribute) {
      return this.getXmlDoc().getAttribute(attribute)
    },

    getChildren: function(){
      return _.map(this.getXmlDoc().childNodes, function(node){
        return new kat.util.XMLDoc(node);
      });
    }
  },

  internals: {
    resolver: null,

    setup: function () {
      var doc = this.getXmlDoc();
      this._resolver = document.createNSResolver(doc.ownerDocument == null ? doc.documentElement : doc.ownerDocument.documentElement);
    }
  }

})
