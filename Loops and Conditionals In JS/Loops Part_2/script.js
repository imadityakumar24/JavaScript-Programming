
/*
    Topic: forEach, for...in, for...of in JavaScript
    ------------------------------------------------

    1. forEach → Array method, executes a function for each element.
    2. for...in → Iterates over enumerable property keys (objects).
    3. for...of → Iterates over iterable values (arrays, strings, etc).
*/

// Example 1: forEach with Array
console.log("forEach example:");
let numbers = [10, 20, 30, 40];
numbers.forEach(function(value, index) {
    console.log("Index:", index, "Value:", value);
});

// Example 2: for...in with Object
console.log("for...in example:");
let person = { name: "Aditya", age: 21, country: "India" };
for (let key in person) {
    console.log("Key:", key, "Value:", person[key]);
}

// Example 3: for...of with Array
console.log("for...of with Array:");
for (let value of numbers) {
    console.log("Value:", value);
}

// Example 4: for...of with String
console.log("for...of with String:");
let text = "JS";
for (let char of text) {
    console.log("Character:", char);
}
