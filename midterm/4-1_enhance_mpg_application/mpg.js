"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
/**
 * Focus and select the given element by selector.
 * 
 * @param {string} selector - The desired element by id.
 */
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
/**
 * Process the users entries and display results.
 */
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

var clearEntries = () => {
/**
 * Clear user entries and results field.
 */
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
/**
 * Run on document ready.
 */
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
    $("#mpg").addEventListener("dblclick", clearEntries);
    $("#miles").addEventListener("focus", () => $("#miles").value = "")
    $("#gallons").addEventListener("focus", () => $("#gallons").value = "")
    $("#gallons").addEventListener("focusout", processEntries);
});