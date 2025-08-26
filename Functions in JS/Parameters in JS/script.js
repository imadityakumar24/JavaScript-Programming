
/*
    Topic: Parameters in JavaScript - [required, destructured, rest, default]
    -------------------------------------------------------------------------

    Types of Parameters:
        • Required Parameters → Must be passed, otherwise undefined.
        • Default Parameters → Provide fallback value if argument not passed.
        • Rest Parameters → Collects multiple arguments into an array using (...).
        • Destructured Parameters → Extract values directly from objects/arrays.
*/

/* ---------------------------------------------
    1) Required Parameters
----------------------------------------------*/

function greet(name) {
    console.log("Hello, " + name);
}
greet("Aditya");   // works fine
greet();           // undefined if argument not passed


/* ---------------------------------------------
    2) Default Parameters
----------------------------------------------*/

function welcome(user = "Guest") {
    console.log("Welcome, " + user);
}
welcome("Aditya");   // "Welcome, Aditya"
welcome();           // "Welcome, Guest"


/* ---------------------------------------------
    3) Rest Parameters
----------------------------------------------*/

function sumAll(...numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    return total;
}
console.log("Sum:", sumAll(10, 20, 30, 40));   // 100


/* ---------------------------------------------
    4) Destructured Parameters
----------------------------------------------*/

// Destructuring an object in parameters
function displayUser({ name, age }) {
    console.log("User:", name, ", Age:", age);
}
displayUser({ name: "Aditya", age: 21 });

// Destructuring an array in parameters
function printCoords([x, y]) {
    console.log("X:", x, "Y:", y);
}
printCoords([5, 10]);


/* ---------------------------------------------
    Quick Recap:
        • Required → must be passed, else undefined.
        • Default → use fallback value if not provided.
        • Rest → gather all extra arguments into an array.
        • Destructured → directly unpack objects/arrays in function parameters.
*/
