# 4-1: Enhance the MPG Application
In this exercise, you’ll make a couple of quick enhancements to the Miles Per Gallon application, like clearing the two entries if the user double-clicks in the Miles Per Gallon text box. Estimated time: 10 to 15 minutes.
## Instructions
1. Run the application to see that it works just like the one in the book. Then, in the JavaScript file, note that there’s a clearEntries() function that isn’t used.
2. Enhance the application so the entries are cleared when the user double-clicks in the Miles Per Gallon text box. (Incidentally, this won’t work if the text box is disabled.)
3. Enhance the application so the Miles Driven text box is cleared when it receives the focus. Then, do the same for the Gallons of Gas Used text box.
4. Enhance the application so the calculation is done when the focus leaves the Gallons of Gas Used text box. To do the calculation, you just need to run the processEntries() function when that event occurs.