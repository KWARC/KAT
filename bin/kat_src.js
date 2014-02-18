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
 * Contains utility functionality to be used by the service
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.util.Util", {
  init: function() {

  },
  methods: {
    /**
     * Generates a RFC4122 compliant UUID.
     * @return {String} hexadecimal string containing the UUID
     */
    generateUUID: function() {
      var uuid = UUID.generate();
      return uuid;
    },
  
    registerDocumentationPopover: function(selector) {
      var popoverOptions = {
        "title": "Documentation",
        "placement": "right",
        "content": $(selector).data("documentation")
      };
      $(selector).popover(popoverOptions);
    },
  }

})
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
 * A singleton containing all the configuration parameters that can be tweaked.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.util.ConfigManager", {

  init: function () {

  },

  properties : {
    //the title displayed in the annotation form
    newAnnotationFormTitle : "Add new annotation"
  }
})
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

/*
 * KAT Constants.
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.Constants", {
  init   : function () {

  },
  statics: {
    TextPreprocessor: {
      IdPrefix          : "kat",
      Selector          : "body",
      SpanClass         : "kat-counter",
      AnnotationLinkText: "Annotate!"
    },
    Display         : {
      SpecialClass       : "kat-annotated",
      Triger             : "hover",
      AnnotationIdPrefix : "kat-annotation",
      AnnotationFormTitle: "Add Annotation",
      EditAnnotationFormTitle: "Edit annotation",
      SelectOntologyText : "Select an ontology",
      SelectConceptText  : "Select a concept",
      FormText           : "Fill in the following form",
      EditFormText       : "",
      CPanelTitle        : "KAT Control Panel"
    },
    Form            : {
      FieldPrefix: "field-id-",
      FieldWrapPrefix: "field-wrap-id-",
      FieldWrapClass: "kat-form-field-wrapper",
      FieldClass: "kat-form-field",
      ValuesSeparator: " | "
    }
  }
});







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
 * Class for text preprocessing. It adds text selection listeners.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.preprocessor.TextPreprocessor", {
    /**
     * Class constructor.
     * @param {string} selector A valid cs3 selector, indicating the region in
     * HTML where the text to be processed sits.
     * @param {string} idPrefix [optional] The prefix to be added to the span
     * ids.
     */
    init: function (selector, idPrefix, ontologyRegistry, conceptRegistry, anotationRegistry) {
        if (selector) {
            this.setSelector(selector);
        }
        if (idPrefix) {
            this.setIdPrefix(idPrefix)
        }
        this._ontologyRegistry = ontologyRegistry;
        this._conceptRegistry = conceptRegistry;
        this._anotationRegistry = anotationRegistry;
    },
    properties: {
        selector: {
            value: kat.Constants.TextPreprocessor.Selector
        },
        idPrefix: {
            value: kat.Constants.TextPreprocessor.IdPrefix
        },
        display: {}
    },
    methods: {
        /**
         * Returns the ids containing the selected text.
         */
        getSelectedIds: function () {
            var t;
            if (window.getSelection) {
                t = window.getSelection();
            } else if (document.getSelection) {
                t = document.getSelection();
            } else if (document.selection) {
                t = document.selection.createRange().text;
            }
            var baseNode = t.getRangeAt(0).startContainer;
            var extentNode = t.getRangeAt(0).endContainer;
            var baseNodeId = $(baseNode.parentNode).attr('id');
            var extentNodeId = $(extentNode.parentNode).attr('id');
            if (t.toString()) {
                return {
                    "baseNodeId": baseNodeId,
                    "extentNodeId": extentNodeId
                }
            }
            else {
                return null;
            }

        },
        /**
         * When text is selected, the container ids are sent for further
         * processing.
         */
        addSelectionListener: function () {
            var self = this;
            $(this.getSelector()).mouseup(function () {
                var selectedIds = self.getSelectedIds();
                if (selectedIds) {
                    self._currentLinkId = "kat-add-annotation-" + parseInt(Math.random() * 1000);
                    var tooltipOptions = {
                        trigger: "custom",
                        interactive: true,
                        content: "<a id='" + self._currentLinkId + "' href='#'>" + kat.Constants.TextPreprocessor.AnnotationLinkText + "</a>"
                    };
                    $("#" + selectedIds["extentNodeId"]).tooltipster(tooltipOptions);
                    $("#" + selectedIds["extentNodeId"]).tooltipster('show');
                    //timeout necessary to allow the link to exist before registering an event to it
                    //to be removed when replaced by jobad callback
                    setTimeout(function () {
                            self._registerAddAnnotationHandler(selectedIds["baseNodeId"], selectedIds["extentNodeId"])
                        },
                        500);
                }
            })
        },
        /**
         * Encapsulates the behavior of the text preprocessor.
         * It adds selection listeners.
         */
        run: function () {
            this.addSelectionListener();
        }
    },

    internals: {
        ontologyRegistry: null,

        conceptRegistry: null,

        currentLinkId: "",

        registerAddAnnotationHandler: function (baseId, extentId) {
            var self = this;
            $("#" + this._currentLinkId).off("click.kat");
            $("#" + this._currentLinkId).on("click", function (e) {
                e.preventDefault();
                //check that at least 1 annotation ontology and at least 1 concept are defined
                if (!self._ontologyRegistry.getAllOntologies().length) {
                    throw Error("Please define at least 1 annotation ontology before adding annotations!");
                }
                if (!self._conceptRegistry.getAllConcepts().length) {
                    throw Error("Please make sure that the annotation ontologies define at least 1 concept!");
                }
                var typeForm = new kat.display.AnnotationTypeForm(baseId, extentId, self._ontologyRegistry, self._conceptRegistry, self._anotationRegistry, self.getDisplay());
                typeForm.run();
            })
        }
    }
});




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
  init: function(concept, annotationRegistry) {
    this._concept = concept;
    this._annotationRegistry = annotationRegistry;
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
                values[currentId] += kat.Constants.Form.ValuesSeparator + $(this).val();
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
              values[currentId] += kat.Constants.Form.ValuesSeparator + $(this).val();
            }
          }

        });
      }
      return values;
    }

  },
  internals: {
    concept: null,
    annotationRegistry: null,
    fieldNames: [],
    /**
     * Looks for a parser for the given field and if one is found it returns the parsed result.
     * @param {kat.util.XMLDoc} conceptField a concept field to be parsed
     * @return {String} the html input element as string parsed from the concept field
     */
    parseField: function(conceptField) {
      var registry = new kat.input.form.FieldParserRegistry(this._annotationRegistry);
      return registry.getParser(conceptField).parse(conceptField);
    }
  }
})
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
 * Describes a class that acts as a container for an annotation form and a concept selector.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.view.FormContainer", {

  /**
   * Constructor for the class
   * @param {String[]} fields
   */
  init: function (fields) {
    this._fields = fields;
  },

  methods: {
    /**
     * Renders the container with both the concept selector and annotation form
     */
    render: function () {
      this._createContainer();
      this._createSelector();
      this._createForm();
    }
  },

  internals: {
    fields: null,

    /**
     * Creates the concept selector
     */
    createSelector: function () {
      var selector = new kat.form.view.ConceptSelector($("#" + this.KSelectorContainerId), this._form);
      selector.render();
    },

    /**
     * Creates the container in which the selector and annotation form will be rendered
     */
    createContainer: function () {
      var template = this.KContainerTemplate.replace("id", this.KContainerId)
        .replace("{title}", kat.util.ConfigManager.getNewAnnotationFormTitle())
        .replace("{conceptSelectorId}", this.KSelectorContainerId)
        .replace("{annotationFormId}", this.KAnnotationFormId);
      $("body").append(template);
    },

    /**
     * Creates the annotation form
     */
    createForm: function () {
      var form = new kat.form.view.Form($("#" + this.KAnnotationFormId), fields);
      form.render();
    }
  },

  statics: {
    KContainerId        : 'kat-form-container',
    KSelectorContainerId: 'kat-form-concept-selector',
    KAnnotationFormId   : 'kat-form-annotation-form',
    KContainerTemplate  : '<div id="{id}" class="modal hide fade">' +
      '<div class="modal-header">' +
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
      '<h3>{title}</h3>' +
      '</div>' +
      '<div class="modal-body">' +
      '<div id="{conceptSelectorId}"></div> ' +
      '<div id="{annotationFormId}"></div> ' +
      '</div>' +
      '<div class="modal-footer"><a href="#" class="btn">Close</a><a href="#" id="kat-form-save" class="btn btn-primary">Save</a></div>' +
      '</div>'
  }

})
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
 * Class to describe an input element in the form container that is used to select a concept to be used in the
 * annotation form.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.view.ConceptSelector", {

  /**
   * Constructor for the class
   * @param {Object} $container the dom element in which the selector will be placed
   * @param {kat.form} form the form containing this selector
   */
  init: function ($container, form) {
    this._form = form;
    this._$container = $container;
  },

  methods: {
    /**
     * Renders the selector into the given container
     */
    render: function () {
      var html = this.KTemplate.replace("{id}", this.KSelectorId)
        .replace("{options}", this._getConceptsAsOptions())
      this._$container.html(html);
      this._registerChangeHandler();
    }
  },


  internals: {
    $container: null,
    concepts  : null,
    form      : null,

    /**
     * Returns the concepts available to the form as an <option> string
     * @return {String}
     */
    getConceptsAsOptions: function () {
      return _.map(this._form.getConceptRegistry().getAllConcepts(),function (concept) {
        return '<option>' + concept.name + '</option>';
      }).join("\n");
    }
  },

  statics: {
    KSelectorId: 'concept-selector',
    KTemplate  : '<select id="{id}">{options}</select>'
  }

})
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
 * Describes a class that renders an annotation form containing the fields described in the concept
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.view.Form", {

  /**
   * Constructor for the class
   * @param {jQuery} $container the container in which the form should be places
   * @param {String[]} fields the fields to be added to the form, each as an HTML string.
   */
  init: function ($container, fields) {
    this._fields = fields;
    this._$container = $container;
  },

  methods: {
    /**
     * Renders the form in the given container
     */
    render: function () {
      var template = this.KFormTemplate.replace("{id}", this.KFormId)
        .replace("{fields}", this._fields.join("\n"));
      this._$container.html(template);
    }
  },

  internals: {
    fields    : [],
    $container: null
  },

  statics: {
    KFormId      : 'kat-form-annotation-form',
    KFormTemplate: '<form id="{id}" class="form-horizontal">{fields}</form>'
  }

})
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
 * The Form class decides which fields to be displayed in the current form.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.Form", {

  /**
   * Constructor for the class
   * @param {kat.annotation.ConceptRegistry} conceptsRegistry a registry containing the available concepts
   * @param {kat.annotation.AnnotationRegistry} annotationRegistry an annotation registry where the submitted annotation will be added
   */
  init: function (conceptsRegistry, annotationRegistry) {
    this.$conceptsRegistry = conceptsRegistry;
    this.$annotationRegistry = annotationRegistry;
    this._conceptName = this.getConceptsRegistry().getAllConcepts()[0].getName();
  },

  methods: {
    run: function () {

    }
  },

  properties: {
    conceptsRegistry  : {value: null, writable: false},
    annotationRegistry: {value: null, writable: false}
  },

  internals: {
    concept: null,

    setConceptName: function (conceptName) {
      this._conceptName = conceptName;
    },

    parseForm : function(){
      var parser = new kat.form.FormParser();
      return parser.getFields();
    },

    /**
     * Handler for the change event on the select box component of the selector
     */
    registerSelectorChangeHandler: function () {
      var self = this;
      jQuery("#" + kat.form.Concept.KSelectorId).on("change", function () {
        var conceptName = $(this).val();
        self._setConceptName(conceptName);
      });
    }

  }

})
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
 * A field parser parses an annotation:field into an html string. This trait serves only as
 * an interface that the extending classes follow
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineTrait("kat.input.form.fieldparser.FieldParser", {
  needs: {
    canParse: Function,
    parse   : Function
  }
})
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
 * Parses a field of type checkboxes outputing html.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.CheckboxesParser", {

  implements: ["kat.input.form.fieldparser"],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "checkboxes") {
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
        throw Error("Error in the Annotation Ontology. No list of options provided for the checkboxes field!");
      }
      var optionsHtml = _.map(options,function (value) {
        //check if the option is default
        var isDefault = value.getAttribute("default") ? "checked " : "";
        //option value is mandatory
        var val = value.getElementsByTagName("value");
        if(!val){
          throw Error("Error in the Annotation Ontology. All options must have a value!");
        }
        val = val[0].textContent
        //check if a label exists, if not, use the value
        var label = value.getElementsByTagName("label").length ? value.getElementsByTagName("label")[0].textContent : val;
        //add documentation if present
        var documentation = value.getElementsByTagName("documentation").length ? "data-documentation='" + value.getElementsByTagName("documentation")[0].textContent + "'" : "";
        var checkBox = "<label class='checkbox'>" + "<input name='" + xmlField.getAttribute("name") + "' type='checkbox' value='" + val + "' " + isDefault + documentation + ">" + label + "</input>";
        return checkBox + "</label>"
      }).join("\n");     
      //if no requirements, append to template
      if(!atLeast){
        var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
        if(documentation != ""){
          documentation = "data-documentation='" + documentation + "'";
        }
         ret = this.template
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{documentation}/g, documentation)
      }
      //if requirements, append as many as needed
      for(var i = 0; i < atLeast; i++){
        var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
        if(documentation != ""){
          documentation = "data-documentation='" + documentation + "'";
        }
         ret += this.template
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-" + i)
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{documentation}/g, documentation)
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
    template: "<div class='control-group'><div class='controls'><div {documentation} id='{id}'>{options}</div></div></div>"
  }

})


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
 * Class for handling the form displayed when an annotation is being edited.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationEditForm", {

    init: function (annotation, concept, annotationRegistry, conceptRegistry, display) {
        this.$annotation = annotation;
        this.$concept = concept;
        this._annotationRegistry = annotationRegistry;
        this.$display = display;
        this._conceptRegistry = conceptRegistry;
    },

    properties: {
        annotation: {},
        concept: {},
        display: {}
    },

    methods: {
        run: function () {
            this._renderContainer();
            jQuery("#" + this.KContainerId).on("hidden", function () {
                $(this).remove();
            })
        }
    },

    internals: {
        getAnnotationText: function () {
            var annotation = this.$annotation;
            var text = $("#" + annotation["$idBase"]).html();
            if (annotation["$idBase"] != annotation["$idExtent"]) {
                text += " ...";
            }
            return "<span class='kat-annotation-text'>" + text + "</span>";
        },
        renderContainer: function () {
            jQuery("#" + this.KContainerId).remove();
            var containerHtml = this.KModalTemplate.replace("{id}", this.KContainerId)
                .replace("{title}", kat.Constants.Display.EditAnnotationFormTitle + " for: " + this._getAnnotationText());
            jQuery("body").append(containerHtml);
            jQuery("#" + this.KContainerId).modal();
            var formParser = new kat.input.form.FormParser(this.getConcept(), this._annotationRegistry);
            var documentation = "data-documentation='" + formParser.parseDocumentation() + "'";
            var fields = formParser.parseFields().join("\n");
            var htmlString = "<h5>" + kat.Constants.Display.FormText + "</h5>";
            htmlString += "<div {documentation} class='annotation-form-edit-input'>{fields}</div>";
            $(".kat-form-display").html(htmlString.replace("{documentation}", documentation).replace("{fields}", fields));
            this._addFormDocumentation();
            this._addFormExpandableInputs();
            this._registerDeleteHandler();
            this._populateForm();
            this._registerSaveHandler(formParser);
        },
        addFormDocumentation: function () {
            var documentedItems = $(".annotation-form-edit-input").find("[data-documentation]");
            for (var i = 0; i < documentedItems.length; i++) {
                var documentation = $(documentedItems[i]).data("documentation")
                if (documentation) {
                    var linkId = "form-documentation-a-" + parseInt(Math.random() * 1000);
                    $(documentedItems[i]).parent().append('<a id="' + linkId + '" title="Documentation" class="form-documentation-a" href="#"><i class="icon-question-sign"></i></a>');
                    var popoverOptions = {
                        "title": "Documentation",
                        "placement": "right",
                        "content": documentation
                    };
                    $("#" + linkId).popover(popoverOptions);
                }
            }
        },
        addFormExpandableInputs: function () {
            var expandableItems = $(".annotation-form-edit-input").find("[data-atmost]");
            for (var i = 0; i < expandableItems.length; i++) {
                var atmost = parseInt($(expandableItems[i]).data("atmost"));
                var children = $(expandableItems[i]).find(".control-group");
                if (children.length < atmost) {
                    var linkId = "form-expand-a-" + parseInt(Math.random() * 1000);
                    //find the last control group, add the plus sign inside
                    $(expandableItems[i]).find('.control-label:first').prepend('<a id="' + linkId + '" title="Add More" class="form-expand-a" href="#"><i class="icon-plus-sign"></i></a>');
                    //register the add more behaviour
                    $("#" + linkId).off("click.kat");
                    $("#" + linkId).on("click.kat", function () {
                        var wrapper = $(this).parents(".kat-form-field-wrapper:first");
                        //add another control group
                        var newGroup = $(wrapper).find(".control-group:last").clone();
                        $(wrapper).append(newGroup);
                        //if the maximum allowed number is achieved, remove the button
                        if (parseInt($(wrapper).data("atmost")) == $(wrapper).children(".control-group").length) {
                            $(this).remove();
                        }
                    });
                }
            }
        },
        populateForm: function () {
            for (var key in this.$annotation["$annotationValues"]) {
                var values = this.$annotation["$annotationValues"][key].split(kat.Constants.Form.ValuesSeparator);
                //if only 1 value, put it in the field
                if (values.length == 1) {
                    $("[name='" + key + "']").val(this.$annotation["$annotationValues"][key]);
                }
                else {
                    for (var i = 0; i < values.length; i++) {
                        //expand the form if needed
                        if (i) {
                            $("[name='" + key + "']").parents(".kat-form-field-wrapper").find(".form-expand-a").click();
                        }
                        //set the value of the expanded field
                        $("[name='" + key + "']:last").val(values[i]);

                    }
                }
            }
        },
        registerDeleteHandler: function () {
            var self = this;
            $(".delete-kat-annotation").off("click.kat");
            $(".delete-kat-annotation").on("click.kat", function () {
                self._destroy();
                bootbox.confirm("Delete the annotation for " + self._getAnnotationText() + "?", function (e) {
                    if (e) {
                        //remove the annotation from the registry
                        self._annotationRegistry.deleteAnnotation(self.$annotation["$id"]);
                        //remove it from the display as well
                        self.getDisplay().deleteAnnotation(self.$annotation["$id"]);
                        self.getDisplay().update();
                        $.pnotify({
                            title: 'KAT Message',
                            text: 'The annotation for <b>' + self._getAnnotationText() + '</b> was successfully deleted.',
                            type: 'success'
                        });
                    }
                })
            })
        },
        registerSaveHandler: function (formParser) {
            var self = this;
            var form = $("#kat-form-save");
            form.off("click.kat");
            form.on("click.kat", function () {
                //create a new annotation
                var annotation = new kat.annotation.Annotation(self.$annotation["$idBase"], self.$annotation["$idExtent"], self.$concept["$name"], formParser.getFormValues());
                self._annotationRegistry.addAnnotation(annotation);
                var renderedAnnotation = (new kat.display.AnnotationRenderer(annotation, self._conceptRegistry)).render();
                self.getDisplay().addAnnotation(renderedAnnotation);
                //remove the old one
                self._annotationRegistry.deleteAnnotation(self.$annotation["$id"]);
                self.getDisplay().deleteAnnotation(self.$annotation["$id"]);
                //update the display
                self.getDisplay().update();
                self._destroy();
                $.pnotify({
                    title: 'KAT Message',
                    text: 'The annotation for <b>' + self._getAnnotationText() + '</b> was successfully updated.',
                    type: 'success'
                })
            })
        },
        destroy: function () {
            jQuery("#" + this.KContainerId).modal("hide");
            jQuery("#" + this.KContainerId).remove();
        },
        annotationRegistry: null,
        conceptRegistry: null
    },

    statics: {
        KContainerId: "kat-annotation-edit-form-display",
        KModalTemplate: '<div id="{id}" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>{title}</h3></div><div class="modal-body"><form class="form-horizontal"><div class="kat-form-display"></div></form> </div><div class="modal-footer"><button class="btn btn-danger pull-left delete-kat-annotation">Delete</button></button><a href="#" data-dismiss="modal" class="btn">Close</a><a href="#" id="kat-form-save" class="btn btn-primary">Save</a></div></div>'
    }

})/*
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
 * Class for handling the form displayed when an annotation is added.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationTypeForm", {
    init: function (idBase, idExtent, ontologyRegistry, conceptRegistry, annotationRegistry, display) {
        this._idBase = idBase;
        this._idExtent = idExtent;
        this._ontologyRegistry = ontologyRegistry;
        this._conceptRegistry = conceptRegistry;
        this._annotationRegistry = annotationRegistry;
        this.$display = display;
    },
    methods: {
        run: function () {
            this._renderContainer();
        }
    },
    properties: {
        display: {}
    },
    internals: {
        idBase: null,
        idExtent: null,
        selectedConceptName: null,
        formParser: null,
        ontologyRegistry: null,
        conceptRegistry: null,
        annotationRegistry: null,

        renderContainer: function () {
            jQuery("#" + this.KContainerId).remove();
            var containerHtml = this.KModalTemplate.replace("{id}", this.KContainerId)
                .replace("{title}", kat.Constants.Display.AnnotationFormTitle)
            jQuery("body").append(containerHtml);
            jQuery("#" + this.KContainerId).modal();
            this._renderOntologySelector();
        },

        renderOntologySelector: function () {
            var ontologies = _.map(this._ontologyRegistry.getAllOntologies(), function (val) {
                return {name: val.getName()};
            });
            var selectHtml = "<h5>" + kat.Constants.Display.SelectOntologyText + "</h5>";
            var documentationI = "<a data-documentation='Please select an ontology.' id='annotation-ontology-documentation' href='#'><i class='icon-question-sign'></i></a>";
            selectHtml += "<select id='annotation-ontology-selector'>{options}</select>" + documentationI + "<hr>";
            var options = "";
            for (var ontology in ontologies) {
                options += "<option>" + ontologies[ontology].name + "</option>\n";
            }
            $(".kat-ontology-selector").html(selectHtml.replace("{options}", options));
            var self = this;
            $("#annotation-ontology-selector").on("change", function () {
                self._registerConceptForOntology();
            });
            //register the documentation popover
            kat.util.Util.registerDocumentationPopover("#annotation-ontology-documentation");
            this._registerConceptForOntology();
        },

        registerConceptForOntology: function () {
            var ontology = $("#annotation-ontology-selector").val();
            if (ontology != "") {
                this._renderConceptSelector(ontology);
                //set the documentation
                var documentation = $(this._ontologyRegistry.lookupOntology(ontology).getDefinition().getXmlDoc()).children().contents("documentation");
                if (documentation.length) {
                    $("#annotation-ontology-documentation").show();
                    $("#annotation-ontology-documentation").data("documentation", $.trim($(documentation[0]).text()));
                    $("#annotation-ontology-documentation").popover('destroy');
                    kat.util.Util.registerDocumentationPopover("#annotation-ontology-documentation");
                }
                else {
                    $("#annotation-ontology-documentation").hide();
                }
            }
        },

        renderConceptSelector: function (ontology) {
            var selectHtml = "<h5>" + kat.Constants.Display.SelectConceptText + "</h5>";
            var documentationI = "<a data-documentation='Please select a concept.' id='annotation-concept-documentation' href='#'><i class='icon-question-sign'></i></a>";
            selectHtml += "<select id='annotation-concept-selector'>{options}</select>" + documentationI + "<hr>";
            var options = "";
            var concepts = this._conceptRegistry.getConceptsByOntology(ontology);
            for (var i = 0; i < concepts.length; i++) {
                options += '<option value="' + concepts[i].getName() + '">' +
                                concepts[i].getConceptName() + '</option>\n';
            }

            // Remove any previous installation of searchSelect
            jQuery("#annotation-concept-selector").searchSelect('destroy');
            $(".kat-concept-selector").html(selectHtml.replace("{options}", options));

            var self = this;

            jQuery("#annotation-concept-selector").on("change", function () {
                self._registerFormForConcept();
            }).searchSelect();

            //register documentation popover
            kat.util.Util.registerDocumentationPopover("#annotation-concept-documentation");
            self._registerFormForConcept();
        },

        registerFormForConcept: function () {
            var concept = $("#annotation-concept-selector").val();
            if (concept != "") {
                this._renderForm(concept);
                //set the documentation
                var documentation = $(this._conceptRegistry.lookupConcept(concept).getDefinition().getXmlDoc()).children().contents("documentation");
                //the following in needed because in some case, XMLDoc shortens the xml by 1 level
                if (!documentation.length) {
                    documentation = $(this._conceptRegistry.lookupConcept(concept).getDefinition().getXmlDoc()).contents("documentation");
                }
                if (documentation.length) {
                    $("#annotation-concept-documentation").show();
                    $("#annotation-concept-documentation").data("documentation", $.trim($(documentation[0]).text()));
                    $("#annotation-concept-documentation").popover('destroy');
                    kat.util.Util.registerDocumentationPopover("#annotation-concept-documentation");
                }
                else {
                    $("#annotation-concept-documentation").hide();
                }
            }
        },

        renderForm: function (concept) {
            this._selectedConceptName = concept;
            var conceptObject = this._conceptRegistry.lookupConcept(concept);
            this._formParser = new kat.input.form.FormParser(conceptObject, this._annotationRegistry);
            var documentation = "data-documentation='" + this._formParser.parseDocumentation() + "'";
            var fields = this._formParser.parseFields().join("\n");
            var htmlString = "<h5>" + kat.Constants.Display.FormText + "</h5>";
            htmlString += "<div {documentation} id='annotation-form-input'>{fields}</div>";
            $(".kat-form-display").html(htmlString.replace("{documentation}", documentation).replace("{fields}", fields));
            this._registerFormSaveHandler();
            this._addFormDocumentation();
            this._addFormExpandableInputs();
        },

        addFormDocumentation: function () {
            var documentedItems = $("#annotation-form-input").find("[data-documentation]");
            for (var i = 0; i < documentedItems.length; i++) {
                var documentation = $(documentedItems[i]).data("documentation")
                if (documentation) {
                    var linkId = "form-documentation-a-" + parseInt(Math.random() * 1000);
                    $(documentedItems[i]).parent().append('<a id="' + linkId + '" title="Documentation" class="form-documentation-a" href="#"><i class="icon-question-sign"></i></a>');
                    var popoverOptions = {
                        "title": "Documentation",
                        "placement": "right",
                        "content": documentation
                    };
                    $("#" + linkId).popover(popoverOptions);
                }
            }
        },

        addFormExpandableInputs: function () {
            var expandableItems = $("#annotation-form-input").find("[data-atmost]");
            for (var i = 0; i < expandableItems.length; i++) {
                var atmost = parseInt($(expandableItems[i]).data("atmost"));
                var children = $(expandableItems[i]).find(".control-group");
                if (children.length < atmost) {
                    var linkId = "form-expand-a-" + parseInt(Math.random() * 1000);
                    //find the last control group, add the plus sign inside
                    $(expandableItems[i]).find('.control-label:first').prepend('<a id="' + linkId + '" title="Add More" class="form-expand-a" href="#"><i class="icon-plus-sign"></i></a>');
                    //register the add more behaviour
                    $("#" + linkId).off("click.kat");
                    $("#" + linkId).on("click.kat", function () {
                        var wrapper = $(this).parents(".kat-form-field-wrapper:first");
                        //add another control group
                        var newGroup = $(wrapper).find(".control-group:last").clone();
                        $(wrapper).append(newGroup);
                        //if the maximum allowed number is achieved, remove the button
                        if (parseInt($(wrapper).data("atmost")) == $(wrapper).children(".control-group").length) {
                            $(this).remove();
                        }
                    });
                }
            }
        },

        registerFormSaveHandler: function () {
            var self = this;
            var formSaveButton = $("#kat-form-save");
            formSaveButton.off("click.kat");
            formSaveButton.on("click.kat", function () {
                var form = jQuery(".kat-form-display");
                var extraData = {};
                if (form.find(".reference-field")) {
                    extraData.referenceId = form.find(".reference-field :selected").attr("data-annotation-id");
                }
                var annotation = new kat.annotation.Annotation(self._idBase, self._idExtent, self._selectedConceptName, self._formParser.getFormValues(), null, extraData);
                self._registerNewAnnotation(annotation);
                self._destroy();
            })
        },

        displaySuccessMessage: function () {
            $.pnotify({
                title: 'KAT Message',
                text: 'Annotation was successfully saved.',
                type: 'success'
            });
        },

        registerNewAnnotation: function (annotation) {
            this._annotationRegistry.addAnnotation(annotation);
            var renderedAnnotation = (new kat.display.AnnotationRenderer(annotation, this._conceptRegistry)).render();
            this.getDisplay().addAnnotation(renderedAnnotation);
            this.getDisplay().update();
            this._displaySuccessMessage();
        },

        destroy: function () {
            jQuery("#annotation-concept-selector").searchSelect('destroy');
            jQuery("#" + this.KContainerId).modal("hide");
            jQuery("#" + this.KContainerId).remove();
        }
    },
    statics: {
        KAnnotationInputFilter: "//rdf:Description/annotation:annotation/annotation:input",
        KContainerId: "kat-annotation-form-display",
        KModalTemplate: '<div id="{id}" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>{title}</h3></div><div class="modal-body"><div class="kat-ontology-selector"></div><div class="kat-concept-selector"></div> <form class="form-horizontal"><div class="kat-form-display"></div></form> </div><div class="modal-footer"><a href="#" data-dismiss="modal" class="btn">Close</a><a href="#" id="kat-form-save" class="btn btn-primary">Save</a></div></div>'
    }

})
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
 * Class for handling the display of a singe annotation.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationRenderer", {
  init: function(annotation, conceptRegsitry) {
    this._annotation = annotation;
    this._conceptRegistry = conceptRegsitry;
  },
  methods: {
    render: function() {
      return {
        ontology: this._annotation.getOntology(),
        concept: this._annotation.getConcept(),
        idBase: this._annotation.getIdBase(),
        idExtent: this._annotation.getIdExtent(),
        content: this._buildContent(),
        id: this._annotation.getId(),
        style: this._style
      }
    }
  },
  internals: {
    annotation: null,
    conceptRegistry: null,
    style: null,

    buildContent: function() {
      var annotationType = this._conceptRegistry.lookupConcept(this._annotation.getConcept());
      var display = annotationType.getDefinition().getXmlDoc().getElementsByTagName("template");
      if(!display.length){
        throw Error("Each annotation concept must define a display!");
      }
      //get the eventual style definition
      var style = annotationType.getDefinition().getXmlDoc().getElementsByTagName("style");
      if(style.length){
          this._style = style[0].textContent.trim();
      }
      var template = display[0].textContent;
      var replacements = this._annotation.getAnnotationValues();
      for (var name in replacements) {
        template = template.replace(new RegExp("{" + name + "}", "g"), replacements[name]);
      }
      return template;
    },

    displayReference: function(){

    }
  }

})
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

/*
 * Creates and controls the annotation displays.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.Display", {
  /**
   * Class constructor
   * @param {Array[Object{idBase, idExtent, content}]} annotations The array of
   * annotations to be displayed.
   * @param {String} specialClass The class to be added to the words having
   * annotations bound.
   */
  init      : function (annotations, annotationRegsitry, conceptRegsitry, specialClass) {
    this.setAnnotations(annotations);
    if (specialClass) {
      this.setSetSpecialClass(specialClass);
    }
    this._annotationRegistry = annotationRegsitry;
    this._conceptRegistry = conceptRegsitry;
  },
  properties: {
    annotations : {
      value: []
    },
    specialClass: {
      value: kat.Constants.Display.SpecialClass
    }
  },
  methods   : {
    /**
     * Adds an annotation to the display
     */
    addAnnotation         : function (annotation) {
      this.$annotations.push(annotation);
    },
    /**
     * Removes an annotation from the display
     */
    deleteAnnotation      : function (id) {
      for (var i = 0; i < this.$annotations.length; i++) {
        if (this.$annotations[i]["id"] == id) {
          this.$annotations.splice(i, 1);
        }
      }
    },
    /**
     * Adds the class to the spans having annotations bound
     */
    addSpecialClassToSpans: function () {
      for (var i = 0; i < this.getAnnotations().length; i++) {
        var annotation = this.$annotations[i];
        var id1 = annotation["idBase"];
        var id2 = annotation["idExtent"];

        //exchange if necessary, to start from the smallest
        if ($("#" + id1).index() > $("#" + id2).index()) {
          var aux = id2;
          id2 = id1;
          id1 = aux;
        }
        console.log("ids ", id1, id2);
        var annotatedIds = $("#" + id1).nextUntil("#" + id2).andSelf().add($('#' + id2));
        var ontologyClass = 'ontology-' + annotation.ontology;
        var conceptClass = 'concept-' + annotation.concept.replace(/\./g, '-');
        var classes = [this.getSpecialClass(), ontologyClass, conceptClass].join(" ");
        var currentAnnotationId = annotation["id"];
        annotatedIds.wrapAll("<span " +
          "id='" + currentAnnotationId + "' " +
          "class='" + classes + "' " +
          "ontology='" + annotation.ontology + "' " +
          "concept='" + annotation.concept + "'>"
        );
        annotation["id"] = currentAnnotationId;
        if (annotation["style"] != null) {
          var rules = annotation["style"].split(";");
          for (var j = 0; j < rules.length; j++) {
            var rule = rules[j].split(":");
            if (rule.length == 2) {
              $("#" + currentAnnotationId).css(rule[0].trim(), rule[1].trim());
            }
          }
        }

      }
    },
    createTooltipDisplays : function () {
      for (var i = 0; i < this.getAnnotations().length; i++) {
        var editButton = '<i title="Edit" class="icon-edit pull-right edit-annotation" id="edit-annotation-' + this.$annotations[i].id + '"></i>';
        var closeButton = '<i title="Close" class="icon-remove"></i>';
        var tooltipsterOptions = {
          //"trigger": kat.Constants.Display.Triger,
          //"interactive": true,
          "title"    : 'Annotation <button type="button" class="close" id="close-' + this.$annotations[i].id + '" aria-hidden="true">' + closeButton + '</button>' + editButton,
          "html"     : true,
          "placement": "bottom",
          "content"  : this.$annotations[i].content
        }
        var currentAnnotation = this._annotationRegistry.getAnnotation(this.$annotations[i].id);
        if (currentAnnotation.getExtraData().referenceId) {
          this.createReferenceArrow(currentAnnotation, this.$annotations[i].id);
        }
        $("#" + this.$annotations[i].id).popover(tooltipsterOptions);
        var annotationId = "#" + this.$annotations[i].id;
        var annotationCloseId = "#" + 'close-' + this.$annotations[i].id;
        (function (annotationId, annotationCloseId) {
          $("body").delegate(annotationCloseId, "click", function () {
            $(annotationId).popover('hide');
          })
        })(annotationId, annotationCloseId)
      }
      this._registerEditAnnotationCallback();
    },

    createReferenceArrow: function (currentAnnotation, annotationId) {
      var self = this;
      var baseAnnotationSpan = jQuery("#" + currentAnnotation.getIdBase());
      var pointingAnnotationSpan = jQuery("#" + self._annotationRegistry.getAnnotation(currentAnnotation.getExtraData().referenceId).getIdBase());
      var arrow = new kat.display.ArrowConnector(baseAnnotationSpan, pointingAnnotationSpan);
      $("#" + annotationId).on('shown', function () {
        arrow.render();
      })
      $("#" + annotationId).on('hide', function () {
        arrow.destroy();
      });
    },

    /**
     * Encapsulates the behavior of the Display by adding classes to
     * annotated spans and creating display handlers.
     */
    run   : function () {
      this.addSpecialClassToSpans();
      this.createTooltipDisplays();
    },
    /**
     * Resets the display object
     */
    reset : function () {
      //remove the popovers
      for (var i = 0; i < this.$annotations.length; i++) {
        $("#" + this.$annotations[i].id).popover('destroy');
      }
      //remove the special class span
      $("." + this.getSpecialClass()).each(function () {
        $(this).children().unwrap();
      })
    },
    /**
     * Updates the display
     */
    update: function () {
      this.reset();
      this.run();
    }
  },

  internals: {
    registerEditAnnotationCallback: function () {
      var self = this;
      $("body").off("click.kat", ".edit-annotation");
      $("body").on("click.kat", ".edit-annotation", function () {
        var id = $(this).attr('id').split('edit-annotation-');
        id = id[1];
        $("#" + id).popover('hide');
        var annotation = self._annotationRegistry.getAnnotation(id);
        var concept = self._conceptRegistry.lookupConcept(annotation["$concept"]);
        var annotationEditForm = new kat.display.AnnotationEditForm(annotation, concept, self._annotationRegistry, self._conceptRegistry, self);
        annotationEditForm.run();
      });
    },

    annotationRegistry: null,
    conceptRegistry   : null
  }
});
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
 * Creates an svg arrow that can be used to connect two dom elements, for example a
 * reference field annotation to the referenced item.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.ArrowConnector", {

    init: function (arrowBaseElement, arrowHeadElement) {
        this._arrowBaseElement = arrowBaseElement;
        this._arrowHeadElement = arrowHeadElement;
    },

    methods: {
        render: function () {
            if (!this._connection) {
                this._createSVGArrow();
            }
        },

        destroy: function () {
            if (this._connection) {
                jsPlumb.detach(this._connection, {
                    forceDetatch: true
                })
                this._connection = null;
            }
        }
    },

    internals: {
        arrowBaseElement: null,
        arrowHeadElement: null,
        connection: null,

        createSVGArrow: function () {
            this._connection = jsPlumb.connect({
                source: this._arrowBaseElement.attr('id'),
                target: this._arrowHeadElement.attr('id'),
                overlays: [
                    "Arrow"
                ],
                paintStyle: {
                    strokeStyle: "#5b9ada",
                    lineWidth: 3
                },
                endpoint: "Blank",
                connector: ["Bezier", {curviness: 70}]
            });
        }

    }


})
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
 * This class provides a tool for displaying and handling the KAT Control Panel.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationOntologyViewer", {
  init     : function (ontologyRegistry, conceptRegistry, annotationRegistry) {
    this._ontologyRegistry = ontologyRegistry;
    this._conceptRegistry = conceptRegistry;
    this._annotationRegistry = annotationRegistry;
  },
  methods  : {
    run: function () {
      this._registerViewerLink();
    }
  },
  internals: {
    registerViewerLink          : function () {
      $("body").append(this.ontologyViewerLink);
      var self = this;
      $("#annotation-viewer-link a").on('click', function (event) {
        event.preventDefault();
        self._viewOntology();
      })

    },
    viewOntology                : function () {
      var ontologies = this._ontologyRegistry.getAllOntologies();
      var ontologyList = [];
      _.each(ontologies, function (ontology) {
        ontologyList.push("<li class='ontology-type-view'><a href='#'>" + ontology.getName() + "</a>" + "</li>");
      });
      ontologyList.push("<li class='active ontology-type-view'><a class='new-ontology' href='#'>New Ontology</a></li>")
      var ontologyHtml = this.viewOntologiesTemplate.replace("{annotationTabs}", ontologyList.join("\n"));
      $("#annotation-viewer-modal").remove();
      $("body").append(ontologyHtml);
      var self = this;
      $(".ontology-type-view a").on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        var ontology = null;
        $("li.ontology-type-view").removeClass("active");
        $this.parent().addClass("active");
        var deleteOntology = "";
        if ($this.hasClass("new-ontology")) {
          ontology = new kat.annotation.Ontology("", "");
        } else {
          ontology = self._ontologyRegistry.lookupOntology($this.text());
          deleteOntology = '<span class="pull-right"><button id = "delete-' + ontology.getName() + '" class="btn btn-danger delete-ontology" data-dismiss="modal" type="button">Delete this annotation ontology</button><label class="checkbox"><input type="checkbox" name="delete-ontology">all annotations of this type too</label></span>';
        }
        var formHtml = self.ontologyHtmlForm.replace("{annotationName}", ontology.getName())
          .replace("{annotationText}", ontology.getDefinition())
          .replace("{delete-annotation}", deleteOntology);
        $("#annotation-viewer-contents").html(formHtml);
        self._registerSaveHandler();
        self._registerDeleteHandler();
      })
      $("#annotation-viewer-modal").modal("show");
      self._registerClearRegistryHandler();
      self._registerDeleteAllAnnotationsHandler();
      self._registerShowHideAllAnnotations();
      self._registerDisplayAllConnections();
      $(".active.ontology-type-view a").click();
    },
    registerSaveHandler         : function () {
      var self = this;
      $("#annotation-loader-save").off('click.kat');
      $("#annotation-loader-save").on('click.kat', function () {
        var name = $("#annotation-type-name").val();
        var ontologyXmlString = $("#annotation-type-contents").val()
        var ontology = new kat.annotation.Ontology(name, ontologyXmlString.trim());
        //remove the old ontology from the registry
        self._ontologyRegistry.removeOntology(name);
        //remove all the concepts
        var concepts = self._conceptRegistry.getAllConcepts();
        for (var i = 0; i < concepts.length; i++) {
          if (concepts[i].getOntology() == name) {
            self._conceptRegistry.removeConcept(concepts[i].getName());
          }
        }
        //add the new ontology
        self._ontologyRegistry.addOntology(ontology);
        //add the new concepts
        var conceptsText = "The following concepts have been added:<br/>";
        var newConcepts = ontology.getDefinition().getXmlDoc().getElementsByTagName("concept");
        for (var i = 0; i < newConcepts.length; i++) {
          var conceptName = newConcepts[i].getAttribute("name");
          conceptsText += '<i class="icon-arrow-right"></i> <b>' + name + "." + conceptName + "</b><br/>";
          self._conceptRegistry.addConcept(new kat.annotation.Concept(name + "." + conceptName, newConcepts[i], name));
        }
        $.pnotify({
          title: 'KAT Message',
          text : 'The annotation ontology <b>' + ontology.getName() + '</b> was successfully saved.<br/>' + conceptsText,
          type : 'success'
        });
      })
    },
    registerClearRegistryHandler: function () {
      var self = this;
      $("#annotation-registry-clear").off('click.kat');
      $("#annotation-registry-clear").on('click.kat', function () {
        bootbox.confirm("Clearing the registry is irreversible. Do you want to continue?", function (e) {
          if (e) {
            self._ontologyRegistry.clearRegistry();
            self._conceptRegistry.clearRegistry();
            $.pnotify({
              title: 'KAT Message',
              text : 'The annotation ontology registry was successfully cleared.',
              type : 'success'
            });
          }
        });
      })
    },

    registerDeleteAllAnnotationsHandler: function () {
      var self = this;
      $("#annotations-clear").off('click.kat');
      $("#annotations-clear").on('click.kat', function () {
        bootbox.confirm("All annotation, of all types, will be deleted. This action is irreversible. Do you want to continue?", function (e) {
          if (e) {
            self._annotationRegistry.clearRegistry();
            $.pnotify({
              title: 'KAT Message',
              text : 'The annotation registry was successfully cleared.',
              type : 'success'
            });
          }
        });
      })
    },
    registerDeleteHandler              : function () {
      var self = this;
      $('.delete-ontology').off('click.kat');
      $('.delete-ontology').on('click.kat', function () {
        var that = this;
        bootbox.confirm("Removing ontologies is irreversible. Do you want to continue?", function (e) {
          if (e) {
            var id = $(that).attr('id').split("delete-");
            var ontologyName = id[1];
            //remove ontology
            self._ontologyRegistry.removeOntology(ontologyName);
            //remove all concepts
            for (var i = 0; i < self._conceptRegistry.getAllConcepts().length; i++) {
              if (self._conceptRegistry.getAllConcepts()[i].getOntology() == ontologyName) {
                self._conceptRegistry.removeConcept(self._conceptRegistry.getAllConcepts()[i].getName());
              }
            }
            var deleteAnnotations = "";
            //if delete-annotations is checked, delete annotations
            if ($('input[name="delete-ontology"]').is(":checked")) {
              var countAnnotations = 0;
              for (var i = 0; i < self._annotationRegistry.getAnnotations().length; i++) {
                if (self._annotationRegistry.getAllAnnotations()[i].getOntology() == ontologyName) {
                  countAnnotations++;
                  self._annotationRegistry.removeConcept(self._annotationRegistry.getAllAnnotations()[i].getName());
                }
              }
              deleteAnnotations = "</br>" + countAnnotations + " annotations of were deleted as well.";
            }
            $.pnotify({
              title: 'KAT Message',
              text : 'The ontology <b>' + ontologyName + '</b> was successfully deleted.' + deleteAnnotations,
              type : 'success'
            });
          }
        })

      });
    },
    registerShowHideAllAnnotations     : function () {
      $("#show-all-annotations").off("click.kat");
      $("#show-all-annotations").on("click.kat", function () {
        $("." + kat.Constants.Display.SpecialClass).popover("show");
        $.pnotify({
          title: 'KAT Message',
          text : 'All annotations shown.',
          type : 'success'
        });
        $("#close-cpanel").click();
      })
      $("#hide-all-annotations").off("click.kat");
      $("#hide-all-annotations").on("click.kat", function () {
        $("." + kat.Constants.Display.SpecialClass).popover("hide");
        $.pnotify({
          title: 'KAT Message',
          text : 'All annotations hidden.',
          type : 'success'
        });
        $("#close-cpanel").click();
      })

    },

    registerDisplayAllConnections: function () {
      var self = this;
      jQuery("#show-all-connections").click(function () {
        if (!self._arrowsDisplayed) {
          self._arrowsDisplayed = true;
          var annotations = self._annotationRegistry.getAnnotations();
          for (var i = 0; i < annotations.length; i++) {
            var currentAnnotation = annotations[i];
            if (currentAnnotation.getExtraData().referenceId) {
              var referencedAnnotation = self._annotationRegistry.getAnnotation(currentAnnotation.getExtraData().referenceId);
              var arrowConnector = new kat.display.ArrowConnector(jQuery("#" + currentAnnotation.getIdBase()), jQuery("#" + referencedAnnotation.getIdBase()));
              self._arrowConnectors.push(arrowConnector);
              arrowConnector.render();
            }
          }

          $.pnotify({
            title: 'KAT Message',
            text : 'All connections shown.',
            type : 'success'
          });
          $("#close-cpanel").click();
        }
        else {
          for (var i = 0; i < self._arrowConnectors.length; i++) {
            self._arrowConnectors[i].destroy();
          }
          self._arrowConnectors = [];
          self._arrowsDisplayed = false;

          $.pnotify({
            title: 'KAT Message',
            text : 'All connections hidden.',
            type : 'success'
          });
          $("#close-cpanel").click();
        }
      })
    },

    ontologyRegistry  : null,
    conceptRegistry   : null,
    annotationRegistry: null,
    arrowConnectors   : [],
    arrowsDisplayed   : false
  },
  statics  : {
    viewOntologiesTemplate: '<div id="annotation-viewer-modal" class="modal hide fade"><div class="modal-header"><button id="close-cpanel" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><i id="hide-all-annotations" title="Hide all annotations" class="icon-eye-close pull-right"></i> <i title="Show all annotations" id="show-all-annotations" class="icon-eye-open pull-right"></i> <i title="Show all reference connections" id="show-all-connections" class="icon-refresh pull-right"></i><h3>' + kat.Constants.Display.CPanelTitle + '</h3></div>  <div class="modal-body"> <ul class="nav nav-tabs" id="annotation-tabs">{annotationTabs}</ul> <div id="annotation-viewer-contents"></div>  </div>  <div class="modal-footer">    <a href="#" data-dismiss="modal" data-dismiss="modal" class="btn">Close</a> <a href="#" data-dismiss="modal" id="annotation-registry-clear" class="pull-left btn btn-danger">Clear Registry</a><a href="#" data-dismiss="modal" id="annotations-clear" class="pull-left btn btn-danger">Clear All Annotations</a>    <a href="#" data-dismiss="modal" id="annotation-loader-save" class="btn btn-primary">Save changes</a>  </div></div>',
    ontologyHtmlForm      : '<input id="annotation-type-name" type="text" value="{annotationName}" placeholder="Annotation Name"/>{delete-annotation} <textarea id="annotation-type-contents" style="width: 90%" rows="14">{annotationText}</textarea>',
    ontologyViewerLink    : '<div id="annotation-viewer-link">      <a href="#">' + kat.Constants.Display.CPanelTitle + '</a></div>'
  }

})




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
 * Retrieves the document and the annotations from the CoreTeX service and populates
 * the internal registry
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.remote.CoreTeXAnnotationRetriever", {
  init: function (serviceUrl, conceptRegistry, documentId, container) {
    this._serviceUrl = serviceUrl;
    this._conceptRegistry = conceptRegistry;
    this._documentId = documentId;
    this._container = container;
  },

  methods: {
    loadRegistry: function (annotationRegistry) {
      this._annotationRegistry = annotationRegistry;
      this._retrieveDocumentAndAnnotations();
    }
  },

  internals: {
    serviceUrl        : null,
    conceptRegistry   : null,
    annotationRegistry: null,
    documentId        : null,


    retrieveDocumentAndAnnotations: function () {
      var retrievalUrl = this._serviceUrl + "?" + this.KServiceParameters + "&" + this.KDocumentIdParameter + "=" + this._documentId;
      jQuery.get(retrievalUrl,function (data) {
        var decodedData = JSON.parse(data);
        var document = decodedData.document;
        var annotations = decodedData.annotations;
        if (document == null || annotations == null) {
          throw Error("Error while loading the document from the CoreTeX service.");
        }
        this._setupDocument(document);
        this._registerAnnotations(annotations);
      }).fail(function () {
          throw Error("Could not load the document and annotations from the specified url: " + retrievalUrl)
        })
    },

    setupDocument: function (documentString) {
      this._container.html(documentString);
    },

    registerAnnotations: function (annotations) {
      for (var annotationId in annotations) {
        var annotation = new kat.annotation.Annotation(annotations[annotationId].baseId,
          annotations[annotationId].idExtent,
          this._conceptRegistry.lookupConcept(annotations[annotationId].concept),
          annotations[annotationId].values,
          annotationId,
          annotations[annotationId].extraData
        )
        this._annotationRegistry.addAnnotation(annotation);
      }
    }
  },

  statics: {
    KServiceParameters  : "service=KAT",
    KDocumentIdParameter: "documentId"
  }


})
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
 * Sends the annotations being created on this document to the CoreTeX system.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.remote.CoreTexAnnotationInserter", {
  init: function (serviceUrl, documentId, conceptRegistry) {
    this._serviceUrl = serviceUrl;
    this._documentId = documentId;
    this._conceptRegistry = conceptRegistry;
  },

  methods: {
    save: function (annotationRegistry) {
      this._annotationRegistry = annotationRegistry;
      this._postData();
    }
  },

  internals: {
    serviceUrl        : null,
    annotationRegistry: null,
    documentId        : null,
    conceptRegistry   : null,

    postData: function () {
      var postUrl = this._serviceUrl + "?" + this.KServiceParameters + "&" + this.KDocumentIdParameter
      jQuery.post(postUrl, this._serializePostData(),function () {
        $.pnotify({
          title: 'Success',
          text : "The annotations were successfully saved.",
          type : 'success'
        });
      }).fail(function () {
          window.error("Could not save the annotations.");
        })
    },

    serializeAnnotation: function (annotation) {
      var serializedAnnotation = {
        id       : annotation.getId(),
        idBase   : annotation.getIdBase(),
        idExtent : annotation.getIdExtent(),
        values   : annotation.getAnnotationValues(),
        concept  : annotation.getConcept(),
        extraData: annotation.getExtraData()
      }
      return serializedAnnotation
    },

    serializePostData: function () {
      var rdfAnnotations = "";
      var serializedAnnotations = [];
      var self = this;
      var annotations = this._annotationRegistry.getAnnotations();
      _.each(annotations, function (annotation) {
        rdfAnnotations += annotation.toRDF(self._conceptRegistry);
        serializedAnnotations.push(self._serializeAnnotation(annotation));
      });

      var serializedObj = {};
      serializedObj[this.KAnnotationsParameter] = rdfAnnotations;
      serializedObj[this.KJSONAnnotationsParameter] = JSON.stringify(serializedAnnotations);
      serializedObj[this.KDocumentIdParameter] = this._documentId;

      return serializedObj;
    }
  },

  statics: {
    KServiceParameters       : "service=KAT",
    KDocumentIdParameter     : "id",
    KAnnotationsParameter    : "annotations",
    KJSONAnnotationsParameter: "jsannotations"
  }
})




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
 * Describes an annotation that was collected from a user and can be saved and transported over
 * network
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Annotation", {

  /**
   * Constructor for the class
   * @param {String} idBase the id of the starting selection token
   * @param {String} idExtent the id of the last selection token
   * @param {String} concept the concept associated with this annotation
   * @param {Object} values the form values associated with the concept fields. The format is {conceptFieldName : userSuppliedValue}
   * @param {String} id optional, a UUID, if none given one will be generated automatically
   * @param {Object} extraData optional, an object containing extra information about the annotation
   */
  init: function (idBase, idExtent, concept, values, id, extraData) {
    this.$idBase = idBase;
    this.$idExtent = idExtent;
    this.$ontology = concept.slice(0, concept.indexOf('.'));
    this.$concept = concept;
    this.$annotationValues = values;
    this.$id = id || kat.util.Util.generateUUID();
    this.$extraData = extraData || {};
  },

  properties: {
    idBase          : {value: null, writable: false},
    idExtent        : {value: null, writable: false},
    ontology        : {value: null, writable: false},
    concept         : {value: null, writable: false},
    annotationValues: {value: null, writable: false},
    id              : {value: null, writable: false},
    extraData       : {value: {}, writable: false}
  },

  methods: {
    /**
     * Serializes the annotation *data* in JSON format. JSON.parse will not return a @link{kat.annotation.Annotation}, use
     * the static method included in this class, fromSerializedString to build a full featured annotation object
     *
     * @return {String}
     */
    serialize: function () {
      return JSON.stringify({
        idBase          : this.getIdBase(),
        idExtent        : this.getIdExtent(),
        ontology        : this.getOntology(),
        concept         : this.getConcept(),
        annotationValues: this.getAnnotationValues(),
        id              : this.getId(),
        extraData       : this.getExtraData()
      })
    },

    /**
     * Returns the text to which the annotation is bound
     * @return Object {text: The text of the annotation, trimmedText: The text trimmed after the first word}
     */
    getText: function () {
      var fullText = "";
      var trimmedText = "";
      var counter = 0;
      $("#" + this.getIdBase()).nextAll("#" + this.getIdExtent()).andSelf().each(function () {
        fullText += $(this).html();
        if (!counter) {
          trimmedText = fullText;
        }
        if (counter == 1) {
          trimmedText += "...";
        }
        counter++;
      });
      return {"text": fullText, "trimmedText": trimmedText};
    },

    toRDF: function (conceptRegistry) {
      var rdf = new kat.util.XMLDoc(conceptRegistry.lookupConcept(this.getConcept()).getDefinition().getXmlDoc().getElementsByTagName("RDF")[0]).toString();
      var values = this.getAnnotationValues();
      for (var key in values) {
        rdf = rdf.replace(new RegExp(key, "g"), values[key]);
      }
      return rdf;
    }
  },

  statics: {
    /**
     * Returns a full featured Annotation object from a json serialization of its data.
     *
     * @param {String} json the data of the annotation in json format
     * @return {kat.annotation.Annotation}
     */
    fromSerializedString: function (json) {
      var values = JSON.parse(json);
      return new kat.annotation.Annotation(values.idBase, values.idExtent, values.concept, values.annotationValues, values.id, values.extraData);
    }
  }

})
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
 * Describes an annotation registry that keeps track of all the annotations for the current document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.AnnotationRegistry", {

  /**
   * Constructor for the class
   */
  init: function (storageService, retrievalService) {
    if (storageService) {
      this._storageService = storageService;
    }
    if (retrievalService) {
      this._retrievalService = retrievalService;
    }
    this._loadRegistry();
  },

  methods: {
    /**
     * Add an annotation to the registry. It will be automatically persisted to the selected storage medium.
     * @param annotation the annotation to be saved
     * @param {Boolean} doNotTriggerSave set to true if the insertion should not persist the annotation to the server
     */
    addAnnotation   : function (annotation, doNotTriggerSave) {
      this._registry[annotation.getId()] = annotation;
      if (!doNotTriggerSave) {
        this._saveRegistry();
      }
    },
    /**
     * Deletes an annotation from the registry
     * @param id - the id of the annotation to be deleted
     */
    deleteAnnotation: function (id) {
      delete this._registry[id];
      this._saveRegistry();
    },
    /**
     * Returns a list of the annotations in the system.
     * @return {Array}
     */
    getAnnotations  : function () {
      var annotations = [];
      for (var name in this._registry) {
        annotations.push(this._registry[name]);
      }
      return annotations;
    },

    /**
     * Returns th annotation with the given id.
     * @return Object
     */
    getAnnotation: function (id) {
      var returnedAnnotation = null;
      for (var annotation in this._registry) {
        if (this._registry[annotation]["$id"] == id) {
          returnedAnnotation = this._registry[annotation];
          break;
        }
      }
      return returnedAnnotation;
    },

    /**
     * Returns the list of annotations corresponding to the given concept
     * @param conceptName
     */
    getAnnotationsForConcept: function (conceptName) {
      var returnedAnnotations = new Array();
      for (var annotation in this._registry) {
        if (this._registry[annotation]["$concept"] == conceptName) {
          returnedAnnotations.push(this._registry[annotation]);
        }
      }
      return returnedAnnotations;
    },

    /**
     * Removes all annotations from the registry and from the storage medium.
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
      this.getDisplay().$annotations = [];
      this.getDisplay().reset();
    }
  },

  internals: {
    registry      : {},
    storageService: null,

    /**
     * Persists the registry to the given storage medium.
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
      if (this._storageService) {
        this._storageService.save(this);
      }
    },

    /**
     * Loads the registry from the given storage medium
     */
    loadRegistry: function () {
      if (this._retrievalService) {
        this._retrievalService.loadRegistry(this);
      }
      else if (localStorage.getItem(this.KLocalStorageRegistryKey)) {
        var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
        for (var name in values) {
          this._registry[name] = kat.annotation.Annotation.fromSerializedString(values[name]);
        }
      }
      else {
        this._registry = {};
      }
    }

  },

  properties: {
    display: {}
  },

  statics: {
    KLocalStorageRegistryKey: "annotationRegistry"
  }

});
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
 * Class to describe an annotation concept. Annotation concepts describe the annotation model (i.e. the fields contained
 * by the annotation) and the behaviour of the annotation (i.e. user interaction and display).
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Concept", {

  /**
   * Constructor for the class
   * @param {String} name the name of the concept
   * @param {String} definition the definition in xml format of the concept
   * @param {String} ontology definition
   */
  init: function (name, definition, ontology) {
    this.setName(name);
    this.setConceptName(name.slice(name.indexOf('.') + 1));
    this.setDefinition(new kat.util.XMLDoc(definition));
    this.setOntology(ontology);
  },


  properties: {
    name      : {
      value: null
    },
    conceptName : {
      value: null,
    },
    definition: {
      value: null
    },
    ontology: {
      value: null
    }
  },

  methods: {
    /**
     * Serializes the concept into a JSON representation.
     * @return {String} json representation of the concept
     */
    serialize: function () {
      return JSON.stringify({
        name      : this.getName(),
        definition: this.getDefinition().toString(),
        ontology  : this.getOntology()
      })
    }
  },

  statics: {
    /**
     * Constructs a new Concept from a json representation
     * @param {String} json the json representation
     * @return {kat.annotation.Concept}
     */
    fromSerializedString: function (json) {
      var obj = JSON.parse(json);
      return new kat.annotation.Concept(obj.name, obj.definition, obj.ontology);
    }
  }

})
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
 * A registry to keep track of all available concepts for this document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.ConceptRegistry", {

  init: function () {
    if (window.localStorage.getItem(this.KLocalStorageRegistryKey)) {
      this._loadRegistry();
    }
    else {
      this._registry = {};
    }
  },

  methods: {
    /**
     * Adds a concept to the registry
     * @param {kat.annotation.Concept} concept the concept to be added
     */
    addConcept: function (concept) {
      this._registry[concept.getName()] = concept;
      this._saveRegistry();
    },

    /**
     * Looks up an annotation concept in the registry
     * @param {String} concept the annotation type name
     * @return {kat.annotation.Concept}
     */
    lookupConcept: function (concept) {
      return this._registry[concept];
    },

    /**
     * Returns a concept by the resource type its rdf representation contains.
     * @param {String} resourceUrl any valid resource url
     * @return {kat.annotation.Concept}
     */
    lookupConceptByResource: function (resourceUrl) {
      for (var conceptName in this._registry) {
        if (this._registry[conceptName].getDefinition().filter("rdf:type").getAttribute("rdf:resource") == resourceUrl) {
          return this._registry[conceptName];
        }
      }
      return null;
    },

    /**
     * Removes an annotation concept from the registry.
     * @param {String} conceptName the name of the concept
     */
    removeConcept: function (conceptName) {
      delete this._registry[conceptName];
      this._saveRegistry();
    },

    /**
     * Returns all the concepts in the registry as an array
     * @return {kat.annotation.Concept[]}
     */
    getAllConcepts: function () {
      var concepts = [];
      for (var name in this._registry) {
        concepts.push(this._registry[name]);
      }
      return concepts;
    },

    /**
     * Returns all the concepts corresponding to the given ontology
     * @return {kat.annotation.Concept[]}
     */
    getConceptsByOntology: function (ontology) {
      var concepts = [];
      for (var name in this._registry) {
        if (this._registry[name].getOntology() == ontology) {
          concepts.push(this._registry[name]);
        }
      }
      return concepts;
    },

    /**
     * Removes all entries from the registry
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
    }
  },

  internals: {
    registry: {},

    /**
     * Saves the registry to the medium of storage
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
    },

    /**
     * Loads the registry from the medium of storage
     */
    loadRegistry: function () {
      var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
      for (var name in values) {
        this._registry[name] = kat.annotation.Concept.fromSerializedString(values[name]);
      }
    }
  },

  statics: {
    KLocalStorageRegistryKey: "conceptsRegistry"
  }

})
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
 * Class to describe an annotation ontology. Annotation ontologies describe the annotation model (i.e. the fields contained
 * by the annotation) and the behaviour of the annotation (i.e. user interaction and display).
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Ontology", {

  /**
   * Constructor for the class
   * @param {String} name the name of the ontology
   * @param {String} definition the definition in xml format of the concept
   */
  init: function (name, definition) {
    this.setName(name);
    if(definition){
      this.setDefinition(new kat.util.XMLDoc(definition));
    }
    else{
      this.setDefinition("");
    }
  },


  properties: {
    name      : {
      value: null
    },
    definition: {
      value: null
    }
  },

  methods: {
    /**
     * Serializes the concept into a JSON representation.
     * @return {String} json representation of the concept
     */
    serialize: function () {
      return JSON.stringify({
        name      : this.getName(),
        definition: this.getDefinition().toString()
      })
    }
  },

  statics: {
    /**
     * Constructs a new Concept from a json representation
     * @param {String} json the json representation
     * @return {kat.annotation.AnnotationType}
     */
    fromSerializedString: function (json) {
      var obj = JSON.parse(json);
      return new kat.annotation.Ontology(obj.name, obj.definition);
    }
  }

})


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
 * A registry to keep track of all available ontologies for this document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.OntologyRegistry", {

  init: function () {
    if (window.localStorage.getItem(this.KLocalStorageRegistryKey)) {
      this._loadRegistry();
    }
    else {
      this._registry = {};
    }
  },

  methods: {
    /**
     * Adds a concept to the registry
     * @param {kat.annotation.Concept} concept the concept to be added
     */
    addOntology: function (concept) {
      this._registry[concept.getName()] = concept;
      this._saveRegistry();
    },

    /**
     * Looks up an annotation concept in the registry
     * @param {String} concept the annotation type name
     * @return {kat.annotation.Concept}
     */
    lookupOntology: function (concept) {
      return this._registry[concept];
    },

    /**
     * Removes an annotation concept from the registry.
     * @param {String} conceptName the name of the concept
     */
    removeOntology: function (ontologyName) {
      delete this._registry[ontologyName];
      this._saveRegistry();
    },

    /**
     * Returns all the concepts in the registry as an array
     * @return {kat.annotation.Concept[]}
     */
    getAllOntologies: function () {
      var concepts = [];
      for (var name in this._registry) {
        concepts.push(this._registry[name]);
      }
      return concepts;
    },

    /**
     * Removes all entries from the registry
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
    }
  },

  internals: {
    registry: {},

    /**
     * Saves the registry to the medium of storage
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
    },

    /**
     * Loads the registry from the medium of storage
     */
    loadRegistry: function () {
      var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
      for (var name in values) {
        this._registry[name] = kat.annotation.Ontology.fromSerializedString(values[name]);
      }
    }
  },

  statics: {
    KLocalStorageRegistryKey: "ontologiesRegistry"
  }

});




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
 * The main entry point of the service. The KAT Service requires a CSS3/XPATH selector to identify
 * the container on which annotations can be made, a coretex service url and a document identifier for
 * the annotated document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */


