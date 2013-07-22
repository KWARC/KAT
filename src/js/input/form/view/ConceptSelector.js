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
