



const user2 = {
    name: "karna",
    "age" : 20,   
    course : "btech EE",
    "home location": "Mohali"
}

console.log(user2);

console.log(user2["name"]);
console.log(user2["age"]);
console.log(user2["course"]);
console.log(user2["home location"]);

// its passes the reference to object 3
const user3 = user2;

user3.name = "Vivek Babu";

console.log(user2);

console.log("\n\n");


// for in loop used to print keys 
for (let key in user2) {
    console.log(key);
}

// now it print values of keys
for (let key in user2) {
    console.log(user2[key]);
}

