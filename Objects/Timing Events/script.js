
/*
    Topic: Timing Events in JavaScript
    ----------------------------------

    • setTimeout() → Executes a function after a specified delay (in milliseconds).
    • setInterval() → Repeatedly executes a function at specified intervals.
    • clearTimeout() → Stops a setTimeout before it executes.
    • clearInterval() → Stops a setInterval from repeating.
*/



/* ---------------------------------------------
    1) setTimeout()
----------------------------------------------*/
function greet() {
    console.log("Hello after 2 seconds!");
}
let timeoutId = setTimeout(greet, 2000); // executes after 2000ms (2s)



  
/* ---------------------------------------------
    2) clearTimeout()
----------------------------------------------*/
// Uncomment to cancel the timeout before it runs
// clearTimeout(timeoutId);



  
/* ---------------------------------------------
    3) setInterval()
----------------------------------------------*/
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log("Interval count:", count);
    if (count >= 5) {
        clearInterval(intervalId); // stop after 5 counts
        console.log("Interval cleared");
    }
}, 1000); // executes every 1000ms (1s)



/* ---------------------------------------------
    Quick Recap:
        • setTimeout → Executes function once after delay
        • setInterval → Executes repeatedly at intervals
        • clearTimeout → Stops a pending setTimeout
        • clearInterval → Stops a running setInterval
*/
