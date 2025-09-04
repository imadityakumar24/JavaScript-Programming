/*

==================  Lexical Scoping and Dynamic Scoping ======================

Lexical Scoping : 

Aap kaha pare physically available ho ye poori tareeke se depend karta hai ki aap kya access kar paoge
lexically means physically

actually it like scoping in C / C++ same concept just it have specific name as lexical scoping


Dynamic Scoping : 

kaha se call kar rahe ho uspe depend krega ki kya value milegi
vese hum js mai dynamic scoping use nhi karte hai
js mai hum sirf lexical scoping use karte hai




*/



/*   ===========  Lexical Scoping  ===========  */

function dad() {
    let a = 90;             // now a kahi bhi use kare sakte hai fucntion mai par outside funciton nhi use kar skate

    son();

    function son() {
        console.log("Inside the function : ", a);       // it print 
    }

}

dad();

// console.log("Outside the function : ", a);  // give error can't acces a outside the classs




/*   ===========  Dynamic Scoping  ===========  */


let val = 20;

function first() {
    console.log("value of val inside first funciton : ",val);    // it print
}

function second() {
    let val = 40;
    first();
    console.log("value of val inside econd funciton : ", val);    // it print
}

second();
