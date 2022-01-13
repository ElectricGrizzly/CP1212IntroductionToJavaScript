"use strict";

const $ = selector => document.querySelector(selector);
const tax_rate_min = 0;
const tax_rate_max = 12;
const subtotal_min = 0;
const subtotal_max = 10000;

const processEntries = () => {
/**
 * Process user entries and display results to user.
 */
    const subtotal = parseFloat($("#subtotal").value);
    if(subtotal >= subtotal_max || subtotal <= subtotal_min || subtotal == NaN){
        alert(`Subtotal must be > ${subtotal_min} and < ${subtotal_max}`);
        clearSubtotal();
    }
    const tax_rate = parseFloat($("#tax_rate").value);
    if(tax_rate >= tax_rate_max || tax_rate <= tax_rate_min || tax_rate == NaN){
        alert(`Tax Rate must be > ${tax_rate_min} and < ${tax_rate_max}`);
        clearTaxRate();
    }
    else{
        const tax = subtotal * tax_rate / 100;
        const total = subtotal + tax;

        $("#sales_tax").value = tax.toFixed(2);
        $("#total").value = total.toFixed(2);
        $("#subtotal").focus();
    }
}

const clearEntry = id => $(id).value = null
const clearSubtotal = () => clearEntry("#subtotal");
const clearTaxRate = () => clearEntry("#tax_rate");
const clearSalesTax = () => clearEntry("#sales_tax");
const clearTotal = () => clearEntry("#total");

const clearEntries = () => {
/**
 * Clear all user entry fields.
 */
    clearSubtotal();
    clearTaxRate();
    clearSalesTax();
    clearTotal()
    $("#subtotal").focus();
}

document.addEventListener("DOMContentLoaded", () => {
/**
 * Run on document ready.
 */
    window.addEventListener("load", $("#subtotal").focus());
	$("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").addEventListener("click", clearSubtotal);
    $("#tax_rate").addEventListener("click", clearTaxRate)
});