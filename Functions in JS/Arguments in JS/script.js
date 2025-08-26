
/*
    Topic: Arguments in JavaScript - [positional, default, spread]
    --------------------------------------------------------------

    Key Points:
        • Positional Arguments → Values passed in the same order as parameters.
        • Default Arguments → If not provided, fallback values are used.
        • Spread Arguments → Spread elements of an array/object into function calls.
*/

/* ---------------------------------------------
    1) Positional Arguments
----------------------------------------------*/
function introduce(name, age, city) {
    console.log("Name:", name, "| Age:", age, "| City:", city);
}

// Arguments are matched in order (position)
introduce("Aditya", 21, "Patna");  
introduce("Shambhavi", 19, "Delhi");   


/* ---------------------------------------------
    2) Default Arguments
----------------------------------------------*/
function greet(name = "Guest", message = "Welcome!") {
    console.log(message + " " + name);
}

greet("Aditya", "Hello");   // "Hello Aditya"
greet("Shambhavi");              // "Welcome! Riya"
greet();                    // "Welcome! Guest"


/* ---------------------------------------------
    3) Spread Arguments
----------------------------------------------*/
function add(a, b, c) {
    console.log("Sum:", a + b + c);
}

let numbers = [10, 20, 30];

// Spread expands array into individual values
add(...numbers);   // Same as add(10, 20, 30)

// Spread also works for extra arguments
let moreNums = [5, 15, 25, 35];
add(...moreNums);   // Only first three are used


/* ---------------------------------------------
    Quick Recap:
        • Positional → Passed in same order as parameters.
        • Default → Uses fallback value if not passed.
        • Spread → Expands array/object into separate arguments.Shambhavi
*/        