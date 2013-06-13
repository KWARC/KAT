/**
 * Class for text preprocessing.
 * Wraps each word in <span> elements and assingn unique ids. A callback is
 * provided for action on text selection.
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
        if(idPrefix){
            this.setIdPrefix(idPrefix)
        }
    },
            
    properties: {
        selector: kat.Constants.TextPreprocessor.Selector,
        idPrefix: kat.Constants.TextPreprocessor.IdPrefix
    },
    
    methods: {
        
    }
})