
/*
=======  nullish coaledcing operator ========  

?? 

The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

the nullish coalescing operator (??) is a js operator that is used to provide a dafault value for a varian;e thatmay be null or undefined 

in js the following vlaues are considered falsy 

false
0
""
an empty string
null
undefined
Nan


for above if wen use || operator all the above 7 falsy values are considered as null and undefined 

but but but

if we use ?? operator only (null and undefined is considerd) as falsy value

*/


let myval  = 67;
const num1 = myval || 10;
const num2 = myval || 10;

console.log(num1);   // 67
console.log(num2);   // 67



let myvalue  = false;
const num11 = myvalue || 10;
const num22 = myvalue || 10;

console.log(num11);   // 10
console.log(num22);   // 10


// let val = null;        // print 20 40
// let val = undefined;   // print 20 40
// let val = 0;           // print 0 0
// let val = "";          // print "" ""
// let val = NaN;         // print NaN NaN
let val = false           // print false false
let a1 = val ?? 20;
let a2 = val ?? 40;

console.log(a1, a2);


// use cases

// this is used in objects whlile fetching the data 
// 

// If response.userName is null or undefined, name becomes 'Guest'.
// If response.userName is "" (empty string) or 0, it keeps those values.

// Safely accesses contactInfo.email. If contactInfo or email is null/undefined, 
// it defaults to "N/A".
