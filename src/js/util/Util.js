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
