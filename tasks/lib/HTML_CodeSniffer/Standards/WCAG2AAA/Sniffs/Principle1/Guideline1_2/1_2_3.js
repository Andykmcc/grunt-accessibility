

var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3 = {
    /**
     * Determines the elements to register for processing.
     *
     * Each element of the returned array can either be an element name, or "_top"
     * which is the top element of the tested code.
     *
     * @returns {Array} The list of elements.
     */
    register: function()
    {
        return [
            'object',
            'embed',
            'applet',
            'video'
        ];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, 'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.', 'G69,G78,G173,G8');

    }
};
