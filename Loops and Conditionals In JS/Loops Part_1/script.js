
/*
    Topic: Loops in JavaScript
    --------------------------

    Loops are used to repeat a block of code multiple times.

    1. for loop → Used when number of iterations is known
    2. while loop → Runs until condition is false (condition checked first)
    3. do...while loop → Runs at least once (condition checked later)
*/

// Example 1: for loop
console.log("for loop example:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// Example 2: while loop
console.log("while loop example:");
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}

// Example 3: do...while loop
console.log("do...while loop example:");
let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 5);
