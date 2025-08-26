/*
    Topic: Creating Objects, Accessing Properties, Deleting Property and Nested Objects
    ----------------------------------------------------------------------------------

    • Objects store data in key-value pairs.
    • Different ways to create objects.
    • Properties can be accessed, modified, or deleted.
    • Objects can be nested (object inside object).
*/



/* ---------------------------------------------
    1) Creating Objects
----------------------------------------------*/
// Using object literal
let student = {
    name: "Aditya",
    age: 21,
    course: "CSE"
};

// Using 'new Object()'
let teacher = new Object();
teacher.name = "Mr. Sharma";
teacher.subject = "Math";

console.log("Student Object:", student);
console.log("Teacher Object:", teacher);



  
/* ---------------------------------------------
    2) Accessing Properties
----------------------------------------------*/
console.log("Student Name (dot notation):", student.name);
console.log("Teacher Subject (bracket notation):", teacher["subject"]);



  
/* ---------------------------------------------
    3) Deleting a Property
----------------------------------------------*/
delete student.course;
console.log("Student after deleting course:", student);



  
/* ---------------------------------------------
    4) Nested Objects
----------------------------------------------*/
let person = {
    name: "Ravi",
    age: 25,
    address: {
        city: "Delhi",
        pin: 110001
    }
};

console.log("Person Object:", person);
console.log("Person City:", person.address.city);
console.log("Person Pin:", person.address["pin"]);
