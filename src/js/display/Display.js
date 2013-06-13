/* 
 * Creates and controls the annotation displays.
 * 
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.Display", {
    /**
     * Class constructor
     * @param Array[Object{idBase, idExtent, content}] annotations The array of
     * annotations to be displayed.
     * @param {string} specialClass The class to be added to the words having
     * annotations bound.
     */
    init: function(annotations, specialClass) {
        this.setAnnotations(annotations);
        if (specialClass) {
            this.setSetSpecialClass(specialClass);
        }
    },
    properties: {
        annotations: {
            value: []
        },
        specialClass: {
            value: kat.Constants.Display.SpecialClass
        }
    },
    methods: {
        /**
         * Adds the class to the spans havin annotations bound
         */
        addSpecialClassToSpans: function() {
            for (var i = 0; i < this.getAnnotations().length; i++) {
                var prefixedId1 = this.$annotations[i]["idBase"].split("-");
                var id1 = parseInt(prefixedId1[prefixedId1.length - 1]);
                prefixedId1.splice(prefixedId1.length - 1, 1);
                var prefix = prefixedId1.join("-");

                var prefixedId2 = this.$annotations[i]["idExtent"].split("-");
                var id2 = parseInt(prefixedId2[prefixedId2.length - 1]);

                //exchange if necessary, to start from the smallest
                if (id1 > id2) {
                    var aux = id2;
                    id2 = id1;
                    id1 = aux;
                }
                
                var annotatedIds = [];
                for (var j = id1; j <= id2; j++) {
                    annotatedIds[j-id1] = "#" + prefix + "-" + j;
                }
                var currentAnnotationId = kat.Constants.Display.AnnotationIdPrefix;
                currentAnnotationId += "-" + parseInt(Math.random()*100000);                        
                $(annotatedIds.join(",")).wrapAll("<span id='" + currentAnnotationId + "' class='" + this.getSpecialClass() + "'>");
                this.$annotations[i]["id"] = currentAnnotationId;

            }
        },
        createTooltipDisplays: function() {
            for (var i = 0; i < this.getAnnotations().length; i++) {
                var tooltipsterOptions = {
                    "trigger": kat.Constants.Display.Triger,
                    "interactive": true,
                    "content": this.$annotations[i].content
                }
                $("#" + this.$annotations[i].id).tooltipster(tooltipsterOptions);
            }
        },
        /**
         * Encapsulates the behavior of the Display by adding classes to
         * annotated spans and creating display handlers.
         */
        run: function() {
            this.addSpecialClassToSpans();
            this.createTooltipDisplays();
        }
    }
});
