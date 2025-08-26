

/*
    Topic: Iterating Over Arrays in JavaScript
    ------------------------------------------

    Methods:
        • For Loop → Traditional iteration using index.
        • forEach → Executes a provided function once for each array element.
*/



/* ---------------------------------------------
    1) For Loop
----------------------------------------------*/
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Iterating using For Loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log("Index:", i, "Value:", fruits[i]);
}



  
/* ---------------------------------------------
    2) forEach Loop
----------------------------------------------*/
console.log("Iterating using forEach:");
fruits.forEach((fruit, index) => {
    console.log("Index:", index, "Value:", fruit);
});
