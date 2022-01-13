"use strict";

const $ = selector => document.querySelector(selector);

const bracket_limits = [0, 9875, 40125, 85525, 163300, 207350, 518400];
const bracket_percentages = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
const bracket_amounts = [0];
bracket_limits.forEach((limit, index) => {
	if (index !== 0){
		bracket_amounts.push(bracket_amounts[index - 1] + (bracket_percentages[index - 1] * (limit - bracket_limits[index - 1])));
	}
});

const clearIncome = () => $("#income").value = null;

const processEntry = () => {
/**
 * Process the income entry anmd return tax amount to user.
 */
	const income = parseFloat($("#income").value);
	if(income <= bracket_limits[0]){
		alert(`Only income greater than $${income_min} please!`);
	}
	else{
		const tax = calculateTax(income).toFixed(2);
		$("#tax").value = tax;
	}
	$("#income").focus();
}

const calculateTax = income => {
/**
 * Calculate the tax amount for a given income.
 * 
 * @param {number} income - Income to determine tax amount from.
 * 
 * @returns {number} tax_amount - The tax amount for the given income.
 */
	let index = 0;
	for (const limit of bracket_limits){
		if(income <= bracket_limits[index + 1]){
			return bracket_amounts[index] + (income - limit) * bracket_percentages[index];
		}
		index += 1;
	}
}

document.addEventListener("DOMContentLoaded", () => {
/**
 * Run on document ready.
 */
	window.addEventListener("load", $("#income").focus());
	$("#calculate").addEventListener("click", processEntry);
	$("#income").addEventListener("click", clearIncome);
});