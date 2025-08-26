
/*

  Topic: JavaScript Data Types
  ----------------------------

  1. Number
     - Represents both integers and floating-point numbers.
     - Example: 42, 3.14
     - Special values: NaN (Not-a-Number), Infinity, -Infinity

  2. String
     - Sequence of characters enclosed in quotes (" " or ' ' or ` `).
     - Example: "Hello", 'World', `Template String`

  3. Boolean
     - Logical values: true or false
     - Used for conditions, comparisons, logic.

  4. Null
     - Special value meaning "no value" or "empty".
     - typeof null → "object" (this is a JavaScript bug/quirk).

  5. Undefined
     - A variable declared but not assigned a value is undefined.
     - Example: let x;  // undefined

  6. Object
     - Collection of key-value pairs.
     - Example: { name: "Aditya", age: 21 }

  7. Array
     - Special type of object for storing ordered lists.
     - Example: [10, 20, 30]

  8. Symbol
     - Unique and immutable primitive value.
     - Often used as unique keys for object properties.

  (Extra) BigInt
     - Used to store very large integers beyond Number limit.
     - Example: 123456789012345678901234567890n
     
*/


// Number (integer & float)
let intNum = 42;
let floatNum = 3.14;

// String
let str = "Hello JavaScript";

// Boolean
let isLearning = true;

// Null
let emptyValue = null;

// Undefined
let notAssigned;

// Object
let person = { name: "Aditya", age: 21 };

// Array
let arr = [10, 20, 30];

// Symbol
let uniqueId = Symbol("id");

// BigInt (extra modern data type)
let bigNumber = 123456789012345678901234567890n;

// Console output with type checking
console.log("Number:", intNum, typeof intNum);
console.log("Float:", floatNum, typeof floatNum);
console.log("String:", str, typeof str);
console.log("Boolean:", isLearning, typeof isLearning);
console.log("Null:", emptyValue, typeof emptyValue); // shows "object"
console.log("Undefined:", notAssigned, typeof notAssigned);
console.log("Object:", person, typeof person);
console.log("Array:", arr, Array.isArray(arr)); // true
console.log("Symbol:", uniqueId, typeof uniqueId);
console.log("BigInt:", bigNumber, typeof bigNumber);

// Show results on webpage
document.getElementById("result").innerHTML = `
  <b>Number:</b> ${intNum} <br>
  <b>Float:</b> ${floatNum} <br>
  <b>String:</b> ${str} <br>
  <b>Boolean:</b> ${isLearning} <br>
  <b>Null:</b> ${emptyValue} <br>
  <b>Undefined:</b> ${notAssigned} <br>
  <b>Object:</b> Name = ${person.name}, Age = ${person.age} <br>
  <b>Array:</b> ${arr.join(", ")} <br>
  <b>Symbol:</b> ${uniqueId.toString()} <br>
  <b>BigInt:</b> ${bigNumber}
`;
