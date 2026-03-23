"use strict"



let  user = {
    firstName : "Aditya",
    lastName : "kumar",
    printFullname: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

user.printFullname();

let user2 = {
    firstName:"Sachin",
    lastName: "kumar",
}

//function borrowing

user.printFullname.call(user2);


// user2.printFullname();





let s1 = {
    firstName : "Aditya",
    lastName : "kumar",
    printFullname: function (hometown) {
        console.log(this.firstName + " " + this.lastName + " " + hometown);
    }
}

s1.printFullname("Aagra")

let s2 = {
    firstName:"Sachin",
    lastName: "kumar",
}

s1.printFullname.call(s2, "bathinda");


console.log("\n");




//    apply method 

// only difference betwee call and apply is how we are passing the arguments

let s3 = {
    firstName : "Aditya",
    lastName : "kumar",
    
}

let printFullname =  function (hometown, state) {
        console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
    }

// s1.printFullname(s3, "bathinda", "punjab");


let s4 = {
    firstName:"Sachin",
    lastName: "kumar",
}

printFullname.apply(s3, ["bathinda", "punjab"]);
printFullname.apply(s4, ["mumbai", "maharashtra"]);


console.log("\n")


// bind method

let val = printFullname.bind(s4, ["mumbai", "maharashtra"]);
console.log(val);
console.log(val())


// console.log("\n");

// let s3 = {
//     firstName : "Kamal",
//     lastName : "singh",
// }

// let pritnDetails = function() {
//     // console.log(this.firstName)
//     // console.log(this.lastName)
//     console.log(this);
    
// }

// let s4 = {
//     firstName : "Suraj",
//     lastName : "singh",
// }

// pritnDetails()