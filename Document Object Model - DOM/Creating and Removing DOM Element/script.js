
/*  
    Topic: Create and Removing DOM Elements - [createElement(), appendChild(), insertBefore(), removeChild()]

    Definitions:
    1. createElement("tagName") 
       → Creates a new element node but does not add it to the document yet.

    2. appendChild(node) 
       → Adds a new child node at the end of a parent element.

    3. insertBefore(newNode, referenceNode) 
       → Inserts a new node before an existing reference node.

    4. removeChild(node) 
       → Removes a child node from a parent element.
*/

let container = document.getElementById("container");
let newPara;   // to store created element

/* Create a new <p> element (not added yet) */
function createNewElement() {
    newPara = document.createElement("p");
    newPara.textContent = "This is a new paragraph created using createElement().";
    console.log("New element created:", newPara);
}

/* Append the created element at the end */
function appendElement() {
    if (newPara) {
        container.appendChild(newPara);
        console.log("New element appended at the end of container.");
    } else {
        console.log("First create an element before appending.");
    }
}

/* Insert new element before first paragraph */
function insertBeforeElement() {
    if (newPara) {
        let firstPara = document.getElementById("firstPara");
        container.insertBefore(newPara, firstPara);
        console.log("New element inserted before first paragraph.");
    } else {
        console.log("First create an element before inserting.");
    }
}

/* Remove the new element */
function removeElement() {
    if (newPara && container.contains(newPara)) {
        container.removeChild(newPara);
        console.log("New element removed from container.");
    } else {
        console.log("No element to remove.");
    }
}
