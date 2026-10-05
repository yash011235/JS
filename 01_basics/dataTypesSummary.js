//primitive
/*
    7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId)

//non-primitive reference
//Array objects functions

const heros = ['shakitiman', 'nagraj']

let myObj = {
    name : "yash",
    age:20
}

const myFunction = function(){
    console.log("Hello World");
}
// myFunction();
// myFunction();

//primitve stack memory
//non-primitive heap memeory

let myYTName = "yash.com"
let anotherName = myYTName;
// console.log(anotherName);
// anotherName = "WTF";
// console.log(anotherName);
// console.log(myYTName);

let userOne = {
    email : "Yash@gmail.com",
    upi : "user@ybl"
}

console.log(userOne.email);


let UserTwo = userOne;
UserTwo.email = "Dev@gmail.com";
console.log(userOne.email);
