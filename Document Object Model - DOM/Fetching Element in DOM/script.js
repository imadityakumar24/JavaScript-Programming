

/*  
    Topic: Fetching Elements in DOM

    Different ways to fetch elements from the DOM:
    1. document.getElementById("id") → Selects an element by its unique ID.
    2. document.getElementsByTagName("tag") → Selects all elements with a given tag.
    3. document.getElementsByClassName("class") → Selects all elements with a given class.
    4. document.querySelector("selector") → Selects the first element that matches a CSS selector.
    5. document.querySelectorAll("selector") → Selects all elements that match a CSS selector.
*/

/* 1. getElementById */
let heading = document.getElementById("mainHeading");
console.log(heading);   // Output in console

/* 2. getElementsByTagName */
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);   // Output in console (HTMLCollection)

/* 3. getElementsByClassName */
let textClass = document.getElementsByClassName("text");
console.log(textClass);   // Output in console (HTMLCollection)

/* 4. querySelector */
let firstParagraph = document.querySelector("p"); 
console.log(firstParagraph);   // Output in console (first <p>)

/* 5. querySelectorAll */
let allListItems = document.querySelectorAll("li");
console.log(allListItems);   // Output in console (NodeList)
