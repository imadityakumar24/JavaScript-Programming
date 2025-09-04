/*


==================  Incapsulation  ======================

It same concept like c++ encasulation 


*/ 



function count() {
    let c = 0;
    return function() {     // ye return function krega
        if (c < 5) {
            c++;
            console.log(`Clicked ${c} times`);
        }
        else {
            console.error("limit exceded can't click more then 5 times");
        }
    }
}

let anotherCall = count();

anotherCall();
anotherCall();
anotherCall();
anotherCall();
anotherCall();

anotherCall();
