/*

=========  Call Apply Bind  ==========


function ko call karte waqt aap set kar skte ho ki uski this ki value kya hogi

vese ye dab rarely use karte hai 



*/




//       Call

let obj = {
    name : "Aditya",
    age : 22,
};


function abcd() {
    console.log(this);      // print object
    
}

abcd.call(obj);







//     Apply


let obj1 = {
    name : "Aditya",
    age : 22,
};


function parent(a, b, c) {
    console.log(this);              // print object
    console.log((this), a, b, c);    // object and values
}

// parent.call(obj1, 1, 2, 3);

// agar apply likh diya to hum sirf 2 parameter bhej sakta hai pehla object and 2 wala jo values hai as array
 
parent.apply(obj1, [1, 2, 3]);






//    bind


// bind chalta nhi hai funciton ki ye ek copy bna leta hai funcitons kaaa


let obj3 = {
    name : "Aditya",
    age : 22,
};


function cladoisko(a, b, c) {
    console.log(this);              // print object
    console.log((this), a, b, c);    // object and values
}


let fnc = cladoisko.bind(obj, 1, 2, 3);

fnc();








/*







// Example function that uses "this" and takes 2 arguments
function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

// Two objects with "name" property
const person1 = { name: "Aditya" };
const person2 = { name: "Rahul" };

// ----------------- CALL -----------------

// call() method:
// - Invokes the function immediately
// - Lets you set "this" value
// - Pass arguments one by one (comma-separated)
greet.call(person1, "Hello", "!");  
// Output: Hello, my name is Aditya!

greet.call(person2, "Hi", ".");     
// Output: Hi, my name is Rahul.


// ----------------- APPLY -----------------

// apply() method:
// - Similar to call()
// - Invokes the function immediately
// - The only difference: arguments are passed as an array
greet.apply(person1, ["Good morning", "!!"]);  
// Output: Good morning, my name is Aditya!!

greet.apply(person2, ["Hey", "..."]);         
// Output: Hey, my name is Rahul...


// ----------------- BIND -----------------

// bind() method:
// - Does NOT call the function immediately
// - Returns a new function with "this" fixed to the provided object
// - You can store and call it later
const boundGreet = greet.bind(person1, "Welcome", "!!!");

// Call the returned function
boundGreet();  
// Output: Welcome, my name is Aditya!!!













*/




