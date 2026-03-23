
// =========== Sets =========

// used to store the unique values 
// sets are come in advance javascript


// let data = new Set(1,2,3,4,3.1,3,7,8,2,4); // giving erro
let data = new Set([1,2,3,4,3.1,3,7,8,2,4]);  // working fine

console.log(data);   // printing all unique values 

// let arr = [12,23,43,23,12,32,23];
// console.log(arr);

let values = new Set(["aditya", "kumar", 34, 23,23, "aditya", "heri"]);
console.log(values);

values.add(100);
values.add(200);
console.log(values);

// values.pop();
values.delete(34)
console.log(values);
console.log(values.size);




