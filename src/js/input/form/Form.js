/**
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
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
