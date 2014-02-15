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
                options += "<option>" + concepts[i].getConceptName() + "</option>\n";
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
