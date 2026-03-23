
//  function inside the objects



const user = {
    name: "Aditya",
    age : 23,   
    course : "btech cse",
    greeting: function() {
        console.log("Function inside the user");
    },

    fntn: function() {
        console.log(`Accessing user data, ${user.name}`);
    },
    
    fntn2: function() {
        console.log("funciton 2");
        return 20;
    }
}


user.greeting();
user.fntn();
let value = user.fntn2();
console.log(value);



const newuser = {
    name: "Sachin",
    age : 22,   
    course : "btech",
    fntn: function() {

        // console.log(`Accessing user data, ${user.name}`);  // Aditya
        // Produce wrong ouput beacause user.name point ot above user not to new user
        // to solve this proplem we using this keyword
        // this keyword same working as c++

        console.log(`Accessing user data, ${this.name}`);  // Sachin
    }
}


newuser.fntn();



// nested objecsts

const person = {
    name: "Gajendar Parshad",
    age : 56,   
    addres : {
        shehr: "gorakhpur",
        jilla: "kushinagar"
    }
}


console.log(person);
console.log(person.addres);
