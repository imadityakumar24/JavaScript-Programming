
/* 
Topic: Scroll, Mouse, Key Events & Strict Mode

Explanation:
1. Scroll Events → Detect when user scrolls (window or element).
2. Mouse Events → Detect mouse interactions (click, dblclick, mouseover, etc.).
3. Key Events → Detect keyboard actions (keydown, keyup, keypress).
4. Strict Mode → Makes JavaScript safer by preventing silent errors and using cleaner syntax.
*/


// 1. Scroll Event
const scrollBox = document.getElementById("scrollBox");
scrollBox.addEventListener("scroll", function () {
    console.log("Scroll Event Triggered - Scrolling inside the box");   // Check HTML note: output in console
});



  
// 2. Mouse Events
const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("click", function () {
    alert("Mouse Clicked!");
    console.log("Mouse clicked on green box");   // Check HTML note: output in console
});

mouseBox.addEventListener("mouseover", function () {
    console.log("Mouse is over the box");   // Check HTML note: output in console
});

mouseBox.addEventListener("mouseout", function () {
    console.log("Mouse moved out of the box");   // Check HTML note: output in console
});



  
// 3. Key Events
const keyInput = document.getElementById("keyInput");

keyInput.addEventListener("keydown", function (event) {
    console.log("Key Down:", event.key);   // Check HTML note: output in console
});

keyInput.addEventListener("keyup", function (event) {
    console.log("Key Up:", event.key);   // Check HTML note: output in console
});



  
// 4. Strict Mode Example
"use strict";   // Enabling Strict Mode

// Example: Trying to use an undeclared variable (will throw error in strict mode)
try {
    undeclaredVar = 10;   // Normally allowed in sloppy mode, but error in strict mode
} catch (err) {
    console.log("Strict Mode Error:", err.message);   // Check HTML note: output in console
}
