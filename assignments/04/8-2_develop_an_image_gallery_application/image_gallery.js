"use strict";

const preloadImages = () => {
/**
 * Preload images to browser cache.
 */
    $("#image_list a").each((index, a) => {
        const image = new Image();
        image.src = a.href;
        image.alt = a.title;
    });
}

const changeImage = evt => {
/**
 * Swap the currently displayed image with the clicked image.
 * 
 * @param {object} evt - The events' context.
 */
    const aElement = evt.currentTarget;
    $("#image").attr("src", aElement.href);
    $("#caption").text(aElement.title);
    evt.preventDefault();
}

$(() => {
/**
 * Run on document ready
 */
    preloadImages();
    $("#image_list a").click(changeImage);
    $("a:first").focus();
});