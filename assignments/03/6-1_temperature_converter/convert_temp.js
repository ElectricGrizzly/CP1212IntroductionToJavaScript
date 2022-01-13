"use strict";

const $ = selector => document.querySelector(selector);
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
/**
 * Toggle the labels displayed based on user selection.
 * 
 * @param {string} label1Text - The user entry label.
 * @param {string} label2Text - The results label.
 */
	$("#degree_label_1").textContent = label1Text;
	$("#degree_label_2").textContent = label2Text;
	$("#degrees_computed").value = "";
	$("#message").textContent = "";
}

const clearDisplay = () => {
/**
 * Clear the entry and display fields.
 */
	$("#degrees_entered").value = "";
	$("#degrees_computed").value = "";
	$("#message").textContent = "";
}

const convertTemp = () => {
/**
 * Convert temperature from fahrenheit to celcius of vice versa based on user selection.
 */
	if(!isNaN(parseFloat($("#degrees_entered").value))){
		if($("#to_celsius").checked){
			$("#degrees_computed").value = calculateCelsius(parseFloat($("#degrees_entered").value)).toFixed(0);
		}
		else{
			$("#degrees_computed").value = calculateFahrenheit(parseFloat($("#degrees_entered").value)).toFixed(0);
		}
	}
	else{
		$("#message").textContent = "You must enter a valid number for degrees.";
		$("#degrees_entered").focus();
	}
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
/**
 * Run on document ready.
 */
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	$("#degrees_entered").addEventListener("click", clearDisplay);
	
	// move focus
	$("#degrees_entered").focus();
});