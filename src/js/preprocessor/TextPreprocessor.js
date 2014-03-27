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
 * Class for text preprocessing. It provides selectors
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
                var result = {
                    "baseNodeId": baseNodeId,
                    "extentNodeId": extentNodeId
                };

                Object.keys(result).forEach(function (key) {
                   result[key] = result[key].replace(/\./g, '\\.');
                });

                return result;
            }
            else {
                return undefined;
            }

        }
    },

    internals: {
        ontologyRegistry: null,

        conceptRegistry: null,

        currentLinkId: "",

        AddAnnotationHandler: function (selectedIds) {
            var self = this;

            var baseId = selectedIds["baseNodeId"]; 
            var extentId = selectedIds["extentNodeId"]; 

            //check that at least 1 annotation ontology and at least 1 concept are defined
            if (!self._ontologyRegistry.getAllOntologies().length) {
                throw Error("Please define at least 1 annotation ontology before adding annotations!");
            }
            if (!self._conceptRegistry.getAllConcepts().length) {
                throw Error("Please make sure that the annotation ontologies define at least 1 concept!");
            }
            var typeForm = new kat.display.AnnotationTypeForm(baseId, extentId, self._ontologyRegistry, self._conceptRegistry, self._anotationRegistry, self.getDisplay());
            typeForm.run();
        }
    }
});
