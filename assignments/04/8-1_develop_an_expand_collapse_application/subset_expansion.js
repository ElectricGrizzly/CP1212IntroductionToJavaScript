"use strict";

const toggleShowDiv = evt => {
/**
 * Toggle the hide class of div element.
 * 
 * @param {object} evt - The events' context
 */
    const aElement = evt.currentTarget;
    const divElement = $(aElement).prev();
    divElement.toggleClass("hide");
    if (divElement.attr("class") !== "hide"){
        aElement.textContent = "Show less";
    }
    else{
        aElement.textContent = "Show more";
    }
    evt.preventDefault();
}

$(() => {
/**
 * Run on document ready
 */
    $("a").click(evt => {
        toggleShowDiv(evt);
    });
});