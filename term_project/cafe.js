"use strict";

const clearOrder = () => {
/**
 * Clear the order total from p element and order options from select element.
 */
    $("#order").html("");
    $("#total").html("");
}

const preloadRollovers = () => {
/**
 * Preload the hover rollovers into browser cache.
 */
    $("#menu img:only-of-type").each((index, img) => {
        const image = new Image();
        image.src = img.id;
    });
}

const placeOrder = () => {
/**
 * Change window location to "checkout.html" to indicate order placement
 */
    window.location.href = "checkout.html";
}

const showOptionImage = event => {
/**
 * Shows the info of the option by replacing the image with its alternate image providing the options' information.
 * The alternate image is provided in the img id attribute. The function is run twice. First when the mouse enters
 * the hover and again when the mouse leaves the hover. Effectively, the informative image toggles on when hover 
 * enters and toggles off when hover leaves.
 *
 * @param {object} event - The events' context.
 */
    const imgElement = $(event.currentTarget);
    const oldImageURL = imgElement.attr("src");
    const newImageURL = imgElement.attr("id");
    imgElement.attr("id", oldImageURL);
    imgElement.attr("src", newImageURL);
}

const getOptionPrice = option => {
/**
 * Returns the price of option selected using the argument img elements alt attribute.
 * 
 * @param {string} option - The desired option.
 * @return {number} price - The clicked images' option price.
 */
    switch(option){
        case "espresso":
            return 1.95;
        case "latte":
            return 2.95;
        case "cappuccino":
            return 3.45;
        case "coffee":
            return 1.75;
        case "biscotti":
            return 1.95;
        case "scone":
            return 2.95;
    }
}

const addOptionToOrder = event => {
/**
 * Add the clicked option to order by appending it as an child option element of the select element.
 *
 * @param {object} event - The events' context.
 */
    const imgElement = event.currentTarget;
    const selectElement = $("#order");
    const pElement = $("#total");
    const price = getOptionPrice(imgElement.alt);
    selectElement.append(new Option(`\$${price} - ${capitalizeFirst(imgElement.alt)}`, `${imgElement.alt}`));
    const total = getOptionsTotal();
    pElement.html(`Total: \$${total.toFixed(2)}`);  
}

const getOptionsTotal = () => {
/**
 * Returns the total from all of the current options in the order.
 * 
 * @return {number} total - The total cost of the order options.
 */
    const optionElements = $("#order option");
    let total = 0;
    for (const option of optionElements){
        total += parseFloat(getOptionPrice(option.value));
    }
    return total;
}

const capitalizeFirst = word => {
/**
 * Returns word with the first character capitalized.
 *
 * @param {string} word - The text to capitalize the first letter of.
 * @return {string} capitalized word - the input word with the first character capitalized.
 */
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

$(() => {
/**
 * Run on document ready.
 */
    preloadRollovers();
    $("#clear_order").click(clearOrder);
    $("#place_order").click(placeOrder);
    $("#menu img:only-of-type").hover(showOptionImage);
    $("#menu img:only-of-type").click(addOptionToOrder);
});