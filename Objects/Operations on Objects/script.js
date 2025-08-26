
/*
    Topic: Operations in Objects
    ----------------------------

    • freeze → Makes an object immutable (cannot add, delete, modify properties).
    • seal → Prevents adding or deleting properties, but existing values can be modified.
    • destructuring → Extract values from objects into variables.
    • object methods → Functions inside objects.
    • this keyword → Refers to the object that is calling the method.
*/



/* ---------------------------------------------
    1) Object.freeze()
----------------------------------------------*/
let frozenObj = {
    name: "Aditya",
    age: 21
};
Object.freeze(frozenObj);
frozenObj.age = 22; //  Won't change
frozenObj.city = "Delhi"; //  Won't add
console.log("Frozen Object:", frozenObj);



  
/* ---------------------------------------------
    2) Object.seal()
----------------------------------------------*/
let sealedObj = {
    name: "Riya",
    age: 20
};
Object.seal(sealedObj);
sealedObj.age = 21; //  Can modify existing property
sealedObj.city = "Patna"; //  Can't add new property
delete sealedObj.name; //  Can't delete property
console.log("Sealed Object:", sealedObj);



  
/* ---------------------------------------------
    3) Object Destructuring
----------------------------------------------*/
let person = {
    firstName: "Rahul",
    lastName: "Sharma",
    city: "Delhi"
};

let { firstName, city } = person;
console.log("Destructured Values:", firstName, city);



  
/* ---------------------------------------------
    4) Object Methods
----------------------------------------------*/
let calculator = {
    num1: 10,
    num2: 20,
    add: function () {
        return this.num1 + this.num2;
    },
    multiply() {
        return this.num1 * this.num2;
    }
};

console.log("Addition:", calculator.add());
console.log("Multiplication:", calculator.multiply());



/* ---------------------------------------------
    5) this Keyword
----------------------------------------------*/
let user = {
    name: "Aditya",
    greet: function () {
        console.log("Hello " + this.name);
    }
};

user.greet(); // 'this' refers to 'user' object



/*
    Quick Recap:
        • freeze → Make object completely immutable
        • seal → Prevent add/delete, allow modification
        • destructuring → Extract values into variables
        • object methods → Functions inside objects using this
        • this → Refers to object calling the method
*/
