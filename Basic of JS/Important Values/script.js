
/*
  Topic: Some Important Values in JavaScript [undefined, null, NaN, Infinity]
  --------------------------------------------------------------------------

  1. undefined
     - Default value of a variable that is declared but not assigned.
     - typeof undefined → "undefined"

  2. null
     - Represents "no value" or "empty value".
     - typeof null → "object" (this is a known JavaScript bug/quirk).

  3. NaN (Not-a-Number)
     - Represents an invalid number result.
     - Example: 0/0 or parseInt("abc")
     - typeof NaN → "number"

  4. Infinity
     - Represents a number larger than any other number.
     - Example: 1/0 → Infinity
     - typeof Infinity → "number"
*/

// undefined
let notAssigned; // variable declared but not initialized
console.log("undefined:", notAssigned, typeof notAssigned);

// null
let emptyValue = null;
console.log("null:", emptyValue, typeof emptyValue); // object

// NaN
let invalidNumber = 0 / 0; 
let parsed = parseInt("abc"); // also gives NaN
console.log("NaN (0/0):", invalidNumber, typeof invalidNumber);
console.log("NaN (parseInt('abc')):", parsed, typeof parsed);

// Infinity
let positiveInfinity = 1 / 0;
let negativeInfinity = -1 / 0;
console.log("Infinity:", positiveInfinity, typeof positiveInfinity);
console.log("-Infinity:", negativeInfinity, typeof negativeInfinity);

// Show results on webpage
document.getElementById("result").innerHTML = `
  <b>undefined:</b> ${notAssigned} (type: ${typeof notAssigned}) <br>
  <b>null:</b> ${emptyValue} (type: ${typeof emptyValue}) <br>
  <b>NaN (0/0):</b> ${invalidNumber} (type: ${typeof invalidNumber}) <br>
  <b>NaN (parseInt("abc")):</b> ${parsed} (type: ${typeof parsed}) <br>
  <b>Infinity:</b> ${positiveInfinity} (type: ${typeof positiveInfinity}) <br>
  <b>-Infinity:</b> ${negativeInfinity} (type: ${typeof negativeInfinity})
`;
