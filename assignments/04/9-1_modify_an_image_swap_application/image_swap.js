"use strict";

const preloadImages = () => {
/**
 * Preload images to browser cache.
 */
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
}

const swapImage = evt => {
/**
 * Swap the image to the clicked image with animation.
 * 
 * @param {object} evt - The events' context
 */
	$("#image, #caption").fadeOut(1000, () => {
		const link = evt.currentTarget;

		const caption = $(link).attr("title");
		$("#caption").text(caption);
			
		const imageURL = $(link).attr("href");
		$("#image").attr("src", imageURL);

		$("#image, #caption").fadeIn(1000);
	});

	// cancel the default action of the link
	evt.preventDefault();
}

$(document).ready(() => {
	// preload images
	preloadImages();
	
	// set up event handlers for links    
	$("#image_list a").click(swapImage);

	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready