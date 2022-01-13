"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
/**
 * Display the current time on the page.
 */
    const now = new Date();
    let hours = now.getHours(); // this was assigned as a const, and does not work with a const as hours is being changed
    let ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("#hours").textContent = hours;
    $("#minutes").textContent = padSingleDigit(now.getMinutes());
    $("#seconds").textContent = padSingleDigit(now.getSeconds());
    $("#ampm").textContent = ampm;
};


//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {   
/**
 * Tick the stopwatch forward by 10 milliseconds.
 */
    // increment milliseconds by 10 milliseconds
    
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    
    // if seconds total 60, increment minutes by one and reset seconds to zero
    
    //display new stopwatch time
    const second = 1000;
    const minute = 60;

    elapsedMilliseconds += 10; 
    if (elapsedMilliseconds == second){
        elapsedSeconds += 1;
        elapsedMilliseconds = 0;
    }
    if (elapsedSeconds == minute){
        elapsedMinutes += 1;
        elapsedSeconds = 0;
    }

    $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
    $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
    $("#s_ms").textContent = elapsedMilliseconds;
};

// event handler functions
const startStopwatch = evt => {
/**
 * Start the stopwatch event.
 * 
 * @param {object} evt - The events' context.
 */
    // prevent default action of link
        
    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    tickStopwatch();
    stopwatchTimer = setInterval(tickStopwatch, 10);

    evt.preventDefault();
};

const stopStopwatch = evt => {
/**
 * Stop the stopwatch event.
 * 
 * @param {object} evt - The events' context.
 */
    // prevent default action of link
        
    // stop timer
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;

    evt.preventDefault();
};

const resetStopwatch = evt => {
/**
 * Reset the stopwatch to default.
 * 
 * @param {object} evt - The events' context.
 */
    // prevent default action of link
        
    // stop timer
        
    // reset elapsed variables and clear stopwatch display
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;
    
    $("#s_minutes").textContent = "00";
    $("#s_seconds").textContent = "00";
    $("#s_ms").textContent = "000";
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;

    evt.preventDefault();
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
	
	// set up stopwatch event handlers
    $("#start").addEventListener("click", startStopwatch);
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopwatch);
});
