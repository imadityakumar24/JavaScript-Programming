
/*
    Topic: Understanding Scoping in JavaScript
    ------------------------------------------

    • Global Scope:
        - Variables declared outside of any function or block.
        - Accessible everywhere in the script.
    
    • Function Scope:
        - Variables declared inside a function using var, let, or const.
        - Accessible only within that function.
*/



/* ---------------------------------------------
    1) Global Scope
----------------------------------------------*/
let globalVar = "I am Global";

function showGlobal() {
    console.log("Accessing Global Variable inside function:", globalVar);
}

showGlobal();
console.log("Accessing Global Variable outside function:", globalVar);



/* ---------------------------------------------
    2) Function Scope
----------------------------------------------*/
function functionScopeExample() {
    let localVar = "I am Local (Function Scope)";
    console.log("Inside function:", localVar);
}

functionScopeExample();

// Trying to access localVar outside will cause error
// console.log(localVar); // ❌ ReferenceError



/*
    Quick Recap:
        • Global Scope → Visible everywhere.
        • Function Scope → Visible only inside the function.
*/
