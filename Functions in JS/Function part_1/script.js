
/*
    Topic: Functions in JavaScript - parameters, arguments, rest parameters, hoisting (Variable & Function)
    ------------------------------------------------------------------------------------------------------

    Why functions are widely used:
        1. Reusability: write once, use many times (DRY).
        2. Modularity: split large programs into smaller pieces.
        3. Readability & testing: easier to understand and test.
        4. Abstraction: hide details, expose a simple interface.

    Key terms:
        • Parameters: variables listed in the function definition.
        • Arguments: actual values passed when calling the function.
        • Rest parameters: gather remaining arguments into an array using (...).
        • Variable Hoisting: var declarations hoisted (initialized as undefined);
          let/const are hoisted but in Temporal Dead Zone (TDZ) until declared.
        • Function Hoisting: function declarations are hoisted fully (callable before definition);
          function expressions/arrow functions are not hoisted the same way.
*/

/* ---------------------------------------------
    1) Parameters vs Arguments
----------------------------------------------*/

// Definition uses parameters (name, age)
function introduce(name, age) {
    console.log("Hello " + name + ", you are " + age + " years old.");
}

// Call passes arguments ("Aditya", 21)
introduce("Aditya", 21);


/* ---------------------------------------------
    2) Rest Parameters (...args)
----------------------------------------------*/

// Collects any number of numeric arguments into an array
function sumAll(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log("Sum (10, 20, 30, 40):", sumAll(10, 20, 30, 40));


/* ---------------------------------------------
    3) Default Parameters (helper concept)
----------------------------------------------*/

function greet(user = "Guest") {
    return "Welcome, " + user + "!";
}
console.log(greet("Aditya"));
console.log(greet());


/* ---------------------------------------------
    4) Function Forms (declaration, expression, arrow)
----------------------------------------------*/

// Function Declaration (eligible for hoisting)
function multiply(a, b) {
    return a * b;
}
console.log("Multiply (4, 6):", multiply(4, 6));

// Function Expression (not hoisted like declarations)
const divide = function (a, b) {
    return a / b;
};
console.log("Divide (20, 5):", divide(20, 5));

// Arrow Function (short syntax, lexical this)
const add = (a, b) => a + b;
console.log("Add (5, 3):", add(5, 3));


/* ---------------------------------------------
    5) Variable Hoisting
----------------------------------------------*/

// var is hoisted: declaration moves up, value is undefined until assignment
console.log("var x before declaration:", x); // undefined
var x = 42;
console.log("var x after assignment:", x);

// let/const are hoisted but in TDZ, uncommenting lines below causes ReferenceError
// console.log("let y before declaration:", y); // ReferenceError
let y = 10;
console.log("let y after declaration:", y);

// console.log("const z before declaration:", z); // ReferenceError
const z = 99;
console.log("const z after declaration:", z);


/* ---------------------------------------------
    6) Function Hoisting
----------------------------------------------*/

// Function Declaration can be called before its definition
hoistedGreet();
function hoistedGreet() {
    console.log("Function Declaration is hoisted (works before definition).");
}

// Function Expression / Arrow are not hoisted the same way (identifier is hoisted, not value)
// Uncommenting the next call will throw: Cannot access before initialization
// notHoistedExpression();
const notHoistedExpression = function () {
    console.log("Function Expression works only after its line executes.");
};
notHoistedExpression();

// Uncommenting the next call will also throw if placed before the definition
// notHoistedArrow();
const notHoistedArrow = () => {
    console.log("Arrow Function works only after its line executes.");
};
notHoistedArrow();


/* ---------------------------------------------
    7) Quick Recap (in comments)
----------------------------------------------

    Parameters vs Arguments:
        • Parameters are placeholders in the function definition.
        • Arguments are real values supplied at call time.

    Rest Parameters:
        • Use ...name to gather remaining arguments into an array.
        • Only one rest parameter, and it must be last in the parameter list.

    Variable Hoisting:
        • var → hoisted and initialized as undefined.
        • let/const → hoisted but in TDZ until the declaration line runs.

    Function Hoisting:
        • Function Declaration → fully hoisted (safe to call earlier).
        • Function Expression / Arrow → not callable before the line executes.
*/
