/**
 * Contains utility functionality to be used by the service
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.util.Util", {
  init: function() {

  },
  methods: {
    /**
     * Generates a RFC4122 compliant UUID.
     * @return {String} hexadecimal string containing the UUID
     */
    generateUUID: function() {
      var uuid = UUID.generate();
      return uuid;
    },
  
    registerDocumentationPopover: function(selector) {
      var popoverOptions = {
        "title": "Documentation",
        "placement": "right",
        "content": $(selector).data("documentation")
      };
      $(selector).popover(popoverOptions);
    },
  }

})
