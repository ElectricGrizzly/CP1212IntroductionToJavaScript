# Assignment 3
## 6-1: Develop the Temperature Conveter
In this exercise, you’ll use radio buttons to determine whether the conversion is from Fahrenheit to Celsius or vice versa. You’ll also modify the DOM so the labels change when a radio button is clicked, and the page displays an error message when the user enters invalid data.
### Instructions
1. Note that the JavaScript file has some starting JavaScript code, including the $() function, three helper functions, three event handler functions, and a DOMContentLoaded event handler that attaches the three event handlers.
2. Review how the toCelsius() and toFarhenheit() event handler functions call the toggleDisplay() helper function and pass it strings to display. Also note that the toggleDisplay() helper function and the convertTemp() event handler function are incomplete.
3. Code the toggleDisplay() function so it changes the text in the labels for the text boxes to the values in the parameters that it receives. It should also clear the disabled text box where the computed temperature is displayed.
4. Code the convertTemp() function without any data validation. It should use the helper functions to calculate the temperature based on which radio button is checked. The value returned by the helper functions should be rounded to zero decimal places.
5. Add data validation to the convertTemp() function. If the entry is note a valid number, a validation message should be displayed in the element with the id of “message”.
6. Add any finishing touches to the application whenever that’s appropriate. This can be things like moving the focus to the first text box and selecting the text, clearing a previous error message, or clearing a previously computed temperature value.
---
## 6-2: Use a Test Score Array
In this exercise, you’ll work with an array and you’ll add nodes to the DOM to display the Results and the Scores.
### Instructions
1. At the start of the JavaScript file, you’ll see the declarations for two arrays: one for names and one for scores, and each array contains four elements. You’ll also see the code for the $() function as well as a DOMContentLoaded event handler that attaches three functions named addScore(), displayResults(), and displayScores() to the click events of the buttons.
2. Write the displayResults() function. It should derive the average score and the highest score from the arrays and then display the results in the div element with “results” as its id as shown above. To display the results, add nodes to the DOM
with the heading as an h2 element and the average and highest scores as \<p> elements. If those nodes already exist, you’ll need to replace them. 
3. Write the displayScores() function. It should get the names and scores from the arrays and display them in the div element with “scores” as its id, as shown above. To display the results, add nodes to the DOM with the name and score as label elements, and a break element (\<br>) to go to a new line. Before adding these nodes, you can clear any previous nodes by setting the text content of the div to an empty string.
4. Write the addScore() function. It should add a name and score to the two arrays. To test whether this works, you can click the Display Scores button and see if the new name and score have been added to the table.
5. If you haven’t already done it, add data validation to addScore() function. The Name entry must not be empty and the Score entry must be a positive number from 0 through 100. If either entry is invalid, display messages in the span elements after the input elements, as shown above.
6. Make sure that your application moves the cursor to the Name field when the application starts and after a name and score have been added to the array.
---
## 6-3: Modify the FAQs Application
This exercise has you make a minor modification to the FAQs application. When you’re done, this application should work the same as before, except that only one answer can be displayed at a time. In other words, when the user clicks on a heading to display the answer, the other answers must be hidden.
### Instructions
1. Add code to the toggle() function so only one answer can be displayed at a time. To do that, create an array of the h2 elements. Then, use a for-of loop to go through the h2 elements in the array and remove the class attribute for all h2 elements that aren’t the one that has been clicked. You also need to remove the class attributes for all of the div siblings of the h2 elements that weren’t clicked.
---
## 7-1: Develop the Clock Application
In this exercise, you’ll create an application that displays the current time in hours, minutes, and seconds. The display should use a 12-hour clock and indicate whether it’s AM or PM.
### Instructions
1. In the JavaScript file, note that four functions are supplied. The $() function that you can use to select elements. The padSingleDigit() function, that adds a leading zero to single digits using a string method that you’ll learn about in chapter 12. The start of a displayCurrentTime() function. And the start of a DOMContentLoaded event handler.
2. In the displayCurrentTime() function, add code that uses the Date object to determine the current hour, minute, and second. Convert these values to a 12-hour clock, determine the AM/PM value, and display these values in the appropriate span tags.
3. In the DOMContentLoaded event handler, code a timer that calls the displayCurrentTime() function at 1 second intervals. Also, make sure that the current time shows as soon as the page loads.
---
## 7-2: Add a Stopwatch to the Clock Application
In this exercise, you’ll add a stopwatch feature to the application you created in extra exercise 7-1. The stopwatch will display elapsed minutes, seconds, and milliseconds.
### Instructions
1. In the JavaScript file, note the $(), displayCurrentTime(), padSingleDigit(), and DOMContentLoaded event handler functions from the Clock application. In addition, note the global variables and starting code for the tickStopwatch(), startStopwatch(), stopStopwatch(), and resetStopwatch() functions.
2. In the tickStopwatch() function, add code that adds 10 milliseconds to the elapsedMilliseconds variable and then adjusts the elapsedMinutes and elapsedSeconds variables accordingly. Then, add code that displays the result in the appropriate span tags in the page.
3. In the startStopwatch() function, add code that starts the stopwatch. Be sure to cancel the default action of the link too.
4. In the stopStopwatch() and resetStopwatch() functions, add code that stops the stopwatch. Also, in the resetStopwatch() function, reset the elapsed time and the page display. Be sure to cancel the default action of the links too.
5. In the DOMContentLoaded event handler, attach the stopwatch event handlers to the appropriate links.