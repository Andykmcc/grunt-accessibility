

var HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8 = {
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
        return ['link'];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        var linkParentName = element.parentNode.nodeName.toLowerCase();

        // Check for the correct location. HTML4 states "it may only appear in the
        // HEAD element". HTML5 states it appears "wherever metadata content is
        // expected", which only includes the head element.
        if (linkParentName !== 'head') {
            HTMLCS.addMessage(HTMLCS.ERROR, element, 'Link elements can only be located in the head section of the document.', 'H59.1');
        }

        // Check for mandatory elements.
        if ((element.hasAttribute('rel') === false) || (!element.getAttribute('rel')) || (/^\s*$/.test(element.getAttribute('rel')) === true)) {
            HTMLCS.addMessage(HTMLCS.ERROR, element, 'Link element is missing a non-empty rel attribute identifying the link type.', 'H59.2a');
        }

        if ((element.hasAttribute('href') === false) || (!element.getAttribute('href')) || (/^\s*$/.test(element.getAttribute('href')) === true)) {
            HTMLCS.addMessage(HTMLCS.ERROR, element, 'Link element is missing a non-empty href attribute pointing to the resource being linked.', 'H59.2b');
        }
    }
};
