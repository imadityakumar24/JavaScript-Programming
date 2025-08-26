
/*
  Topic: Expressions vs Statements in JavaScript
  ----------------------------------------------
  Expression:
    - Produces a value.
    - Example: 5 + 10 → 15

  Statement:
    - An instruction that performs an action.
    - Example: let x = 5;
*/

// Expression examples
let expr1 = 5 + 10;          // Expression → value = 15
let expr2 = "Hello " + "JS"; // Expression → "Hello JS"

// Statement examples
let x = 20;                  // Variable declaration (statement)
if (x > 10) {                // if-statement
    console.log("x is greater than 10");
}

// Show results on webpage
document.getElementById("result").innerHTML = `
  <b>Expression 1:</b> 5 + 10 = ${expr1} <br>
  <b>Expression 2:</b> "Hello " + "JS" = ${expr2} <br>
  <b>Statement Example:</b> if (x > 10) { ... } executed, check console.
`;
