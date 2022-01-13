"use strict";

const $ = selector => document.querySelector(selector);
const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const displayResults = () => {
/**
 * Display the results from the given scores.
 */
	const results_div = $("#results");

	// create relevant heading node
	const heading_text = "Results";
	createDocumentElement("h2", heading_text, results_div);

	// create average score node
	const average = getAverage(scores);
	const average_text = `Average score = ${average.toFixed(2)}`;
	createDocumentElement("p", average_text, results_div);

	// create high score node
	const high_score = getLargestValue(scores);
	const high_score_index = scores.lastIndexOf(high_score);
	const high_score_name = names[high_score_index];
	const high_score_name_text = `High score = ${high_score_name} with a score of ${high_score}`;
	createDocumentElement("p", high_score_name_text, results_div);
}

const displayScores = () => {
/**
 * Display scores in the document.
 */
	const scores_div = $("#scores");

	// create relevant heading node
	const heading_text = "Results";
	createDocumentElement("h2", heading_text, scores_div);

	// create score node
	for(let score of scores){
		let index = scores.indexOf(score);
		let name_text = `${names[index]}`;
		let score_text = `${score}`;
		createDocumentElement("label", name_text, scores_div);
		createDocumentElement("label", score_text, scores_div);
		createDocumentElement("br", "", scores_div);
	}
}

const addScore = () => {
/**
 * Add a score to the scores array.
 */
	if($("#name").value !== ""){
		names.push($("#name").value);
		$("#name").nextElementSibling.textContent = "";
	}
	else {
		$("#name").nextElementSibling.textContent = "Please enter a name.";
		$("#name").focus();
	}
	if(parseFloat($("#score").value) >= 0 && parseFloat($("#score").value) <= 100 && typeof(parseFloat($("#score").value)) == 'number'){
		scores.push(parseFloat($("#score").value));
		$("#score").nextElementSibling.textContent = ""
		clearDisplay();
	}
	else{
		$("#score").nextElementSibling.textContent = "Score must be between 0 and 100.";
		$("#name").focus();
	}
}

const createDocumentElement = (element, text, parent) => {
/**
 * Create a child element in the document.
 * 
 * @param {string} element - The element to create.
 * @param {string} text - The text for the element.
 * @param {object} parent - The parent of the new child element.
 */
	const doc_element = document.createElement(element);
	const doc_text = document.createTextNode(text);
	doc_element.appendChild(doc_text);
	parent.appendChild(doc_element);
}

const getAverage = (array) => {
/**
 * Get the average value of an array of numbers.
 * 
 * @param {array} array - An array of numbers.
 * 
 * @returns {number} average - The average value of the array.
 */
	let sum = 0;
	for(let value of array){
		sum += value;
	}
	return sum / array.length;
}

const getLargestValue = (array) => {
/**
 * Get the largest value from an array.
 * 
 * @param {array} array - An array of numbers.
 * 
 * @returns {number} largest - The largest number in the array.
 */
	let largest = 0;
	for(let value of array){
		if(value >= largest){
			largest = value;
		}
	}
	return largest;
}

const clearDisplay = () => {
/**
 * Clear user entryies and old results.
 */
	$("#scores").textContent = "";
	$("#results").textContent = "";
	clearEntries();
}

const clearEntries = () => {
/**
 * Clear entry field and move focus to name field.
 */
	$("#name").value = "";
	$("#score").value = "";
	$("#name").focus();
}

document.addEventListener("DOMContentLoaded", () => {
/**
 * Run on document ready.
 */
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
	$("#name").focus();
});