/*
  Important Notes about var, let, const:
  --------------------------------------
  1. var
     - Function-scoped (visible inside the whole function).
     - Can be re-declared and updated.
     - Gets hoisted (moved to top) with undefined value.

  2. let
     - Block-scoped (only inside { }).
     - Can be updated but NOT re-declared in the same scope.
     - Hoisted but not initialized (Temporal Dead Zone).

  3. const
     - Block-scoped (only inside { }).
     - Cannot be re-assigned after initialization.
     - Must be initialized at the time of declaration.
     - Good for constants & values that shouldn’t change.
*/

// Example using var
var name = "Aditya";
var name = "Kumar"; // ✅ re-declaration allowed
console.log("var example:", name);

// Example using let
let age = 21;
age = 22; // ✅ allowed (update)
// let age = 23; // ❌ not allowed in same scope
console.log("let example:", age);

// Example using const
const pi = 3.14159;
// pi = 3.14; // ❌ not allowed (can't reassign)
console.log("const example:", pi);

// Show results on webpage
document.getElementById("output").innerHTML = `
  <b>var:</b> ${name} <br>
  <b>let:</b> ${age} <br>
  <b>const:</b> ${pi}
`;
