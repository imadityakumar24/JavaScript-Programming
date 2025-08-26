

/*
  What are Statements in JavaScript?
  ----------------------------------
  - A statement is an instruction for the browser to perform an action.
  - Example: declaring a variable, printing a value, doing a calculation.

  Why Semicolons?
  ---------------
  - Semicolons mark the end of a statement.
  - In JavaScript, semicolons are optional in many cases (Automatic Semicolon Insertion).
  - Best practice: Always use semicolons to avoid unexpected errors.

  How to add Comments?
  --------------------
  - Single-line comment: //
  - Multi-line comment:  /* ... */  


// 👉 Example Statements
let x = 10;        // Statement: variable declaration
let y = 20;        // Statement
let sum = x + y;   // Statement: calculation

// Print on console
console.log("Sum of x and y is:", sum);

// Print on webpage
document.getElementById("demo").innerHTML = 
  "Sum of x and y is: " + sum; // Statement ending with semicolon
