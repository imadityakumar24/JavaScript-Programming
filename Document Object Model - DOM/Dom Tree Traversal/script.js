
/*  
    Topic: DOM Tree Traversal - [parentNode, childNodes, firstChild, nextSibling]

    1. parentNode  → Returns the parent of a node.
    2. childNodes  → Returns all child nodes (including text nodes).
    3. firstChild  → Returns the first child node (could be a text node).
    4. nextSibling → Returns the next node at the same level.
*/


/* Get container element */
let container = document.getElementById("container");


/* parentNode */
console.log(container.parentNode);  
// Output: <body> (parent of #container)


/* childNodes */
console.log(container.childNodes);  
// Output: NodeList of child nodes (includes text nodes like line breaks)


/* firstChild */
console.log(container.firstChild);  
// Output: May be a text node (line break before first <p>)


/* nextSibling */
let firstPara = container.firstElementChild;   // Safer: first <p> element
console.log(firstPara.nextSibling);  
// Output: Might be a text node (line break)
console.log(firstPara.nextElementSibling);  
// Output: Second <p> (using element-only navigation)
