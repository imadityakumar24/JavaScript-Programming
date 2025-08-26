
/*
    Topic: Functions on Arrays in JavaScript
    ----------------------------------------

    Commonly used Array methods:
        • push, pop, shift, unshift
        • indexOf, array destructuring
        • filter, some, map, reduce
        • spread operator (...)
        • slice, reverse, sort, join, toString
*/



/* ---------------------------------------------
    1) push() → Add element to end
----------------------------------------------*/
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log("After push:", fruits);



/* ---------------------------------------------
    2) pop() → Remove last element
----------------------------------------------*/
fruits.pop();
console.log("After pop:", fruits);



/* ---------------------------------------------
    3) shift() → Remove first element
----------------------------------------------*/
fruits.shift();
console.log("After shift:", fruits);



/* ---------------------------------------------
    4) unshift() → Add element at start
----------------------------------------------*/
fruits.unshift("Grapes");
console.log("After unshift:", fruits);



/* ---------------------------------------------
    5) indexOf() → Find index of element
----------------------------------------------*/
console.log("Index of Grapes:", fruits.indexOf("Grapes"));



/* ---------------------------------------------
    6) Array Destructuring
----------------------------------------------*/
let numbers = [10, 20, 30];
let [a, b, c] = numbers;
console.log("Destructured Values:", a, b, c);



/* ---------------------------------------------
    7) filter() → Returns elements passing condition
----------------------------------------------*/
let even = numbers.filter(num => num % 20 === 0);
console.log("Filter (divisible by 20):", even);



/* ---------------------------------------------
    8) some() → Returns true if any element passes
----------------------------------------------*/
let hasBig = numbers.some(num => num > 25);
console.log("Some > 25:", hasBig);



/* ---------------------------------------------
    9) map() → Returns new array after applying function
----------------------------------------------*/
let squared = numbers.map(num => num * num);
console.log("Squared Numbers:", squared);



/* ---------------------------------------------
    10) reduce() → Reduces array to single value
----------------------------------------------*/
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);



/* ---------------------------------------------
    11) Spread Operator (...)
----------------------------------------------*/
let newArr = [...numbers, 40, 50];
console.log("Spread Operator:", newArr);



/* ---------------------------------------------
    12) slice() → Returns shallow copy (non-destructive)
----------------------------------------------*/
let sliced = newArr.slice(1, 3);
console.log("Slice (1 to 3):", sliced);



/* ---------------------------------------------
    13) reverse() → Reverses array (in-place)
----------------------------------------------*/
newArr.reverse();
console.log("Reversed Array:", newArr);



/* ---------------------------------------------
    14) sort() → Sorts array (default = string)
----------------------------------------------*/
let unsorted = [30, 5, 100, 1];
unsorted.sort((x, y) => x - y);
console.log("Sorted Array:", unsorted);



/* ---------------------------------------------
    15) join() → Joins array into string
----------------------------------------------*/
console.log("Joined with '-':", numbers.join("-"));



/* ---------------------------------------------
    16) toString() → Converts array to string
----------------------------------------------*/
console.log("Array toString:", numbers.toString());



/*
    Quick Recap:
        • push/pop/shift/unshift → Add/Remove
        • indexOf → Find index
        • filter/some/map/reduce → Functional methods
        • spread operator → Expand array
        • slice/reverse/sort → Manipulation
        • join/toString → Convert to string
*/
