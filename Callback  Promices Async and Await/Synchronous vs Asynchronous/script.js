/*

=================  Synchronous vs Asynchronous  ====================

Koi bhi code js mein line by line chalega , aur ye naturan pattern bhi hota hai ki line by lin chale, but kabhi kabaar aisa cases aate hai life mein jaha par aapko code wait karta hai and utni der mein agla code chal jaata hai

Synchronous Code : aisa code jo line be line chalta hot a hai sync code

Asynchronous Code : aisa code jo jab chalte ke lye ready jo jaye tab chale wo hot   hai async code

*/



//        Synchronous Code 


console.log("Aditya");
console.log("Aditya");
console.log("Aditya");
console.log("Aditya");
console.log("Aditya");
console.log("Aditya");

console.log("\n\n");


//        Asynchronous Code 


console.log("Async code");
console.log("Async code");
setTimeout(function(){
    console.log("Async code print after 3 second");        // it print after 2 second
}, 3000);
console.log("Async code");