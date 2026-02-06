
let str = "Javascript programming is awesome";

console.log("length of str is : ", str.length);
// console.log("size of str is : ", str.size);   // this will give error show undefined so always use length for finding the string length



// index of  ->  used to find out the index of perticular character in index
// if the character is present it print the index otherwise it will print -1
// left se right ki taraf chalta hai



console.log(str.indexOf('J'));
console.log(str.indexOf('m'));
console.log(str.indexOf('m'));

console.log(str.indexOf('Z'));  // -1
console.log(str.indexOf('K'));  // -1

console.log("\n");


// latIndex of  ->  used to find out the index of perticular character in index
// if the character is present it print the index otherwise it will print -1
// right to left ki taraf chalta hai


console.log(str.lastIndexOf('e'));
console.log(str.lastIndexOf('w'));
console.log(str.lastIndexOf('g'));

console.log(str.lastIndexOf('Z'));  // -1
console.log(str.lastIndexOf('K'));  // -1

console.log("\n");




// hum isme filter bhi lga sakte hai ki perticular index ke baad hi searh karo 

let newStr = "Awesome Aditya Kumar";

console.log(newStr.indexOf('A')); // pritn 0
console.log(newStr.indexOf('A', 6)); // now it start searching from index 6  now it print 9


console.log(newStr.lastIndexOf('a'));      // 19
console.log(newStr.lastIndexOf('a', 4));   // -1   beacause a last 4 ke baad aaya hi nhi



console.log("\n");


//  includes  ->   it will find out the a word present in the string or not
// return true if present otherwise return false

let line = "its a tip of iceberg js have lots of error";

console.log(line.includes("tip"))
console.log(line.includes('tip'))
console.log(line.includes('error'))
console.log(line.includes('Aditya'))   // false
console.log(line.includes('js'))

console.log("\n");



// slice  
// negative index also allowed but order should be left to right
//     p  r  o  g  r  a  m
//     0  1  2  3  4  5  6           index from left to right positive indexes
//    -7,-6,-5,-4,-3,-2,-1           index from right to left negative indexes

let temp = "program"
console.log(temp);
console.log(temp.slice(1, 4));    // rog
console.log(temp.slice(-5, -1))   // ogra


// substring
// only positive index are alowed
console.log(temp.substring(1, 4));   // rog

// substring ki khass baat hai ki agar hum bda index pehle likh dete hai to ye use swap kar deta hai aur chota wala index aage le aata hai
console.log(temp.substring(4, 1));   // rog


// replace
// we can replace the entire word as well as we can change the individual character also

let val = "BED PEN TEN RICE";

console.log(val);

// string ko cahnge kar nhi sakte hai toh replace new string bna leta hai jise hme kahi store karwana pdega then we can se the result
let newVal = val.replace("BED", "HEN");
console.log(val)
console.log(newVal);

let anotherVal = newVal.replace('H', 'k');
console.log(anotherVal);


// upercase lowercase
// sare changes new string mai ho rhe hai orinial string mai koi changes nhi ho rhe hai
// kisi aur variable mai save karke dekh sakt hai aap
let upper = "ADITYA";
let lower = "kumar";

console.log(upper.toLowerCase());
console.log(lower.toUpperCase());

console.log("\n")


let bdiString = "    Mera    naam aditya          hai";

console.log(bdiString);
let res = bdiString.trim();
console.log(res);



//  split

let stringWords = "Js padh rhe hai hum to";

console.log(stringWords);

let words = stringWords.split();
console.log(words);


