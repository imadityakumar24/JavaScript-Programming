
/* 
Topic: Browser Events - [DOMContentLoaded, load, resize, scroll]

Explanation:
1. DOMContentLoaded → When HTML is fully loaded and parsed.
2. load → When entire page including assets (CSS, images, JS) is loaded.
3. resize → When the browser window size changes.
4. scroll → When the page is scrolled vertically or horizontally.
*/


// 1. DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");   // Check HTML note: output in console
});


// 2. load event
window.addEventListener("load", function () {
    console.log("Page fully loaded with all resources");   // Check HTML note: output in console
    alert("Page Load Complete!");
});

  
// 3. resize event
window.addEventListener("resize", function () {
    console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);   // Check HTML note: output in console
});

  
// 4. scroll event
window.addEventListener("scroll", function () {
    console.log("Page scrolled - Current Y offset:", window.scrollY);   // Check HTML note: output in console
});
