
/*

=================== SCOPE ===================

SCOPE : functional scope, global scope and block scope

Functional Scope : function ke andar hi use kar sakte hai only
Global Scope     : poore code mein kahi bhi use kar sakte hai 
Block Scope  {}  : curly braces mein hi use kar sakte hai

Difference between var, let and const:
- var : function scoped, block scope ko ignore karta hai
- let : block scoped
- const : block scoped, value change nahi kar sakte

*/


// ========== Global Scope ==========
var globalVar1 = "Global var";
let globalVar2 = "Global let";
const globalVar3 = "Global const";

console.log(globalVar1); 
console.log(globalVar2); 
console.log(globalVar3); 



// ========== Functional Scope ==========
function myFunction() {
  var functionVar = "Function var";
  let functionLet = "Function let";
  const functionConst = "Function const";

  console.log(functionVar); 
  console.log(functionLet); 
  console.log(functionConst); 
  console.log(globalVar1);  // global accessible
}

myFunction();

// console.log(functionVar);   // Error
// console.log(functionLet);   // Error
// console.log(functionConst); // Error



// ========== Block Scope ==========
if (true) {
  var blockVar = "Block var";     // var block ignore karta hai
  let blockLet = "Block let";     // sirf block ke andar
  const blockConst = "Block const"; // sirf block ke andar

  console.log(blockVar);   
  console.log(blockLet);   
  console.log(blockConst); 
}

// var block ke bahar bhi accessible hota hai
console.log(blockVar); // accessible

// console.log(blockLet);   // Error
// console.log(blockConst); // Error
