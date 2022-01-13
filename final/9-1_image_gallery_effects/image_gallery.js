"use strict"

$(document).ready( () => {
/**
 * Run on document ready.
 */
	$("#image_list a").each(prepareGallery); // end each
}); // end ready

const prepareGallery = (index, link) => {
/**
 * Prepare gallery by preloading images and adding click event listener to
 * images and related anchor elements.
 * 
 * @param {number} index - The given array index.
 * @param {object} link - The relevant anchor element.
 */
	// get the image URL and caption for each image
	const imageURL = link.href;
	const caption = link.title;

	// preload the image for each link        
	preloadImage(imageURL);

	// set up the event handlers for each link
	$(link).click( evt => {
		changeImage(imageURL);
		changeCaption(caption);

		// cancel the default action of each link
		evt.preventDefault();
	}); // end click 
}

const preloadImage = image_URL => {
/**
 * Preload the image from image_URL to browser cache.
 * 
 * @param {string} image_URL - The src or image URL for the image.
 */
	const image = new Image();
	image.src = image_URL;
}

const changeImage = new_image_URL => {
/**
 * Change the image of the gallery to the new image at new_image_URL
 * 
 * @param {string} new_image_URL - The new images' URL.
 */
	$("#image").animate(
		{opacity: 0, "margin-left": "-=205"},
		2000,
		() => {
			$("#image").attr("src", new_image_URL);
			$("#image").animate(
				{opacity: 1, "margin-left": "+=205"}, 2000
			);
		} // end callback
	);
}

const changeCaption = new_caption => {
/**
 * CHange the caption of the gallery image to new_caption.
 * 
 * @param {string} new_caption - The new image caption.
 */
	$("#caption").animate(
		{opacity: 0, "margin-left": "-=205"},
		2000,
		() => {
			$("#caption").text(new_caption);
			$("#caption").animate(
				{opacity: 1, "margin-left": "+=205"}, 2000
			);
		} // end callback
	);
}