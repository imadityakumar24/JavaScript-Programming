
/*
    Topic: Loop Control Statements in JavaScript
    --------------------------------------------

    1. break → Immediately exits the loop.
    2. continue → Skips current iteration and moves to the next.
*/

// Example 1: break statement
console.log("Example of break:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i =", i);
        break;  // exits loop completely
    }
    console.log("i =", i);
}

// Example 2: continue statement
console.log("Example of continue:");
for (let j = 1; j <= 10; j++) {
    if (j % 2 === 0) {
        continue;  // skips even numbers
    }
    console.log("Odd number:", j);
}
