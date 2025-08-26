
/*
    Topic: Understanding What are Objects in JavaScript - [key-value pair]
    ----------------------------------------------------------------------

    • Object = A collection of properties.
    • Properties are written as key: value pairs.
    • Keys are always strings (or symbols), values can be any type.
    • Objects are used to store structured data.
*/



/* ---------------------------------------------
    1) Creating an Object
----------------------------------------------*/
let person = {
    name: "Aditya",
    age: 21,
    isStudent: true
};

console.log("Person Object:", person);



  
/* ---------------------------------------------
    2) Accessing Object Properties
----------------------------------------------*/
console.log("Name (dot notation):", person.name);
console.log("Age (bracket notation):", person["age"]);



  
/* ---------------------------------------------
    3) Modifying Object Properties
----------------------------------------------*/
person.age = 22; // Update
person.city = "Delhi"; // Add new key-value pair
console.log("Modified Object:", person);



  
/* ---------------------------------------------
    4) Deleting a Property
----------------------------------------------*/
delete person.isStudent;
console.log("After deleting isStudent:", person);



/*
    Quick Recap:
        • Objects store data in key-value pairs.
        • Access → dot notation (obj.key) or bracket notation (obj["key"]).
        • Can add, modify, or delete properties dynamically.
*/
