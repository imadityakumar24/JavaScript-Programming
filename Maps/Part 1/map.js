/*

===========  Maps ==============

map is similar to ibject but little bit advance from object
map key can be any data type (object can have string key only)
map has more feature which don't have in object
map has better performance than object
map are the  advance objects                                                                                                  

*/

let obj = {
    name : "aditya",
    10: "key of object"
}

let data = new Map([
    ["name", "karan"],
    [10, "key for the map"]
])

// console.log(obj.10);  // it give error
console.log(obj);         // it is working correctly

console.log(data.get(10));

obj.city = "noida";
data.set("city", "amritsar");

console.log(data);
console.log("object size : ",data.size);


data.forEach((values, key)=>{
    console.log("value is :", values, "|| key is :", key);
});