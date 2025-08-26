
/*
    Topic: What are Arrays in JavaScript and How to Create an Array
    --------------------------------------------------------------

    • Array = An ordered collection of values stored under a single variable name.
    • Arrays can hold multiple types of values (numbers, strings, objects, etc).
    • Index starts from 0.

    Ways to create an array:
        1) Using square brackets []
        2) Using new Array()
        3) Using Array.of()
        4) Using Array constructor with length
*/



/* ---------------------------------------------
    1) Using Square Brackets []
----------------------------------------------*/
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits Array:", fruits);



/* ---------------------------------------------
    2) Using new Array()
----------------------------------------------*/
let numbers = new Array(10, 20, 30, 40);
console.log("Numbers Array:", numbers);



/* ---------------------------------------------
    3) Using Array.of()
----------------------------------------------*/
let mixed = Array.of(1, "Hello", true, null);
console.log("Mixed Array (Array.of):", mixed);



/* ---------------------------------------------
    4) Using Array Constructor with Length
----------------------------------------------*/
let emptyArr = new Array(5); // creates empty array with length 5
console.log("Empty Array with length 5:", emptyArr);



/*
    Quick Recap:
        • Arrays store multiple values in one variable.
        • Most common way: let arr = [val1, val2, ...];
        • JS arrays are dynamic → can grow/shrink in size.
*/
