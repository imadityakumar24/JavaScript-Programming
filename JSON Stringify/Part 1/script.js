/**



// ================= JSON =================

// JSON = JavaScript Object Notation
// Lightweight and easy to read
// Used in APIs and modern web apps

// Example JSON data
let jsonString = '{"name":"Aditya","age":21,"course":"B.Tech"}';

// Convert JSON string → JavaScript object
let obj = JSON.parse(jsonString);

// Access data
console.log(obj.name);   // Aditya

// Convert JavaScript object → JSON string
let student = { name: "Aditya", age: 21 };
let jsonData = JSON.stringify(student);

console.log(jsonData);



// ================= XML =================

// XML = eXtensible Markup Language
// Uses tags to store data
// More verbose than JSON
// Used in older systems & configuration files

// Example XML data
let xmlData = `
<student>
  <name>Aditya</name>
  <age>21</age>
</student>
`;

// Parse XML string
let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xmlData, "text/xml");

// Access XML data
console.log(xmlDoc.getElementsByTagName("name")[0].textContent);  // Aditya



// ================= JSON vs XML =================

// JSON → lightweight, fast, modern
// XML  → tag-based, larger, used in legacy systems








*/


// xml : extensible markup language
// json: javascript object notation     // its like an object


// json
// its a lightweight data format used to store and exchange data like sending data between b browser and a server 

// note:

// keys and string values are wrapped in double quotes
// its a stirng not an object


// Example JSON data
let jsonString = '{"name":"Aditya","age":21,"course":"B.Tech"}';

// Convert JSON string → JavaScript object
let obj = JSON.parse(jsonString);

// Access data
console.log(obj.name);   // Aditya

// Convert JavaScript object → JSON string
let student = { name: "Aditya", age: 21 };
let jsonData = JSON.stringify(student);

console.log(jsonData);










