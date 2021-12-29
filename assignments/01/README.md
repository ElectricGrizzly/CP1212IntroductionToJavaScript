# Assignment 1
## 2-1: Convert Fahrenheit to Celcius
In this exercise, you’ll create an application that converts Fahrenheit temperatures to Celsius temperatures by using the prompt() method of the window object and the write() method of the document object.
### Instructions
1. Review the script element at the end of the body section and note that it’s empty. You’ll write the code for this application within this element.
2. Develop this application. Allow the user to enter decimal numbers, and display the Fahrenheit value entered by the user and the calculated Celsius value rounded to 1 digit.
---
## 3-1: Enhance the Fahrenheit to Celcius Application
In this exercise, you’ll add data validation to the application you created in extra exercise 2-1. You’ll also let the user do multiple conversions before ending the application.
### Instructions
1. Add data validation to the application so it won’t do the conversion until the user enters a Fahrenheit temperature between -100 and 212. If the entry is invalid, a dialog box like the one above should be displayed.
2. Add a loop to the code so the user can do a series of calculations without restarting the application. To end the application, the user must enter 999 as the temperature.
---
## 3-2: Convert Number Grades to Letter Grades
This exercise will give you some practice using if statements.
To derive the letter grade, you should use this table:
| Letter | Numerical Range |
| --- | -------- |
|  A  |  88-100  |
|  B  |   80-87  |
|  C  |   68-79  |
|  D  |   60-67  |
|  F  |   < 60   |
### Instructions
1. In the script element, add the JavaScript code for getting the user’s entry while the entry amount isn’t 999. This should provide for multiple entries and conversions.
2. Add the JavaScript code for deriving the letter grade from the table above and displaying it on the page.
3. If you haven’t already done so, add data validation to make sure the entry is a valid number from 0 through 100. If the entry is invalid, the application should just display the starting prompt dialog box. It doesn’t need to display a special error message.
---
## 3-3: Create a Sum of Numbers Application
This application will give you a chance to use a for loop.
### Instructions
1. In the script element, add a do-while loop that prompts the user for an entry from 1 through 100. If the entry is invalid, display an alert box with this message: “Please enter a number between 1 and 100”. Then, continue the loop until the entry is valid.
2. After the do-while loop, code a for loop that sums the numbers, and then display the second dialog box above. For instance, the sum for an entry of 4 is 1 + 2 + 3 + 4.
3. Add a do-while loop around all of the code that uses the second dialog box above to determine whether the first dialog box should be displayed again so the user can enter another number. The application should end for any entry other than “y”.
---
## 3-4: Use a Sales Array
In this exercise, you’ll start with five arrays that represent sales regions, and each array contains four values that represent the quarterly sales for the region. Then, you’ll summarize the data in the page.
### Instructions
1. In the HTML file, note the link element that refers to the CSS file, and the script element refers to the JavaScript file.
2. In the JavaScript file, note that five arrays are declared with four values in each. Each of these arrays represents one sales region, and each of the values in an array represents one sales quarter. For instance, the sales for the third quarter in region 3 were 2710.
3. Write the code for summing the quarterly sales for each the five regions and displaying them on the page with the document.write() method. To do that, use an \<h2> tag for each header and a \<br> tag for a line break at the end of each line of sales data.
4. Write the code for getting and displaying the regional sales data.
5. Write the code for getting and displaying the total sales data.