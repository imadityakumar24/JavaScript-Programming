/*  
    Topic: Manipulating DOM Elements - Interactive Boxes

    This example uses:
    - innerHTML, textContent
    - setAttribute, getAttribute
    - style property
    - classList (add, remove, toggle)
*/

/*  

    Topic: Manipulating DOM Elements - Interactive Boxes

    This example uses:

    1. innerHTML 
       → Gets or sets the HTML content of an element (can insert HTML tags).

    2. textContent 
       → Gets or sets only the text content of an element (ignores HTML tags).

    3. setAttribute(attribute, value) 
       → Sets a new attribute or updates an existing attribute on an element.

    4. getAttribute(attribute) 
       → Returns the value of a given attribute from an element.

    5. style property 
       → Used to directly apply CSS styles to an element (inline styles).

    6. classList 
       → Allows adding, removing, or toggling CSS classes dynamically:
            - add("className") → Adds a class.
            - remove("className") → Removes a class.
            - toggle("className") → Adds if not present, removes if present.
*/

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

/* Change text using innerHTML and textContent */
function changeText() {
    box1.innerHTML = "Changed <i>HTML</i>";  // innerHTML adds HTML tags
    box2.textContent = "Only Text Changed";  // textContent only text
}

/* Change color using style */
function changeColor() {
    box1.style.backgroundColor = "lightblue";
    box2.style.backgroundColor = "lightgreen";
    box3.style.backgroundColor = "pink";
}

/* Add class highlight */
function addClass() {
    box3.classList.add("highlight");
}

/* Remove class highlight */
function removeClass() {
    box3.classList.remove("highlight");
}

/* Toggle highlight class */
function toggleClass() {
    box3.classList.toggle("highlight");
}

/* Set attribute */
function setBoxAttr() {
    box2.setAttribute("title", "This is Box 2");
    console.log("Attribute set on Box 2: title='This is Box 2'");
}

/* Get attribute */
function getBoxAttr() {
    let attr = box2.getAttribute("title");
    console.log("Box 2 title attribute: ", attr);
}
