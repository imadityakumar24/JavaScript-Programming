
/*
    Topic: Closures and Scoping Rule in JavaScript
    ----------------------------------------------

    • Scoping Rule:
        - Defines where variables are accessible.
        - JS uses Lexical Scope (scope is determined by where code is written).

    • Closure:
        - A function that "remembers" variables from its outer scope,
          even after the outer function has finished execution.
        - Allows data encapsulation.
*/



/* ---------------------------------------------
    1) Example of Scoping Rule (Lexical Scope)
----------------------------------------------*/
let outerVar = "I am from Outer Scope";

function outerFunction() {
    let innerVar = "I am from Inner Scope";

    function innerFunction() {
        console.log(outerVar);      // Can access outer scope
        console.log(innerVar);      // Can access parent's scope
    }

    innerFunction();
}

outerFunction();



/* ---------------------------------------------
    2) Example of Closure
----------------------------------------------*/
function makeCounter() {
    let count = 0;      // private variable

    return function () {
        count++;
        return count;
    };
}

const counter1 = makeCounter();
console.log("Closure Counter 1:", counter1()); // 1
console.log("Closure Counter 1:", counter1()); // 2
console.log("Closure Counter 1:", counter1()); // 3

const counter2 = makeCounter(); // independent counter
console.log("Closure Counter 2:", counter2()); // 1



/*
    Quick Recap:
        • JS follows Lexical Scoping (scope is based on code position).
        • Closure allows a function to access outer function's variables,
          even after the outer function has returned.
*/