FlancheJs.defineClass("kat.main.KATService", {
  init: function (selector, coretexUrl, documentName) {
    this._selector = selector;
    this._ontologyRegistry = new kat.annotation.OntologyRegistry();
    this._conceptRegistry = new kat.annotation.ConceptRegistry();
    this._coretexInserter = new kat.remote.CoreTexAnnotationInserter(coretexUrl, documentName, this._conceptRegistry);
    this._coretexRetriever = new kat.remote.CoreTeXAnnotationRetriever(coretexUrl, documentName, this._conceptRegistry, jQuery(selector));
    this._annotationRegistry = new kat.annotation.AnnotationRegistry();
  },

  methods: {
    run: function () {

      //register error handler
      window.onerror = function (message) {
        $.pnotify({
          title: 'KAT Error',
          text : message,
          type : 'error'
        })
      }
      var preProcessor = new kat.preprocessor.TextPreprocessor(this._selector, "", this._ontologyRegistry, this._conceptRegistry, this._annotationRegistry);
      preProcessor.run();
      var currentAnnotations = this._annotationRegistry.getAnnotations();
      var renderedAnnotations = [];
      for (var i = 0; i < currentAnnotations.length; i++) {
        var renderer = new kat.display.AnnotationRenderer(currentAnnotations[i], this._conceptRegistry);
        renderedAnnotations.push(renderer.render())
      }
      var displayer = new kat.Display(renderedAnnotations, this._annotationRegistry, this._conceptRegistry);
      displayer.run();
      preProcessor.setDisplay(displayer);
      this._annotationRegistry.setDisplay(displayer);
      var ontologyViewer = new kat.display.AnnotationOntologyViewer(this._ontologyRegistry, this._conceptRegistry, this._annotationRegistry);
      ontologyViewer.run();
    }
  },

  internals: {
    selector          : null,
    annotationRegsitry: null,
    ontologyRegistry  : null,
    conceptRegistry   : null,
    coretexInserter   : null,
    coretexRetriever  : null
  }

})

//only used for demo, to retrieve and add an ontology
//jQuery.get("http://localhost/katGit/test/newAnnotationOntology.xml", function(xmlOntology){
//  var ontology = new kat.annotation.Ontology("OMDoc", xmlOntology);
//  var name = "OMDoc";
//  self._ontologyRegistry.addOntology(ontology);
//  var newConcepts = ontology.getDefinition().getXmlDoc().getElementsByTagName("concept");
//  for (var i = 0; i < newConcepts.length; i++) {
//    var conceptName = newConcepts[i].getAttribute("name");
//    //conceptsText += '<i class="icon-arrow-right"></i> <b>' + name + "." + conceptName + "</b><br/>";
//    self._conceptRegistry.addConcept(new kat.annotation.Concept(name + "." + conceptName, newConcepts[i], name));
//  }
//})
