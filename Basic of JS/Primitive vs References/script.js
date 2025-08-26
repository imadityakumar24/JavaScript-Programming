
/*
  Topic: Primitive vs Reference (Relative) Data Types in JavaScript
  ----------------------------------------------------------------

  1. Primitive Data Types (stored by value)
     - Number, String, Boolean, Null, Undefined, Symbol, BigInt
     Characteristics:
       - Immutable (cannot be directly changed).
       - Stored in stack memory.
       - Copy creates a new value (independent).

  2. Reference (Non-Primitive / Relative) Data Types
     - Object, Array, Function
     Characteristics:
       - Stored in heap memory, variable stores a reference (address).
       - Mutable (can be changed).
       - Copy shares the same reference (changes affect both).
*/

// Primitive Example
let a = 10;
let b = a;   // copy value
b = 20;      // changing b does not affect a
console.log("Primitive Example -> a:", a, "b:", b);

// Reference Example (Array)
let arr1 = [1, 2, 3];
let arr2 = arr1; // copy reference, both point to same array
arr2.push(4);    // changes arr1 too
console.log("Reference Example -> arr1:", arr1, "arr2:", arr2);

// Reference Example (Object)
let obj1 = { name: "Aditya" };
let obj2 = obj1; // both share same reference
obj2.name = "Kumar"; // affects obj1 too
console.log("Reference Example -> obj1:", obj1, "obj2:", obj2);

// Show results on webpage
document.getElementById("result").innerHTML = `
  <h3>Primitive Example</h3>
  a = 10, b = 20 (changing b did not affect a) <br><br>

  <h3>Reference Example (Array)</h3>
  arr1 = [${arr1}] <br>
  arr2 = [${arr2}] <br><br>

  <h3>Reference Example (Object)</h3>
  obj1 = ${JSON.stringify(obj1)} <br>
  obj2 = ${JSON.stringify(obj2)}
`;
