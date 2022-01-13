"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
/**
 * Display the current time on the page.
 */
    const now = new Date();
    const noon = 12;
    const midnight = 0;
    let ampm = "AM";
    let hours = now.getHours();

    // correct hours for AM/PM
    if (hours > noon){   // if past noon (12)
        hours -= noon; 
        ampm = "PM";
    }
    else {
        if (hours == noon){
            ampm = "PM";
        }
        else if (hours == midnight){
            hours = noon;
        }
    }

    $("#hours").textContent = hours;
    $("#minutes").textContent = padSingleDigit(now.getMinutes());
    $("#seconds").textContent = padSingleDigit(now.getSeconds());
    $("#ampm").textContent = ampm;
};

document.addEventListener("DOMContentLoaded", () => {
/**
 * Run on document ready.
 */
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
});