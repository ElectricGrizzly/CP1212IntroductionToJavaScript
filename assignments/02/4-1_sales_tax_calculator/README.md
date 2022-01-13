# 4-1: Develop the Sales Tax Calculator
In this exercise, you’ll develop an application that calculates the sales tax and invoice total after the user enters the subtotal and tax rate.
## Instructions
1. In the JavaScript file, note that the $() function has been coded for you. It gets the object for the HTML element that’s specified by the CSS selector.
2. Code an event handler function named processEntries() that gets the user entries, calculates the sales tax and total, and displays those results in the text boxes.
3. Code a DOMContentLoaded event handler that attaches the processEntries() function to the click event of the Calculate button. Then, test what you have so far.
4. Add data validation to the processEntries() function. The subtotal entry should be a valid, positive number that’s less than 10,000. The tax rate should be a valid, positive number that’s less than 12. The error messages should be displayed in alert dialog boxes, and the error messages should be:
Subtotal must be > 0 and < 10000 and Tax Rate must be > 0 and < 12
5. Add JavaScript that moves the cursor to the Subtotal field when the application starts and when the user clicks on the Calculate button.
6. Add the event handler for the click event of the Clear button. This event handler should clear all text boxes and move the cursor to the Subtotal field.
7. Add event handlers for the click events of the Subtotal and Tax Rate text boxes. Each handler should clear the data from the text box. Update the event handler for the Clear button to call these functions as well (to reduce code duplication).