## 7-2: Add a Stopwatch to the Clock Application
In this exercise, you’ll add a stopwatch feature to the application you created in extra exercise 7-1. The stopwatch will display elapsed minutes, seconds, and milliseconds.
### Instructions
1. In the JavaScript file, note the $(), displayCurrentTime(), padSingleDigit(), and DOMContentLoaded event handler functions from the Clock application. In addition, note the global variables and starting code for the tickStopwatch(), startStopwatch(), stopStopwatch(), and resetStopwatch() functions.
2. In the tickStopwatch() function, add code that adds 10 milliseconds to the elapsedMilliseconds variable and then adjusts the elapsedMinutes and elapsedSeconds variables accordingly. Then, add code that displays the result in the appropriate span tags in the page.
3. In the startStopwatch() function, add code that starts the stopwatch. Be sure to cancel the default action of the link too.
4. In the stopStopwatch() and resetStopwatch() functions, add code that stops the stopwatch. Also, in the resetStopwatch() function, reset the elapsed time and the page display. Be sure to cancel the default action of the links too.
5. In the DOMContentLoaded event handler, attach the stopwatch event handlers to the appropriate links.