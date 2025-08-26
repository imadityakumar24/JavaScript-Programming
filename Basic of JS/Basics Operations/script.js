
/*
  Topic: Basic Operators in JavaScript
  ------------------------------------
  
  1. Arithmetic Operators
     +, -, *, /, %, **

  2. Assignment Operators
     =, +=, -=, *=, /=, %=

  3. Increment / Decrement
     ++ (increment), -- (decrement)

  4. Comparison Operators
     == (equal, type conversion allowed)
     === (strict equal, no type conversion)
     != (not equal), !== (strict not equal)
     >, <, >=, <=

  5. Logical Operators
     && (AND), || (OR), ! (NOT)

  6. Bitwise Operators
     & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift)
*/

// Arithmetic
let a = 10;
let b = 3;
let sum = a + b;
let diff = a - b;
let prod = a * b;
let div = a / b;
let mod = a % b;
let power = a ** b;

// Assignment
let x = 5;
x += 3; // x = x + 3
let y = 10;
y *= 2; // y = y * 2

// Increment / Decrement
let count = 5;
count++; // 6
count--; // 5 again

// Comparison
let comp1 = (5 == "5");   // true (type conversion)
let comp2 = (5 === "5");  // false (strict)
let comp3 = (10 != "10"); // false
let comp4 = (10 !== "10");// true

// Logical
let logicalAnd = (true && false); // false
let logicalOr = (true || false);  // true
let logicalNot = !true;           // false

// Bitwise
let bitAnd = (5 & 1);   // 0101 & 0001 = 0001 → 1
let bitOr = (5 | 1);    // 0101 | 0001 = 0101 → 5
let bitXor = (5 ^ 1);   // 0101 ^ 0001 = 0100 → 4
let bitNot = (~5);      // ~0101 = -(5+1) → -6
let leftShift = (5 << 1);  // 5*2 = 10
let rightShift = (5 >> 1); // 5/2 = 2

// Console output
console.log("Arithmetic ->", sum, diff, prod, div, mod, power);
console.log("Assignment ->", x, y);
console.log("Increment/Decrement ->", count);
console.log("Comparison ->", comp1, comp2, comp3, comp4);
console.log("Logical ->", logicalAnd, logicalOr, logicalNot);
console.log("Bitwise ->", bitAnd, bitOr, bitXor, bitNot, leftShift, rightShift);

// Show results on webpage
document.getElementById("result").innerHTML = `
  <h3>Arithmetic</h3>
  Sum: ${sum}, Diff: ${diff}, Prod: ${prod}, Div: ${div}, Mod: ${mod}, Power: ${power} <br><br>

  <h3>Assignment</h3>
  x after += 3: ${x}, y after *= 2: ${y} <br><br>

  <h3>Increment/Decrement</h3>
  Count: ${count} <br><br>

  <h3>Comparison</h3>
  5 == "5": ${comp1}, 5 === "5": ${comp2}, 10 != "10": ${comp3}, 10 !== "10": ${comp4} <br><br>

  <h3>Logical</h3>
  true && false: ${logicalAnd}, true || false: ${logicalOr}, !true: ${logicalNot} <br><br>

  <h3>Bitwise</h3>
  5 & 1: ${bitAnd}, 5 | 1: ${bitOr}, 5 ^ 1: ${bitXor}, ~5: ${bitNot}, 5 << 1: ${leftShift}, 5 >> 1: ${rightShift}
`;
