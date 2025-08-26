
/*

    Topic: Variable Hoisting in JavaScript
    --------------------------------------

    Hoisting = JavaScript's default behavior of moving
    declarations to the top of the current scope.

    Key Points:
    1. var is hoisted (declared at top), initialized with undefined.
    2. let and const are hoisted but kept in "Temporal Dead Zone (TDZ)".
       Accessing them before declaration gives ReferenceError.
    3. Function declarations are hoisted completely (can call before define).

*/

// Example with var (hoisted, initialized as undefined)
console.log("Using var before declaration:", myVar); 
var myVar = 10;
console.log("After initialization:", myVar);

// Example with let (hoisted but in TDZ → ReferenceError if accessed early)
try {
    console.log("Using let before declaration:", myLet); 
} catch (error) {
    console.log("Error with let before declaration:", error.message);
}
let myLet = 20;
console.log("After initialization:", myLet);

// Example with const (same TDZ issue as let)
try {
    console.log("Using const before declaration:", myConst);
} catch (error) {
    console.log("Error with const before declaration:", error.message);
}
const myConst = 30;
console.log("After initialization:", myConst);

// Function declaration (fully hoisted)
hoistedFunc(); 
function hoistedFunc() {
    console.log("Function hoisting works!");
}

// Function expression with var (only variable is hoisted, not assignment)
try {
    notHoisted(); // Error, because assignment not hoisted
} catch (error) {
    console.log("Error with function expression before assignment:", error.message);
}
var notHoisted = function () {
    console.log("This function expression works only after initialization.");
};
notHoisted();
