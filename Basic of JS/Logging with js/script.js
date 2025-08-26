
/*
  Logging and Interaction in JavaScript
  --------------------------------------
  1. console.log()  -> General messages
  2. console.info() -> Informational messages
  3. console.warn() -> Warning messages (yellow highlight)
  4. alert()        -> Pops up a dialog box
  5. prompt()       -> Takes input from the user
*/

// console.log()
console.log("This is a log message: Hello from JavaScript!");

// console.info()
console.info("This is an info message: For informational purpose only.");

// console.warn()
console.warn("This is a warning message: Be careful!");

// alert()
alert("Welcome! This is an alert box.");

// prompt()
let username = prompt("Enter your name: ");
console.log("User entered:", username);

// Show result on webpage
document.body.innerHTML += `<p><b>Hello, ${username}!</b> (check console for logs)</p>`;
