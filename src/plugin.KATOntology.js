/**
Copyright (c) 2014 by the KWARC Group (http://kwarc.info)

KAT is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

KAT is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with KAT.  If not, see <http://www.gnu.org/licenses/>
*/

Annotator.Plugin.KATOntology = function (element, ontology) {
    var plugin = {};

    var theOntology = new OntologyParser(ontology);

    plugin.pluginInit = function () {

        var me = this;

        this.annotator.on("annotationEditorShown", function(editor, annotation){
            console.log("editor");
        });

        this.annotator.on("annotationEditorSubmit", function(editor, annotation){
            annotation.text = "...prefix..." + annotation.text;
        });

        this.annotator.on("annotationViewerShown", function(editor, annotation){
            console.log("viewer");
        });
    };

    return plugin;
}
