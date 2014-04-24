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

    /**
     * Description
     * @method init
     * @param {} annotation
     * @param {} concept
     * @param {} annotationRegistry
     * @param {} conceptRegistry
     * @param {} display
     * @return 
     */
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
        /**
         * Description
         * @method run
         * @return 
         */
        run: function () {
            this._renderContainer();
            jQuery("#" + this.KContainerId).on("hidden", function () {
                $(this).remove();
            })
        }
    },

    internals: {
        /**
         * Description
         * @method getAnnotationText
         * @return BinaryExpression
         */
        getAnnotationText: function () {
            var annotation = this.$annotation;
            var text = $("#" + annotation["$idBase"]).html();
            if (annotation["$idBase"] != annotation["$idExtent"]) {
                text += " ...";
            }
            return "<span class='kat-annotation-text'>" + text + "</span>";
        },
        /**
         * Description
         * @method renderContainer
         * @return 
         */
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
        /**
         * Description
         * @method addFormDocumentation
         * @return 
         */
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
        /**
         * Description
         * @method addFormExpandableInputs
         * @return 
         */
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
        /**
         * Description
         * @method populateForm
         * @return 
         */
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
        /**
         * Description
         * @method registerDeleteHandler
         * @return 
         */
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
        /**
         * Description
         * @method registerSaveHandler
         * @param {} formParser
         * @return 
         */
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
        /**
         * Description
         * @method destroy
         * @return 
         */
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

})