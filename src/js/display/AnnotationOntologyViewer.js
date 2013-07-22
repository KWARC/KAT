/**
 * This class provides a tool for displaying and loading ontologies into the systen
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationOntologyViewer", {
  init: function(ontologyRegistry, conceptRegistry, annotationRegistry) {
    this._ontologyRegistry = ontologyRegistry;
    this._conceptRegistry = conceptRegistry;
    this._annotationRegistry = annotationRegistry;
  },
  methods: {
    run: function() {
      this._registerViewerLink();
    }
  },
  internals: {
    registerViewerLink: function() {
      $("body").append(this.ontologyViewerLink);
      var self = this;
      $("#annotation-viewer-link a").on('click', function(event) {
        event.preventDefault();
        self._viewOntology();
      })

    },
    viewOntology: function() {
      var ontologies = this._ontologyRegistry.getAllOntologies();
      var ontologyList = [];
      _.each(ontologies, function(ontology) {
        ontologyList.push("<li class='ontology-type-view'><a href='#'>" + ontology.getName() + "</a>" + "</li>");
      });
      ontologyList.push("<li class='active ontology-type-view'><a class='new-ontology' href='#'>New Ontology</a></li>")
      var ontologyHtml = this.viewOntologiesTemplate.replace("{annotationTabs}", ontologyList.join("\n"));
      $("#annotation-viewer-modal").remove();
      $("body").append(ontologyHtml);
      var self = this;
      $(".ontology-type-view a").on('click', function(event) {
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
      $(".active.ontology-type-view a").click();
    },
    registerSaveHandler: function() {
      var self = this;
      $("#annotation-loader-save").off('click.kat');
      $("#annotation-loader-save").on('click.kat', function() {
        var name = $("#annotation-type-name").val();
        var ontologyXmlString = $("#annotation-type-contents").val()
        var ontology = new kat.annotation.Ontology(name, ontologyXmlString);
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
          console.log(newConcepts[i]);
          self._conceptRegistry.addConcept(new kat.annotation.Concept(name + "." + conceptName, newConcepts[i], name));
        }
        $.pnotify({
          title: 'KAT Message',
          text: 'The annotation ontology <b>' + ontology.getName() + '</b> was successfully saved.<br/>' + conceptsText,
          type: 'success'
        });
      })
    },
    registerClearRegistryHandler: function() {

      var self = this;
      $("#annotation-registry-clear").off('click.kat');
      $("#annotation-registry-clear").on('click.kat', function() {
        bootbox.confirm("Clearing the registry is irreversible. Do you want to continue?", function(e) {
          if (e) {
            self._ontologyRegistry.clearRegistry();
            self._conceptRegistry.clearRegistry();
            $.pnotify({
              title: 'KAT Message',
              text: 'The annotation ontology registry was successfully cleared.',
              type: 'success'
            });
          }
        });
      })

    },
    
    registerDeleteAllAnnotationsHandler: function(){
      var self = this;
      $("#annotations-clear").off('click.kat');
      $("#annotations-clear").on('click.kat', function() {
        bootbox.confirm("All annotation, of all types, will be deleted. This action is irreversible. Do you want to continue?", function(e) {
          if (e) {
            self._annotationRegistry.clearRegistry();
            $.pnotify({
              title: 'KAT Message',
              text: 'The annotation registry was successfully cleared.',
              type: 'success'
            });
          }
        });
      })
    },
    registerDeleteHandler: function() {
      var self = this;
      $('.delete-ontology').off('click.kat');
      $('.delete-ontology').on('click.kat', function() {
        var that = this;
        bootbox.confirm("Removing ontologies is irreversible. Do you want to continue?", function(e) {
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
              text: 'The ontology <b>' + ontologyName + '</b> was successfully deleted.' + deleteAnnotations,
              type: 'success'
            });
          }
        })

      });
    },
    ontologyRegistry: null,
    conceptRegistry: null,
    annotationRegistry: null,
  },
  statics: {
    viewOntologiesTemplate: '<div id="annotation-viewer-modal" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>Ontology Viewer</h3></div>  <div class="modal-body"> <ul class="nav nav-tabs" id="annotation-tabs">{annotationTabs}</ul> <div id="annotation-viewer-contents"></div>  </div>  <div class="modal-footer">    <a href="#" data-dismiss="modal" data-dismiss="modal" class="btn">Close</a> <a href="#" data-dismiss="modal" id="annotation-registry-clear" class="pull-left btn btn-danger">Clear Registry</a><a href="#" data-dismiss="modal" id="annotations-clear" class="pull-left btn btn-danger">Clear All Annotations</a>    <a href="#" data-dismiss="modal" id="annotation-loader-save" class="btn btn-primary">Save changes</a>  </div></div>',
    ontologyHtmlForm: '<input id="annotation-type-name" type="text" value="{annotationName}" placeholder="Annotation Name"/>{delete-annotation} <textarea id="annotation-type-contents" style="width: 90%" rows="14">{annotationText}</textarea>',
    ontologyViewerLink: '<div id="annotation-viewer-link">      <a href="#">View Annotation Ontologies</a></div>'
  }

})
