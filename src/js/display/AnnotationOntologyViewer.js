/**
 * This class provides a tool for displaying and loading ontologies into the systen
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationOntologyViewer", {

  init: function () {

  },

  methods: {
    run: function () {
      this._registerViewerLink();
    }
  },

  internals: {
    registerViewerLink: function () {
      $("body").append(this.ontologyViewerLink);
      var self = this;
      $("#annotation-viewer-link a").on('click', function (event) {
        event.preventDefault();
        self._viewOntology();
      })

    },

    viewOntology: function () {
      var ontologies = kat.annotation.AnnotationTypeRegistry.getAllTypes();
      var ontologyList = [];
      _.each(ontologies, function (ontology) {
        ontologyList.push("<li class='ontology-type-view'><a href='#'>" + ontology.getName() + "</a></li>");
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
        if ($this.hasClass("new-ontology")) {
          ontology = new kat.annotation.AnnotationType("", "");
        } else {
          ontology = kat.annotation.AnnotationTypeRegistry.lookupType($this.text());
        }
        var formHtml = self.ontologyHtmlForm.replace("{annotationName}", ontology.getName())
          .replace("{annotationText}", ontology.getXmlOntologyString());
        $("#annotation-viewer-contents").html(formHtml);
        self._registerSaveHandler();
      })
      $("#annotation-viewer-modal").modal("show");
      self._registerClearRegistryHandler();
      $(".active.ontology-type-view a").click();
    },

    registerSaveHandler: function () {
      $("#annotation-loader-save").off('click.kat');
      $("#annotation-loader-save").on('click.kat', function () {
        var name = $("#annotation-type-name").val();
        var ontologyXmlString = $("#annotation-type-contents").val()
        var ontology = new kat.annotation.AnnotationType(name, ontologyXmlString);
        kat.annotation.AnnotationTypeRegistry.removeType(name);
        kat.annotation.AnnotationTypeRegistry.addType(ontology)
        $.pnotify({
          title: 'KAT Message',
          text : 'The annotation ontology <em>' + ontology.getName() + '</em> was successfully saved.',
          type : 'success'
        });
      })
    },

    registerClearRegistryHandler: function () {
      $("#annotation-registry-clear").off('click.kat');
      $("#annotation-registry-clear").on('click.kat', function () {
        kat.annotation.AnnotationTypeRegistry.clearRegistry();
        $.pnotify({
          title: 'KAT Message',
          text : 'The annotation ontology registry was successfully cleared.',
          type : 'success'
        });
      })
    }
  },

  statics: {
    viewOntologiesTemplate: '<div id="annotation-viewer-modal" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>Ontology Viewer</h3></div>  <div class="modal-body"> <ul class="nav nav-tabs" id="annotation-tabs">{annotationTabs}</ul> <div id="annotation-viewer-contents"></div>  </div>  <div class="modal-footer">    <a href="#" data-dismiss="modal" data-dismiss="modal" class="btn">Close</a> <a href="#" data-dismiss="modal" id="annotation-registry-clear" class="pull-left btn btn-danger">Clear Registry</a>    <a href="#" data-dismiss="modal" id="annotation-loader-save" class="btn btn-primary">Save changes</a>  </div></div>',
    ontologyHtmlForm      : '<input id="annotation-type-name" type="text" value="{annotationName}" placeholder="Annotation Name"/>      <textarea id="annotation-type-contents" style="width: 90%" rows="14">{annotationText}</textarea>',
    ontologyViewerLink    : '<div id="annotation-viewer-link">      <a href="#">View Annotation Ontologies</a></div>'
  }

})
