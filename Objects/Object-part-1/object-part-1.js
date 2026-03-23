/*

===============  OBJECTS  ==================

In JavaScript, objects are dynamic collections of key-value pairs used to store various data and more complex entities. Nearly all JavaScript values, except for primitive types (string, number, boolean, null, undefined, symbol, bigint), are objects. 
Key Concepts
Properties: Each key-value pair in an object is called a property. The key (or property name) is a string or a Symbol, and the value can be anything, including primitive values, other objects, or functions.
Methods: A property whose value is a function is known as a method. Methods define the behaviors or actions an object can perform.
Mutability: Objects are mutable, meaning their properties can be changed, added, or deleted after the object is created. Objects are also a reference type, so two variables can point to the same object in memory. 
Creating Objects
The most common way to create an object is using the object literal syntax with curly braces {}. 
javascript

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() { // This is a method
    return this.firstName + " " + this.lastName;
  }
};

Other methods include:
Using the new Object() constructor.
Using constructor functions or ES6 class syntax for creating many objects of the same type.
Using Object.create() to explicitly define the prototype of a new object. 
Accessing Properties
Properties can be accessed using two primary notations: 
Dot notation: objectName.propertyName (e.g., person.age). This is preferred for simple, valid identifier names.
Bracket notation: objectName["propertyName"] (e.g., person["age"]). This is necessary for property names that are not valid identifiers (e.g., contain spaces or start with a number) or when the property name is stored in a variable. 
Modifying Objects
Add new properties: You can add properties dynamically at any time using assignment with dot or bracket notation (e.g., person.eyeColor = "blue";).
Modify existing properties: Simply reassign the value to the property name (e.g., person.age = 51;).
Delete properties: The delete operator removes a property from an object (e.g., delete person.eyeColor;

*/


const user = {
    name: "Aditya",
    age : 23,   
    course : "btech cse",
}

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.course);

// add property
user.mobile = 4567890;

console.log(user);

// update property
user.age = 45;

console.log(user);

// delete property
delete user.mobile;

console.log(user);

console.log("\n")

// behind the scence
// keys are stor in the form of string
const user2 = {
    name: "karna",
    "age" : 20,   
    course : "btech EE",
    "home location": "Mohali"
}

console.log(user2);

console.log(user2["name"]);
console.log(user2["age"]);
console.log(user2["course"]);
console.log(user2["home location"]);



console.log(Object.keys(user2));    // print all the keyss
console.log(Object.values(user2));  // print values
console.log(Object.entries(user2)); // print key pair