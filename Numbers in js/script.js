/*

js number methodss

number()
parseaInt();
parseFloat()
isFinite()
isInteger()
toFixed()
toPrecision()



*/


// Number()  convert to number value

let num = "1000";

console.log(num + 2000);       // 10002000

let temp = Number(num);

console.log(temp + 2000);      // 3000


// parseInt()     convert float value to decimal

num = 23.958;
console.log(parseInt(num));  // printin 23

num = 45.00000;
console.log(parseInt(num));  // printin 45


// parseFloat()      print value wiht their decimal

num = 89.0001;
console.log(parseInt(num))     // 89
console.log(parseFloat(num))   // 89.0001


num = 345;
console.log(isFinite(num)); // true

num = "fasle aate jaate rhe"
console.log(isFinite(num)); // false

console.log(isFinite(22/7))      // true
console.log(isFinite(Infinity))  // false


// isInteger()   check whether the value is integer or not

// console.log(Number.isInterger(234));
// console.log(Number.isInterger("dfadfafg"));


// toFixed    point ke baad kitni values aai cahiye

let val = 44.85345;

console.log(val);
console.log(val.toFixed(2))  // 44.85


// toPrecision()        values of fixed karke de dega

let v1 = 34.56009;
console.log(v1.toPrecision(3));   // 34.6


let v2 = 34.26009;
console.log(v2.toPrecision(2));   // 34
