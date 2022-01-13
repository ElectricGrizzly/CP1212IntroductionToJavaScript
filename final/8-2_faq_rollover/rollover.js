"use strict";

const toggleAnswer = event => {
/**
 * Toggle the hidden class of the p element on hoverIn and hoverOut.
 * 
 * @param {object} event - The events' context.
 */
    $(event.currentTarget).next().toggleClass("hidden");
}

$(document).ready(() => {
/**
 * Run on document ready.
 */
    $("#faq_rollovers li > h2").hover(toggleAnswer);
}); // end ready