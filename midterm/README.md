# Midterm
## 1-1: Test an Application and Find an Error
In this exercise, you’ll run a version of the Email List application and discover that it stops running due to a coding error. Then, you’ll use Chrome to identify the statement that caused the error. Estimated time: 5 to 10 minutes.
### Instructions
1. Start the application, enter an email address in the first text box, and click the Join List button. Note the error messages that are displayed to the right of the other two text boxes.
2. Enter a different email address in the second text box, and enter your name in the third text box. Then, click the Join List button to see what error messages are displayed.
3. Enter valid data in all three text boxes and click the Join List button. Then, note that nothing happens.
4. Use Chrome’s developer tools to locate the statement that caused the error.
5. Use your editor or IDE to fix the error (change submitt to submit). Then, save your files, and test the application again with valid data. This time, a new page should be displayed when you click the Join List button.
---
## 2-1: Modify the Test Scores Application
In this exercise, you’ll modify the Test Scores application so it provides for four test scores and displays the results in a dialog box.
### Instructions
1. Run the application, and note that it works like the one in the book and that it writes the results to the browser page. Then, review the code in the JavaScript file, and note that it’s slightly different than the code in the book, although it gets the same results.
2. Modify the application so it provides for a fourth test score.
3. Modify the application so it displays the results in a dialog box, as well as in the browser page after the dialog box is closed.
---
## 3-1: Enhance the Future Value Application
In this exercise, you’ll make a quick enhancement that shows not only the future value when interest is compounded yearly, but also when it’s compounded monthly.
### Instructions
1. Run the application to make sure it works correctly.
2. Review its code. Note that it is just like the code in the book and that the interest is calculated each year.
3. Add the code for calculating the future value when interest is calculated each month. Then, add the code for displaying the results, as shown above. Be sure to add the heading that identifies each result.
---
## 4-1: Enhance the MPG Application
In this exercise, you’ll make a couple of quick enhancements to the Miles Per Gallon application, like clearing the two entries if the user double-clicks in the Miles Per Gallon text box. Estimated time: 10 to 15 minutes.
### Instructions
1. Run the application to see that it works just like the one in the book. Then, in the JavaScript file, note that there’s a clearEntries() function that isn’t used.
2. Enhance the application so the entries are cleared when the user double-clicks in the Miles Per Gallon text box. (Incidentally, this won’t work if the text box is disabled.)
3. Enhance the application so the Miles Driven text box is cleared when it receives the focus. Then, do the same for the Gallons of Gas Used text box.
4. Enhance the application so the calculation is done when the focus leaves the Gallons of Gas Used text box. To do the calculation, you just need to run the processEntries() function when that event occurs.
---
## 4-2: Use Arrow Functions with the Test Scores Application
In this exercise, you’ll modify a version of the Test Scores application so it uses arrow functions instead of function expressions. This version displays the average score after each score is entered. You’ll also use an anonymous function for the DOMContentLoaded event handler. Estimated time: 10 to 15 minutes.
### Instructions
1. Run the application and add two or more scores to see that the new average is displayed each time another score is added.
2. Review the code in the JavaScript file and note that all of the functions are written as function expressions.
3. Modify the $(), addScore(), and calculateAverage() functions so they use arrow functions instead of function expressions.
4. Modify the document.addEventListener() method so it uses an anonymous function for the event handler instead of the processDOM() function.