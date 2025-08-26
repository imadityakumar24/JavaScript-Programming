

/*
    Topic: Recognise How Objects Are Stored, Traverse Keys of an Object, Array as Object
    -----------------------------------------------------------------------------------

    • Objects in JS are stored as key-value pairs.
    • Keys are strings (or symbols) and values can be any type.
    • We can traverse keys using loops (for...in).
    • Arrays are also objects in JS, with numeric keys and length property.
*/



/* ---------------------------------------------
    1) How Objects Are Stored
----------------------------------------------*/
let person = {
    name: "Aditya",
    age: 21,
    isStudent: true
};

console.log("Object:", person);
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries (key-value pairs):", Object.entries(person));



  
/* ---------------------------------------------
    2) Traversing Keys of an Object
----------------------------------------------*/
console.log("Traversing object using for...in loop:");
for (let key in person) {
    console.log("Key:", key, "| Value:", person[key]);
}



/* ---------------------------------------------
    3) Array as Object
----------------------------------------------*/
let fruits = ["Apple", "Banana", "Mango"];
console.log("Array:", fruits);
console.log("Type of array:", typeof fruits); // object

// Accessing like object keys
console.log("fruits[0]:", fruits[0]);
console.log("fruits['1']:", fruits["1"]);

// Arrays have numeric keys and length property
console.log("Keys of array:", Object.keys(fruits));
console.log("Values of array:", Object.values(fruits));
