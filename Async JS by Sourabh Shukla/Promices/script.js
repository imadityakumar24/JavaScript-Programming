/*

=============  Promise  ===============

A Promise is an object that represents an async operation
It can be: pending, fulfilled (resolved), or rejected

pending   =  kaam abhi bhi chal rha hai
rejected  =  kaam nhi ho payega
resolved  =  kaam succesfuly ho gya

*/


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
        }, 3000);
    });

    return p1;
}


let result = someAPI();
// ye tabhi chlega jab prmise resolve ya reject ho jata hai , agar pending state mein hai to nhi chlega
result.then((succesful) => {
    console.log("Prmise fillfiled : ", succesful)
},
(errorMessage) => {
    console.log("Promise rejected :", errorMessage);
});

// ye tab chlega jab reject ho jayega
result.catch(()=> {
    console.log("in catch rejected :", errorMessage);
});


