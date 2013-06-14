/**
 * A registry to keep track of all available annotation types
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationTypeForm", {

  init: function (idBase, idExtent) {
    this._idBase = idBase;
    this._idExtent = idExtent;
  },

  methods: {
    run: function () {
      var containerHtml = this.KModalTemplate.replace("{id}", this.KContainerId)
        .replace("{title}", kat.Constants.Display.AnnotationFormTitle)
        .replace("{renderSelect}", this._renderSelect())
        .replace("{renderForm}", this._renderForm());
      jQuery("body").append(containerHtml);
      jQuery("#" + this.KContainerId).modal();

      var self = this;
      jQuery("#kat-form-save").on("click", function () {
        var annotation = new kat.annotation.Annotation(self._idBase, self._idExtent, self._selectedAnnotationTypeName, self._formParser.getFormValues());
        kat.annotation.AnnotationRegistry.addAnnotation(annotation);
        jQuery("#" + self.KContainerId).modal("hide");
        self.destroy();
        $.pnotify({
          title: 'KAT Message',
          text: 'Annotation was successfully saved.',
          type: 'success'
        });
        var renderedAnnotation = (new kat.display.AnnotationRenderer(annotation)).render();
        var display = new kat.Display([renderedAnnotation]);
        display.run();
      })
    },

    destroy: function () {
      jQuery("#" + this.KContainerId).remove();
    }
  },

  internals: {
    idBase                    : null,
    idExtent                  : null,
    selectedAnnotationTypeName: null,
    formParser                : null,

    renderSelect: function () {
      var selectHtml = "<select id='annotation-type-selector'>{options}</select>";
      var options = []

      var isFirstType = true;
      for (var annotationTypeName in kat.annotation.AnnotationTypeRegistry.getAllTypes()) {
        if (isFirstType) {
          this._selectedAnnotationTypeName = annotationTypeName;
          isFirstType = false;
        }
        options.push("<option>" + annotationTypeName + "</option>");
      }

      var self = this;
      setTimeout(function () {
        jQuery("#annotation-type-selector").on("change", function () {
          self._selectedAnnotationTypeName = $(this).val();
          $(".kat-form-display").html(self._renderForm());
        });
      }, 50);

      return selectHtml.replace("{options}", options.join("\n"));
    },

    renderForm: function () {
      var annotationType = kat.annotation.AnnotationTypeRegistry.lookupType(this._selectedAnnotationTypeName);
      this._formParser = new kat.input.form.FormParser(annotationType.getXmlOntology().filter(this.KAnnotationInputFilter)[0]);
      var htmlForm = this._formParser.parse();
      return htmlForm;
    }
  },

  statics: {
    KAnnotationInputFilter: "//rdf:Description/annotation:annotation/annotation:input",
    KContainerId          : "kat-annotation-form-display",
    KModalTemplate        : '<div id="{id}" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>{title}</h3></div><div class="modal-body"><div class="kat-type-selector">{renderSelect}</div> <div class="kat-form-display">{renderForm}</div> </div><div class="modal-footer"><a href="#" class="btn">Close</a><a href="#" id="kat-form-save" class="btn btn-primary">Save</a></div></div>'
  }

})
