
/*
  String Methods in JavaScript
  -----------------------------
  1. slice(start, end) -> Extracts part of a string
  2. splice()          -> Works on arrays (not strings). 
                          Used here with characters array.
  3. Template Strings  -> Use backticks (`) with ${variable}
  4. split()           -> Splits string into array
  5. replace()         -> Replaces part of a string
  6. includes()        -> Checks if substring exists
*/

let str = "Hello JavaScript World!";

// 1. slice()
let sliced = str.slice(6, 16); // "JavaScript"

// 2. splice() (with array of characters)
let arr = str.split(""); // convert to array
arr.splice(5, 1, "-");   // remove 1 char at index 5, replace with "-"
let splicedStr = arr.join("");

// 3. Template string
let name = "Aditya";
let templateStr = `Hello, my name is ${name} and I love ${sliced}.`;

// 4. split()
let words = str.split(" "); // split by space

// 5. replace()
let replaced = str.replace("World", "Universe");

// 6. includes()
let hasJS = str.includes("JavaScript");

// Show on console
console.log("Original String:", str);
console.log("slice(6,16):", sliced);
console.log("splice() with array:", splicedStr);
console.log("Template String:", templateStr);
console.log("split(' '):", words);
console.log("replace():", replaced);
console.log("includes('JavaScript'):", hasJS);

// Show on webpage
document.getElementById("result").innerHTML = `
  <b>Original:</b> ${str} <br>
  <b>slice(6,16):</b> ${sliced} <br>
  <b>splice() with array:</b> ${splicedStr} <br>
  <b>Template String:</b> ${templateStr} <br>
  <b>split(' '):</b> ${words.join(" | ")} <br>
  <b>replace():</b> ${replaced} <br>
  <b>includes("JavaScript"):</b> ${hasJS}
`;
