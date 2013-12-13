/**
 * Creates an svg arrow that can be used to connect two dom elements, for example a
 * reference field annotation to the referenced item.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.ArrowConnector", {

    init: function (arrowBaseElement, arrowHeadElement) {
        this._arrowBaseElement = arrowBaseElement;
        this._arrowHeadElement = arrowHeadElement;
    },

    methods: {
        render: function () {
            if (!this._connection) {
                this._createSVGArrow();
            }
        },

        destroy: function () {
            if (this._connection) {
                jsPlumb.detach(this._connection, {
                    forceDetatch: true
                })
                this._connection = null;
            }
        }
    },

    internals: {
        arrowBaseElement: null,
        arrowHeadElement: null,
        connection: null,

        createSVGArrow: function () {
            this._connection = jsPlumb.connect({
                source: this._arrowBaseElement.attr('id'),
                target: this._arrowHeadElement.attr('id'),
                overlays: [
                    "Arrow"
                ],
                paintStyle: {
                    strokeStyle: "#5b9ada",
                    lineWidth: 3
                },
                endpoint: "Blank",
                connector: ["Bezier", {curviness: 70}]
            });
        }

    }


})
