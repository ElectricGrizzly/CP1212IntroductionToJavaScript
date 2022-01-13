"use strict";

const $ = selector => document.querySelector(selector);
const change_ids = [`#quarters`, `#dimes`, `#nickels`, `#pennies`];
const change_values = [25, 10, 5, 1];

const makeChange = cents => {
/**
 * Calculate change amount and displays results to user.
 * 
 * @param {number} cents - The amount of cents to make change from.
 */
    const change_amounts = toGroups(cents, change_values);
    change_ids.forEach((change_id, index) =>{
        $(change_id).value = change_amounts[index];
    });
}

const toGroups = (starting_value, group_array) => {
/**
 * Determine the integer quotient for specific values from a starting value.
 * 
 * @param {number} starting_value - The starting value to split into groups.
 * @param {array} group_array - The group values to find.
 * 
 * @return {array} groups - The number for each group, in the same order as group_array.
 */
    let groups = [];
    let remainder = starting_value;
    group_array.forEach(value => {
        const group_amount = Math.trunc(remainder / value);
        remainder -= group_amount * value;
        groups.push(group_amount);
    });
    return groups;
}

const clearCents = () => $("#cents").value = null;

const processEntry = () => {
/**
 * Process the users cents entry and provide change amounts to user.
 */
    const cents = parseInt($("#cents").value);
    if(cents > cents_max || cents < cents_min){
        alert(`Please enter an integer between ${cents_min} and ${cents_max}`);
    }
    else {
        makeChange(cents);
    }
    $("#cents").focus();
}

document.addEventListener("DOMContentLoaded", () => {
/**
 * Run on document ready.
 */
    window.addEventListener("load", $("#cents").focus());
    $("#calculate").addEventListener("click", processEntry);
    $("#cents").addEventListener("click", clearCents);
});
