
/* 

==================  This Keyword  ==================


This is a special keyowrd
jese baki sab jo keywords hai unka value ya  unka nature same rehta hia par this keyword ka nature badal jata hai is baat se ki aap usey kaha use kar rhe ho 



Global                            = window
Function                          = window
Method with es5 funciton          = object
Method with es5 aerow funciton    = window
es5 function inside es5 method    = window
Aerow function inside es5 method  = object
Event handlder                    = elenent jispe event handler lga hia
Class ke andar                    = blank object                  




*/




//  global scope 

console.log("Global scope this value");
console.log(this);      // window

console.log("\n\n");



// function ke andar

console.log("Functionl scope this value");

function call() {
    console.log(this);   // window
}

call();

console.log("\n\n");



// method ke andar

// aisa function jo object ke andar ho use method kehte hai


console.log("Object ke andar this value");

let obj = {
    name : "Aditya",
    age : 22,
    sayName : function () {
        console.log(this);          // not a window it is object
        console.log(this.name);     // Aditya
        console.log(this.age);      // 22
    }
}


obj.sayName();



console.log("\n\n");





// aisa function jo object ke andar ho use method kehte hai
// agar function ke andar function bna liya this keyword phir se apni value loose kar dega aur phir se window ban jayega
// agar hum ye cahte hai ki ye avoid ho jaey to andar wala function hamesha errow function bano

let obj3 = {
    name : "Aditya",
    age : 22,
    sayName : function () {
        // console.log(this);          // not a window it is object
        /*
        function child() {              // window
            console.log(this); 
        }
        child();
        */

        let child = () => {             // object
            console.log(this); 
        }
        child();
    },
};

console.log("Object -> function ke andar function");
obj3.sayName();


console.log("\n\n");



// aerow function ke andar

// this ki value window hoti hai

console.log("Aerrow -> function ke andar function");

let obj2 = {
    name : "Aditya",
    age : 22,
    sayName :  () => {
        console.log(this);          // window
        console.log(this.name);     
        console.log(this.age);          
    }
}

obj2.sayName();


console.log("\n\n");



//  event handler

document.querySelector("h1").addEventListener("click", function() {
    alert("you clicked on h1");
});


// jispe bhi event listner lga hoga vhi this hoga alwaaays
// now event listner is on h2
document.querySelector("h2").addEventListener("click", function() {
    console.log(this);      //  <h2>click kar bhai ispe</h2>

    console.log(this.style.color = "red"); 
    
});


console.log("\n\n");



// class ke andar
// class ke andar this ki value blank kobject hoti hai


console.log("Class ke andar This ki value");

class Ab {
    constructor () {
        console.log("hi form class constructor");
        this.a = 23;
    }
}

let val = new Ab();