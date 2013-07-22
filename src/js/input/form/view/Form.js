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
