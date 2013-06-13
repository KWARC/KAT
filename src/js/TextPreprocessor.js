/**
 * Class for text preprocessing.
 * Wraps each word in <span> elements and assingn unique ids. A callback is
 * provided for action on text selection.
 * 
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.TextPreprocessor", {
    /**
     * Class constructor.
     * @param {string} selector A valid cs3 selector, indicating the region in
     * HTML where the text to be processed sits.
     * @param {string} idPrefix [optional] The prefix to be added to the span
     * ids.
     */
    init: function(selector, idPrefix) {
        if (selector) {
            this.setSelector(selector);
        }
        if (idPrefix) {
            this.setIdPrefix(idPrefix)
        }
    },
    properties: {
        selector: {
            value: kat.Constants.TextPreprocessor.Selector
        },
        idPrefix: {
            value: kat.Constants.TextPreprocessor.IdPrefix
        }
    },
    methods: {
        /**
         * Wraps each word in text in a <span> element whose id is an unique 
         * counter.
         */
        addCounter: function() {
            var html = $(this.getSelector()).html();
            var htmlTags = html.match(/<(.|\n)*?>/g);
            var markedText = "";
            var currCounter = 0;
            for (var i in htmlTags) {
                var split = this.splitOnce(html, htmlTags[i]);
                if (split[0]) {
                    var spanedText = this.addSpanToText(split[0], currCounter);
                    markedText += spanedText.text + htmlTags[i];
                    currCounter = spanedText.counter;
                }
                else {
                    markedText += htmlTags[i];
                }
                html = split[1];
            }
            $(this.getSelector()).html(markedText);
        },
        /**
         * Splits a text in 2 pieces: what was before the separator and
         * what was after it. Returns an array with 2 elements.
         * @param {string} text The text to be split.
         * @param {string} sep The separator.
         */
        splitOnce: function(text, sep) {
            var split = text.split(sep);
            var result = new Array(2);
            result[0] = split[0];
            split.splice(0, 1);
            result[1] = split.join(sep);
            return result;
        },
        /**
         * Adds a <span> with a counter id to a given piece of text.
         * @param {string} text The text to be wrapped.
         * @param {int} startCounter The value of the counter.
         */
        addSpanToText: function(text, startCounter) {
            var splitText = text.split(" ");
            var markedText = "";
            var counter = 0;
            for (var i in splitText) {
                markedText += "<span class='";
                markedText += kat.Constants.TextPreprocessor.SpanClass;
                markedText += "' id='" + kat.Constants.TextPreprocessor.IdPrefix + "-";
                markedText += (parseInt(startCounter) + parseInt(i)) + "'>" + splitText[i] + " </span>";
                counter = parseInt(startCounter) + parseInt(i) + 1;
            }
            var result = new Object();
            result.text = markedText;
            result.counter = counter;
            return result;
        }
    }
});
