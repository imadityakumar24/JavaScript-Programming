
/*  
    Topic: Understanding DOM Structure and Tree - [nodes, elements, document]

    1. document → The root object of the DOM (represents the whole HTML page).
    2. elements → Tags like <h1>, <p>, <ul>, <li> are called elements.
    3. nodes → Everything in the DOM (elements, text, attributes, comments) is a node.
*/

/* Accessing the document object (root of DOM) */
console.log(document);   // Output in console

/* Accessing elements */
let title = document.getElementById("title");   // <h1> element
let desc = document.getElementById("desc");     // <p> element
let list = document.getElementById("list");     // <ul> element

/* Accessing child nodes of <ul> */
console.log(list.childNodes);   // Output in console → shows all child nodes
console.log(list.children);     // Output in console → shows only element nodes (<li>)

/* Modifying element */
title.textContent = "DOM Structure Example (Updated)";
desc.style.color = "blue";  // Changing style using DOM
