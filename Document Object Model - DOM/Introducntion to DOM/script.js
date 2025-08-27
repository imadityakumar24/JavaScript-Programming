
/* 
    Topic: Introduction to DOM in JavaScript

    The DOM (Document Object Model) represents the structure of an HTML document as a tree.
    JavaScript can be used to access and modify HTML elements through the DOM.
*/

/* Get elements using DOM methods */
let heading = document.getElementById("heading");    // Access <h1> element
let para = document.getElementById("para");          // Access <p> element
let btn = document.getElementById("btn");            // Access <button> element

/* Change text when button is clicked */
btn.addEventListener("click", function() {
    /* Modifying DOM content */
    heading.textContent = "DOM Updated!";
    para.textContent = "The text has been changed using JavaScript DOM.";
});
