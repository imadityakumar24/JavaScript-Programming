
/*
    Topic: Immediately Invoked Function Expression (IIFE)
    -----------------------------------------------------

    • IIFE → A function that runs immediately after it is defined.
    • Syntax → (function() { ... })();
    • Purpose:
        1. Avoid polluting global scope.
        2. Create private variables (encapsulation).
        3. Run initialization code immediately.
*/


/* ---------------------------------------------
    1) Simple IIFE
----------------------------------------------*/
(function () {
    console.log("This IIFE runs immediately!");
})();



/* ---------------------------------------------
    2) IIFE with Parameters
----------------------------------------------*/
(function (name) {
    console.log("Hello, " + name + " from IIFE!");
})("Aditya");



/* ---------------------------------------------
    3) IIFE with Return Value
----------------------------------------------*/
let sum = (function (a, b) {
    return a + b;
})(10, 20);

console.log("Sum from IIFE:", sum);



/* ---------------------------------------------
    4) IIFE with Arrow Function
----------------------------------------------*/
(() => {
    console.log("Arrow Function IIFE executed!");
})();



/*
    Quick Recap:
        • IIFE executes instantly after creation.
        • Helps keep variables private.
        • Commonly used in modular code and initialization tasks.
*/
