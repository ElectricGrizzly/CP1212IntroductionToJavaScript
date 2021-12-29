# Assignment 4
## 8-1: Develop an Expand/Collapse Application
In this exercise, you’ll develop an application that displays the first paragraph of text for three topics and then lets the user click a link to expand or collapse the text for each topic.
### Instructions
1. Review the HTML. Note that each topic consists of two div elements followed by an \<a> element. Also, note that a class named “hide” is assigned to the second div element of each topic. Then, review the style rule for this class.
2. In the JavaScript file, add an event handler for the ready() event method.
3. Within the ready() event method, code an event handler for the click() event method of the \<a> elements. This event handler should start by preventing the default action of the link and storing the clicked link in a constant. Then, it should use the toggleClass() method to add or remove the “hide” class from the div element above the link element that’s clicked depending on whether that class is present.
4. Complete the click() event handler by testing if the div element above the current link element has the “hide” class. If it doesn’t, change the text for the link to “Show less”. If it does, change it back to “Show more".
---
## 8-2: Develop an Image Gallery Application
In this exercise, you’ll develop an Image Gallery application that displays different images when the user clicks on the links at the top of the page.
### Instructions
1. In the JavaScript file, add an event handler for the ready() event method.
2. Use the each() method to run a function for each \<a> element in the unordered list of items. Then, add jQuery code that gets the URL and caption for each image and preloads the image. You can get the URL from the href attribute of the \<a> element, and you can get the caption from the title attribute.
3. Add an event handler for the click() event method of each link. The function for this event handler should accept a parameter named evt. The jQuery code for this event handler should display the image and caption for the link that was clicked. In addition, it should use the evt parameter to cancel the default action of the link.
4. Add a jQuery statement that moves the focus to the first link on the page when the page is loaded.
---
## 9-1: Modify an Image Swap Application
In this exercise, you’ll modify another Image Swap application so it uses effects to display and hide the images.
### Instructions
1. Review the code in the JavaScript file to see that it’s identical to the code for the Image Swap application in chapter 8. Now, run this application to see how it works.
2. Add statements to the JavaScript file that fade the caption and image out over a duration of one second.
3. Modify the statements that display the new caption and image so the caption and image are faded in over a duration of one second. Then, run the application to see that this doesn’t work the way you might expect. Instead, the new caption and image are displayed and then faded out and back in.
4. Add a callback function to the statement that fades out the image. Then, move the statements that display the new caption and image within this function. Now, the old caption and image should fade out and the new caption and image should fade in.
---
## 9-2: Modify a Carousel to Use Animation
In this exercise, you’ll modify a carousel application so that when an image in the carousel is clicked, an enlarged image is displayed using animation.
### Instructions
1. Review the HTML for the application, and notice that it contains an img element with an id of “image” following the heading. Also notice that the href attributes of the \<a> elements in the carousel are set to the URL of the enlarged image to be displayed when the associated carousel image is clicked.
2. Code an event handler for the click event of the \<a> elements in the list. This event handler should start by getting the URL for the image to be displayed. Then, it should assign this URL to the enlarged image.
3. Add animation to the click event handler so the opacity of the current image is set to 0 and 205 is subtracted from the left margin of the image over a period of 1 second. Use a callback function to reverse this animation. This function should also contain the statement that sets the URL for the enlarged image. The effect will be for the current image to fade out as it slides to the left, and then for the new image to fade in as it slides to the right.