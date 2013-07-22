/**
 * Describes an annotation that was collected from a user and can be saved and transported over
 * network
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Annotation", {

  /**
   * Constructor for the class
   * @param {String} idBase the id of the starting selection token
   * @param {String} idExtent the id of the last selection token
   * @param {String} concept the concept associated with this annotation
   * @param {Object} values the form values associated with the concept fields. The format is {conceptFieldName : userSuppliedValue}
   * @param id optional, a UUID, if none given one will be generated automatically
   */
  init: function (idBase, idExtent, concept, values, id) {
    this.$idBase = idBase;
    this.$idExtent = idExtent;
    this.$concept = concept;
    this.$annotationValues = values;
    this.$id = id || kat.util.Util.generateUUID();
  },

  properties: {
    idBase  : {value: null, writable: false},
    idExtent: {value: null, writable: false},
    concept : {value: null, writable: false},
    annotationValues  : {value: null, writable: false},
    id      : {value: null, writable: false}
  },

  methods: {
    /**
     * Serializes the annotation *data* in JSON format. JSON.parse will not return a @link{kat.annotation.Annotation}, use
     * the static method included in this class, fromSerializedString to build a full featured annotation object
     *
     * @return {String}
     */
    serialize: function () {
      return JSON.stringify({
        idBase            : this.getIdBase(),
        idExtent          : this.getIdExtent(),
        concept           : this.getConcept(),
        annotationValues  : this.getAnnotationValues(),
        id                : this.getId()
      })
    }
  },

  statics: {
    /**
     * Returns a full featured Annotation object from a json serialization of its data.
     *
     * @param {String} json the data of the annotation in json format
     * @return {kat.annotation.Annotation}
     */
    fromSerializedString: function (json) {
      var values = JSON.parse(json);
      return new kat.annotation.Annotation(values.idBase, values.idExtent, values.concept, values.annotationValues, values.id);
    }
  }

})
