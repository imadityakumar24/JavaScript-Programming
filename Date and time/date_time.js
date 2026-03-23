console.log("\n");


// date and time 

const now  = new Date();  // show universal time
console.log(now);  

console.log(now.toString())  // show indian time

console.log(now.toISOString())  // show utc time   maens universal time  ab jagh always same hot ahi

console.log(now.toLocaleString())  


console.log(now.getMinutes())  
console.log(now.getSeconds())  

const yehaidate = Date.now();
console.log(yehaidate);   // miliseconds

let val = new Date(1770719103754);

console.log(val.toString());

let val3 = new Date(-9103754);

console.log(val3.toString());

let va2 = new Date(0);

console.log(va2.toString());

console.log("\n");