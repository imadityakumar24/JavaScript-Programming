
/*
    Topic: Understanding How to Access Elements in Array
    ---------------------------------------------------

    • Array elements are accessed using index (starting from 0).
    • arr[0] → first element
    • arr[arr.length - 1] → last element
    • Accessing index out of range → returns undefined
*/



/* ---------------------------------------------
    1) Basic Accessing by Index
----------------------------------------------*/
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("First element:", fruits[0]);   // Apple
console.log("Second element:", fruits[1]);  // Banana
console.log("Last element:", fruits[fruits.length - 1]); // Orange



/* ---------------------------------------------
    2) Modifying Elements
----------------------------------------------*/
fruits[1] = "Grapes"; // Replaces Banana with Grapes
console.log("After modifying index 1:", fruits);



/* ---------------------------------------------
    3) Accessing Out of Range
----------------------------------------------*/
console.log("Access index 10:", fruits[10]); // undefined



/*
    Quick Recap:
        • Use arr[index] to access.
        • Index starts at 0.
        • Can modify values by assigning new ones.
        • Accessing beyond length → undefined.
*/
