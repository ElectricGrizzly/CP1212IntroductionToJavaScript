# 8-2: Develop an Image Gallery Application
In this exercise, you’ll develop an Image Gallery application that displays different images when the user clicks on the links at the top of the page.
## Instructions
1. In the JavaScript file, add an event handler for the ready() event method.
2. Use the each() method to run a function for each \<a> element in the unordered list of items. Then, add jQuery code that gets the URL and caption for each image and preloads the image. You can get the URL from the href attribute of the \<a> element, and you can get the caption from the title attribute.
3. Add an event handler for the click() event method of each link. The function for this event handler should accept a parameter named evt. The jQuery code for this event handler should display the image and caption for the link that was clicked. In addition, it should use the evt parameter to cancel the default action of the link.
4. Add a jQuery statement that moves the focus to the first link on the page when the page is loaded.