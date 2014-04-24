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
 * Creates an svg arrow that can be used to connect two dom elements, for example a reference field annotation to the referenced item.
 * @method ArrowConnector
 * @param {} arrowBaseElement Base element to start arrow at. 
 * @param {} arrowHeadElement The element the head of the arrow should point to. 
 * @return 
 */
kat.display.ArrowConnector = function(arrowBaseElement, arrowHeadElement){

    //store parameters
    this._arrowBaseElement = arrowBaseElement;
    this._arrowHeadElement = arrowHeadElement;
    this_connection = null; 

}

/**
 * Renders the arrow represented by this class instance. 
 * @method render
 * @return 
 */
kat.display.ArrowConnector.prototype.render = function () {
    if (!this._connection) {
        this._createSVGArrow();
    }
}

/**
 * Removes the rendered arrow represented by this class instance. 
 * @method destroy
 * @return 
 */
kat.display.ArrowConnector.prototype.destroy = function () {
    if (this._connection) {
        jsPlumb.detach(this._connection, {
            forceDetatch: true
        })
        this._connection = null;
    }
}

/**
 * Creates the SVG object belonging to the arrow. 
 * @method _createSVGArrow
 * @return 
 */
kat.display.ArrowConnector.prototype._createSVGArrow = function () {
    this._connection = jsPlumb.connect({
        source: this._arrowBaseElement,
        target: this._arrowHeadElement,
        container: this._arrowBaseElement.parent(),
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
}; 