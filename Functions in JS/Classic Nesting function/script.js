


/*
    Topic: Classic Function, Nested Function, Scope Chain in JavaScript
    -------------------------------------------------------------------

    • Classic Function → A normal function declared using function keyword.
    • Nested Function → Function inside another function.
    • Scope Chain → How JS resolves variables by looking at 
      local → outer → global scope.
*/

/* ---------------------------------------------
    1) Classic Function
----------------------------------------------*/
function greet(name) {
    console.log("Hello, " + name);
}
greet("Aditya");


/* ---------------------------------------------
    2) Nested Function
----------------------------------------------*/
function outerFunction(outerVar) {
    console.log("Outer Function called with:", outerVar);

    function innerFunction(innerVar) {
        console.log("Inner Function called with:", innerVar);
        console.log("Can inner access outerVar? ->", outerVar); // Yes
    }

    // calling inner function inside outer
    innerFunction("Inner Value");
}
outerFunction("Outer Value");


/* ---------------------------------------------
    3) Scope Chain
----------------------------------------------*/
let globalVar = "I am Global";

function firstLevel() {
    let firstVar = "I am in First Level";

    function secondLevel() {
        let secondVar = "I am in Second Level";

        console.log(globalVar); // from Global scope
        console.log(firstVar);  // from firstLevel scope
        console.log(secondVar); // from secondLevel scope
    }

    secondLevel();
}

firstLevel();

/*
    Quick Recap:
        • Classic Function → Normal declared function.
        • Nested Function → Function inside another, can access parent vars.
        • Scope Chain → JS looks for variables inside function, 
          then parent function, then global scope.
*/
