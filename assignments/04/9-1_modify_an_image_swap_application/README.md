## 9-1: Modify an Image Swap Application
In this exercise, you’ll modify another Image Swap application so it uses effects to display and hide the images.
### Instructions
1. Review the code in the JavaScript file to see that it’s identical to the code for the Image Swap application in chapter 8. Now, run this application to see how it works.
2. Add statements to the JavaScript file that fade the caption and image out over a duration of one second.
3. Modify the statements that display the new caption and image so the caption and image are faded in over a duration of one second. Then, run the application to see that this doesn’t work the way you might expect. Instead, the new caption and image are displayed and then faded out and back in.
4. Add a callback function to the statement that fades out the image. Then, move the statements that display the new caption and image within this function. Now, the old caption and image should fade out and the new caption and image should fade in.