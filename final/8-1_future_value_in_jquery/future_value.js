"use strict"

const calculateFutureValue = event => {
/**
 * Calculate the future value from the values of input elements.
 * 
 * @param {object} event - The events' context.
 */
	const investment = parseFloat($("#investment").val());
	const interest = parseFloat($("#rate").val());
	const years = parseInt($("#years").val());
	if (isNaN(investment) || investment <= 0) {
		alert("Investment must be a valid number greater than zero.");
	} 
	else if(isNaN(interest) || interest <= 0) {
		alert("Annual rate must be a valid number greater than zero.");
	}
	else if(isNaN(years) || years <= 0) {
		alert("Years must be a valid number\nand greater than zero.");
	}
	// if all entries are valid, calulate future value
	else {
		$("#future_value").val((investment * Math.pow(1 + interest/100, years)).toFixed(2));
	}
	$("#investment").focus();
}

const clearEntries = event => {
/**
 * Clear entries from an input element.
 * 
 * @param {object} event - Then events' context.
 */
	$(event.currentTarget).val("");
}

$(document).ready(() => {
/**
 * Run on document ready.
 */
	$("#calculate").click(calculateFutureValue);
	$("#investment").focus();
	$(":text").click(clearEntries);
});