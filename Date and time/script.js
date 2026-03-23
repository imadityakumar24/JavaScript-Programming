
let d1 = new Date();
console.log(d1);

let d = new Date("1-2-2025");
console.log(d);

// YEAR MONTH DATE

let d3 = Date(2026, 2, 9);   // this print in indian standard zone
console.log((d3));

console.log("\n\n");



/*

days will show like this

monday = 1
tuesday = 2
thrusday = 3
friday = 4
saturday = 5
sunday = 0

*/

console.log(d.getFullYear());
console.log(d.getMonth());  // it return value from 0 based counting of months  so first month index is 0
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getTime());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

