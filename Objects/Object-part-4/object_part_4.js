
// copy of object 
// reference and original copy


const person = {
    name: "Gajendar Parshad",
    age: 56,
    shehr: "gorakhpur",
    jilla: "kushinagar"
}

console.log(person);

// it pass the reference 
// means all the changes in person2 directly reflect to person
// solution: use copy means doing the deep copy
const person2 = person;

person2.name = "Vishal Yadav ji";
person2.age = 23;
person2.shehr = "motihari";

console.log(person);
console.log(person2);



const studentOne = {
     name: "Karan",
    age: 24,
    shehr: "Bathinda"
}

// the is pass by value 

// note only work only single level , nested objects pe ye work nhi karta hai wha reference hi pass hoga 
const studentTwo = {...studentOne};

studentTwo.name = "Priya";
studentTwo.age = 21;
studentTwo.shehr = "Mathura";

console.log(studentOne);
console.log(studentTwo);





const hero1 = {
    name: "Ajay khan",
    age : 56,   
    addres : {
        shehr: "bambbai",
        jilla: "Filmcity"
    }
}


const hero2 = {...hero1};

// till 1 level it work fine
hero2.name = "Akshay";
hero2.age = 23;

console.log(hero1)
console.log(hero2)

// now chngin in level 2 reflect the hero1

hero2.addres.shehr = "Kolkata";

console.log(hero1)
console.log(hero2)



// solution  use deep copy

const hero3 = structuredClone(hero1);
// it will create a indepedent copy

hero3.addres.jilla = "AJMER";

console.log(hero1);
console.log(hero3)



