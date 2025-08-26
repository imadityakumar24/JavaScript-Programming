
/*

    Topic: More Functions in JavaScript
    -----------------------------------

    • Arrow Function (=>) → Shorter syntax for writing functions.
    • Fat Arrow Function → Another name for Arrow Function.
    • Anonymous Function → Function without a name.
    • Higher Order Function → Function that takes other functions as arguments OR returns a function.
    • Callback Function → Function passed into another function to be called later.
    • First Class Function → Functions in JS are treated as values (can be stored, passed, returned).
    • Pure Function → Always returns same output for same input; no side effects.
    • Impure Function → Output depends on external factors OR causes side effects.

*/


/* ---------------------------------------------
    1) Arrow Function / Fat Arrow
----------------------------------------------*/
const add = (a, b) => a + b;
console.log("Arrow Function (Add):", add(5, 3));


/* ---------------------------------------------
    2) Anonymous Function (no name, used directly)
----------------------------------------------*/
setTimeout(function () {
    console.log("Anonymous function executed inside setTimeout");
}, 500);


  
/* ---------------------------------------------
    3) Higher Order Function
----------------------------------------------*/
function higherOrder(fn, value) {
    return fn(value);
}
function square(x) {
    return x * x;
}
console.log("Higher Order Function:", higherOrder(square, 6));


  
/* ---------------------------------------------
    4) Callback Function
----------------------------------------------*/
function processUserInput(callback) {
    let name = "Aditya";
    callback(name); // executes callback
}
processUserInput(function (user) {
    console.log("Hello", user, "- from Callback!");
});


  
/* ---------------------------------------------
    5) First Class Function
----------------------------------------------*/
function greet(msg) {
    return "Hi " + msg;
}
let funcHolder = greet; // storing function in variable
console.log("First Class Function:", funcHolder("Aditya"));


  
/* ---------------------------------------------
    6) Pure Function
----------------------------------------------*/
function pureMultiply(a, b) {
    return a * b; // depends only on inputs
}
console.log("Pure Function:", pureMultiply(4, 5));


  
/* ---------------------------------------------
    7) Impure Function
----------------------------------------------*/
let count = 0;
function impureIncrement() {
    count++; // modifies external variable
    return count;
}
console.log("Impure Function call 1:", impureIncrement());
console.log("Impure Function call 2:", impureIncrement());


/*
    Quick Recap:
        • Arrow/Fat Arrow → Short syntax functions.
        • Anonymous → No name, often used as argument.
        • Higher Order → Takes/returns function.
        • Callback → Passed into another function.
        • First Class → Functions behave like variables.
        • Pure → No side effects, same output for same input.
        • Impure → Relies on or changes external state.
*/
