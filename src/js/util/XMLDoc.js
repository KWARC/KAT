/**
 * XMLDoc is a class that provides a series of utility functions for easier parsing of XML docs using XPath
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
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
        }
        resultSet.push(next);
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
