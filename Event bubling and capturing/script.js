/*

Event Bubbling and Capturing are two phases of event propagation in the DOM (Document Object Model) that determine the order in which event handlers are executed when an event occurs on a nested element. 

Event Capturing is the first phase, where the event travels from the root of the DOM down to the target element.  It starts at the outermost ancestor (like window or document) and moves inward. To use capturing, set the third parameter of addEventListener() to true. 
Target Phase follows, where the event is handled by the element that triggered it (the target). 
Event Bubbling is the final phase, where the event travels from the target element back up to the root.  This is the default behavior in JavaScript. Event handlers are executed in reverse order, starting from the innermost element and moving outward. By default, addEventListener() uses bubbling (third parameter is false or omitted). 

Key Points:

Capturing is useful for preventing events before they reach the target. 
Bubbling enables event delegation, allowing a single parent listener to handle events for multiple child elements. 
Use event.stopPropagation() to stop propagation (bubbling or capturing).
Use event.stopImmediatePropagation() to stop both further propagation and other listeners on the same element. 
Example:


to stop the event bubbling user property

event.stoppropagation

.stopPropagation();

*/


let yello = document.querySelector(".yello")
let red   = document.querySelector(".red")
let aqua  = document.querySelector(".aqua")


// console.log(yello, red, aqua);

// body.addEventListener("click", ()=>{
//     console.log("body event listner")
// })

/*


// event bubbling

document.addEventListener("click", ()=>{
    console.log("5. document event listner")
})

document.body.addEventListener("click", ()=>{
    console.log("4. body event listner")
})



yello.addEventListener("click", ()=>{
    console.log("3. yellow event listner")
})

red.addEventListener("click", ()=>{
    console.log("2. red event listner")
})

aqua.addEventListener("click", (val)=>{
    // is line ko htaa do aur dekho result, changes
    val.stopPropagation();  // due to this the event bubbling nhi hoga
    console.log("1. aqua event listner")
})

*/

// agar hum true likh de to ye ulta chlega matlba manega pehle window pe then body pe click hua hia

// span pe event listner nhi lga hai



// event capturing

/*


document.addEventListener("click", ()=>{
    console.log("5. document event listner")
}, true)

document.body.addEventListener("click", ()=>{
    console.log("4. body event listner")
}, true)



yello.addEventListener("click", ()=>{
    console.log("3. yellow event listner")
}, true)

red.addEventListener("click", ()=>{
    console.log("2. red event listner")
}, true)

aqua.addEventListener("click", (val)=>{
    console.log("1. aqua event listner")
}, true)


*/

// above and below code are same



document.addEventListener("click", ()=>{
    console.log("5. document event listner")
}, {capture: true})

document.body.addEventListener("click", ()=>{
    console.log("4. body event listner")
}, {capture: true})

yello.addEventListener("click", ()=>{
    console.log("3. yellow event listner")
}, {capture: true})

red.addEventListener("click", ()=>{
    console.log("2. red event listner")
}, {capture: true})

aqua.addEventListener("click", (val)=>{
    console.log("1. aqua event listner")
}, {capture: true})




/*

aqua.addEventListener("click", (val)=>{
    console.log("1. aqua event listner")
}, {capture: true, once: true})        // once true kaa matlab hai event listner ek baar hi chelga

*/