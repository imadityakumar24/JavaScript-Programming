
/*

let promise = new Promise((resolve, reject) => {
    let success = true; // try changing this to false

    if (success) {
        // If operation successful, call resolve
        resolve("Operation Successful");
    } else {
        // If operation failed, call reject
        reject("Operation Failed");
    }
});

// Handling the promise
promise
    .then(result => console.log(result))   // Runs if resolved
    .catch(error => console.log(error))   // Runs if rejected
    .finally(() => console.log("Always runs (success or fail)"));

*/


/*    

// example 1

function someAPI() {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("promise is working");
            // resolve();
            // reject();    
            let num = Math.round(Math.random()*10+1);
            if (num % 2 == 0) {
                resolve(num);
                console.log("resolve is working");
            } else {
                reject(num);
                console.log("reject is working")
            }
        }, 5000);
    });

    return p1;
}


function someAPI2() {
    let p2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("promise is working in some api 2");
            // resolve();
            // reject();    
            let num = Math.round(Math.random()*10+1);
            if (num % 2 == 0) {
                resolve(num);
                console.log("resolve is working some api 2");
            } else {
                reject(num);
                console.log("reject is working some api 2tr")
            }
        }, 3000);
    });

    return p2;
}


let p1 = someAPI();
let p2 = someAPI2();
// ye tabhi chlega jab prmise resolve ya reject ho jata hai , agar pending state mein hai to nhi chlega
p1.then((succesful) => {
    console.log("Prmise fillfiled : ", succesful)
},
(errorMessage) => {
    console.log("Promise rejected :", errorMessage);
});


p2.then((succesful) => {
    console.log("p2 Prmise fillfiled : ", succesful)
},
(errorMessage) => {
    console.log(" p2 Promise rejected :", errorMessage);
});

*/




// example 2
// like callback hell
function someAPI() {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("promise is working");
            // resolve();
            // reject();    
            let num = Math.round(Math.random() * 10 + 1);
            if (num % 2 == 0) {
                resolve(num);
                console.log("resolve is working");
            } else {
                reject(num);
                console.log("reject is working")
            }
        }, 5000);
    });

    return p1;
}


function someAPI2() {
    let p2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("promise is working in some api 2");
            // resolve();
            // reject();    
            let num = Math.round(Math.random() * 10 + 1);
            if (num % 2 == 0) {
                resolve(num);
                console.log("resolve is working some api 2");
            } else {
                reject(num);
                console.log("reject is working some api 2tr")
            }
        }, 3000);
    });

    return p2;
}


let p1 = someAPI();

// ye tabhi chlega jab prmise resolve ya reject ho jata hai , agar pending state mein hai to nhi chlega
p1.then((succesful) => {
    console.log("Prmise fillfiled : ", succesful);

    let p2 = someAPI2();
    p2.then((succesful) => {
        console.log("p2 Prmise fillfiled : ", succesful)
    },
    (errorMessage) => {
        console.log(" p2 Promise rejected :", errorMessage);
    });

},
(errorMessage) => {
    console.log("Promise rejected :", errorMessage);
});


