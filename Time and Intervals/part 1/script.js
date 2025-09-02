/*


setInterval bar bar chalta hia 

setTimeput ek bar chalta hai



*/




// setTimeout(function() {
//     console.log("After 4 second");
// }, 4000);


let time = 1000;
for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log("After ", i, " second");
    }, time);
    time += 1000;
}



console.log("\n\n");



// ============  ClearTimeOut  ============

console.log("ClearTimeOut");
console.log("\n\n");

setTimeout(function() {
    console.log("After 7 second it printing");
}, 7000);


// for clear the time out means to stop it just save it in a variable and passs in cleartime out 

let Stopit = setTimeout(function() {
    console.log("It don't print anything beacause it we clearout this");
}, 4000);

clearTimeout(Stopit);




// making count down

setTimeout(function() {
    console.log("Count down");
}, 6000);

// console.log("Count down");
console.log("\n\n");

let count = 11;

let intervarl = setInterval(function() {
    if (count >= 1) {
        count--;
        console.log(count)
    }
    else {
        clearInterval(intervarl);
    }
}, 1000);


