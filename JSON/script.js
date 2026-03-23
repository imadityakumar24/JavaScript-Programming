
"use strict";

/*
========================================
        WHAT IS JSON ?
========================================

JSON = JavaScript Object Notation

✔ Used to store and exchange data
✔ Used between server and browser
✔ JSON is TEXT (string format)

Example JSON:

{
  "name": "Aditya",
  "age": 21
}

IMPORTANT RULES:
✔ keys must be in DOUBLE quotes
✔ strings must be in DOUBLE quotes
✔ supports: string, number, boolean, array, object, null
❌ does NOT support: functions, undefined, comments
*/


/*
========================================
    JAVASCRIPT OBJECT vs JSON STRING
========================================
*/

// JavaScript Object
const userObj = {
    name: "Aditya",
    age: 21,
    isStudent: true
};

console.log("JavaScript Object:", userObj);

// JSON STRING (notice quotes)
const jsonString = '{"name":"Aditya","age":21,"isStudent":true}';

console.log("JSON String:", jsonString);


/*
========================================
        JSON.stringify()
========================================

Converts JS object → JSON string

Used when:
✔ sending data to server
✔ storing data in localStorage
✔ saving data in files
*/

const convertedToJSON = JSON.stringify(userObj);

console.log("After stringify:", convertedToJSON);
console.log("Type:", typeof convertedToJSON); // string


/*
========================================
        JSON.parse()
========================================

Converts JSON string → JS object

Used when:
✔ receiving data from server
✔ reading from localStorage
✔ reading JSON files
*/

const convertedToObject = JSON.parse(convertedToJSON);

console.log("After parse:", convertedToObject);
console.log("Type:", typeof convertedToObject); // object


/*
========================================
    STORE DATA IN LOCAL STORAGE
========================================

localStorage stores ONLY STRINGS
So we must stringify objects
*/

localStorage.setItem("user", JSON.stringify(userObj));

console.log("Stored in localStorage");


/*
========================================
    RETRIEVE DATA FROM LOCAL STORAGE
========================================
*/

const storedData = localStorage.getItem("user");

console.log("Raw from storage:", storedData); // string

// convert back to object
const parsedData = JSON.parse(storedData);

console.log("Parsed Data:", parsedData);
console.log("User name:", parsedData.name);


/*
========================================
    JSON with ARRAYS
========================================
*/

const students = [
    { name: "Aman", age: 20 },
    { name: "Riya", age: 21 }
];

// convert array → JSON
const studentsJSON = JSON.stringify(students);

console.log("Students JSON:", studentsJSON);

// convert back
const studentsObj = JSON.parse(studentsJSON);

console.log("Students Object:", studentsObj);
console.log("First student:", studentsObj[0].name);


/*
========================================
    PRETTY PRINT JSON (readable format)
========================================
*/

console.log("Formatted JSON:");
console.log(JSON.stringify(userObj, null, 2));


/*
========================================
    WHAT JSON DOES NOT SUPPORT
========================================
*/

const test = {
    name: "Aditya",
    age: undefined,   // removed
    greet: function() {} // removed
};

console.log("Unsupported values removed:");
console.log(JSON.stringify(test));


/*
========================================
    COMMON ERRORS
========================================
*/

// ❌ invalid JSON (single quotes)
 // const wrongJSON = "{'name':'Aditya'}";  // ERROR

// ❌ forgetting parse
// localStorage.getItem("user").name  ❌


// ✔ correct
// JSON.parse(localStorage.getItem("user")).name


/*
========================================
    MEMORY TRICK
========================================

Object → stringify → store/send
String → parse → use in JS

parse = string → object
stringify = object → string

========================================
*/
