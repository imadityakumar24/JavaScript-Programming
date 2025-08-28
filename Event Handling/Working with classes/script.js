
/* 
Topic: Working with Classes (classList methods)

Explanation:
1. classList.add("className") → Adds a CSS class.
2. classList.remove("className") → Removes a CSS class.
3. classList.toggle("className") → Switches a class on/off.
*/


// Select elements
const myPara    = document.getElementById("myPara");
const addBtn    = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");


// 1. Add class
addBtn.addEventListener("click", function () {
    myPara.classList.add("highlight", "bigText");   // Adds multiple classes
    console.log("Classes after add:", myPara.className);   // Check HTML note: output in console
});


// 2. Remove class
removeBtn.addEventListener("click", function () {
    myPara.classList.remove("highlight");   // Removes only highlight
    console.log("Classes after remove:", myPara.className);   // Check HTML note: output in console
});

  
// 3. Toggle class
toggleBtn.addEventListener("click", function () {
    myPara.classList.toggle("bigText");   // Toggles bigText on/off
    console.log("Classes after toggle:", myPara.className);   // Check HTML note: output in console
});
