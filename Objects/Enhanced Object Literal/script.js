

const obj1 = {
    name : "Aditya",
    age : 23,
    country : "Bharat"
}


// console.log(obj1);

const obj2 = {
    name : "summit",
    age : 34,
    education : "Diploma",
    purana : function() {
        console.log("old method of creting method");
    },

    badhiya: ()=> {
         console.log("little better aproach of creting method");
    },

    latest() {
        console.log("new method of creating method int es6");
    }
}


console.log(obj2);
console.log(obj2.purana());
console.log(obj2.badhiya());
console.log(obj2.latest());

/*

old method of creting method
undefined
little better aproach of creting method
undefined
new method of creating method int es6
undefined



1

Your fun function doesn't return anything so console.log(user.fun()) prints undefined

Either return something:

function()  {
  let full_name = (this.firstname + " " + this.lastname);
  return full_name
},

console.log(user.fun());
or don't use console.log

function()  {
  let full_name = (this.firstname + " " + this.lastname);
  console.log(full_name);
},

user.fun();


1

Because the function is a void function ( don't return any thing ) and any void function will return undefined

*/


console.log("\n\n");



const obj3 = {
    name : "summit",
    age : 34,
    education : "Diploma",
    purana : function() {
        return "old method of creting method";
    },

    badhiya: ()=> {
        return "little better aproach of creting method";
    },

    latest() {
        return "new method of creating method int es6";
    }
}

// now it not printing undefined , now problem is solved 

console.log(obj3);
console.log(obj3.purana());
console.log(obj3.badhiya());
console.log(obj3.latest());

console.log("\n");


// create varibles use in objects
const marks1 = 23;
const marks2 = 43;

const mks = {
    marks1,
    marks2
}

console.log(mks);

