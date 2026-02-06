/*

===============  strings  =============



*/

console.log("hum padh rhe hai string ko ")

let s1 = "Aditya";
let s2 = 'Aditya';
let s3 = `Aditya`;
// above are string literals
// string literal and string constant are same
// string literal ko hi string constant bolte hai
// string literals are primitive type
// string pool is present in the heap 
// 

// string objects is not primitive 
let s4 = new String("Aditya");

console.log("Type of s1", typeof(s1));   // string 
console.log("Type of s2", typeof(s2));   // string
console.log("Type of s3", typeof(s3));   // string
console.log("Type of s4", typeof(s4));   // object


console.log(s1, s2, s3, s4);

console.log(s1 === s2)
console.log(s1 === s3)
console.log(s1 === s4)   // false 



let str = "java";

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);       // print undefined

let newStr = "Mysirji";

console.log(newStr.charAt(0))
console.log(newStr.charAt(1))
console.log(newStr.charAt(2))
console.log(newStr.charAt(3))
console.log(newStr.charAt(4))
console.log(newStr.charAt(5))
console.log(newStr.charAt(6))
console.log(newStr.charAt(7))   // it don't print anything
console.log(newStr.charAt(8))   // it don't print anything


// string are immutable we can't change the value
let v1 = "aditya";
console.log(v1);
let v2 = "kalbherav";

v1 = v2;

console.log(v1);
console.log(v2)

v2[0] = 'S';
console.log(v2);   // now its not working means individual character ko change nhi kar skte hai


let pi = "javascript";
console.log(pi);

pi = pi + " Edication services";
console.log(pi)

// using the backtic

let a1 = `"This is a special string"`;   // used to print the string with double quotes

console.log(a1)

let a = 89;
let b = 90;

let result = "value of a = " +a+ ", value of b = " +b;
console.log(result);
console.log(`value of a = ${a}, value of b = ${b}`)