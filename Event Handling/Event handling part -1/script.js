
/* 
Topic: Event Handling in JavaScript

Explanation:
1. addEventListener(): We use it to attach multiple event handlers on elements.
2. event bubbling: By default, when you click a child, the event bubbles up to its parent.
3. event.target: Identifies the element that actually triggered the event (useful inside parent handlers).
*/


// 1. addEventListener() on button
const parentDiv    = document.getElementById("parent");
const childButton  = document.getElementById("childBtn");

childButton.addEventListener("click", function (event) {
    alert("Button clicked!");
    console.log("Child Button clicked");
});


  
// 2. Event bubbling example - listener on parent div
parentDiv.addEventListener("click", function (event) {
    alert("Parent Div clicked (bubbling)");
    console.log("Event bubbled to Parent Div");

  
    // 3. Using event.target
    console.log("event.target is:", event.target);
    alert("You actually clicked: " + event.target.tagName);
});
