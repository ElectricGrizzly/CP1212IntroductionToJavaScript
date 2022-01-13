"use strict";
const $ = selector => document.querySelector(selector);

const toggle = evt => {
/**
 * Toggle the selected div elements sibling div.
 * 
 * @param {object} evt - The events' context.
 */
	const h2Element = evt.currentTarget;               // get the clicked h2
	const divElement = h2Element.nextElementSibling;   // get h2's sibling div
	
	h2Element.classList.toggle("minus");
	divElement.classList.toggle("open");

	const h2Elements = document.querySelectorAll("h2");// get array of h2's

	for (let h2 of h2Elements){
		if (h2 != h2Element){
			h2.removeAttribute("class");
			h2.nextElementSibling.removeAttribute("class");
		}
	}
	
	evt.preventDefault();           // cancel default action of h2's child <a>
};

document.addEventListener("DOMContentLoaded", () => {
/**
 * Run on document ready.
 */
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");
	
	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
	}
	
	// set focus on first h2 tag's <a> tag
	h2Elements[0].firstChild.focus();
});
