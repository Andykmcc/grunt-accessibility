

var HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7 = {
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
        return ['_top'];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        // Fire this notice if there appears to be an input field or link on the page
        // (which will be just about anything). Links are important because they can
        // still be tabbed to.
        var inputField = top.querySelector('input, textarea, button, select, a');

        if (inputField !== null) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, 'Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.', 'G149,G165,G195,C15,SCR31');
        }

    }
};
