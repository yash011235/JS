//as a literal and constructor(singleton)(unique)

//object literals
const mySym = Symbol("key1");
const JsUser = {
    name: "Yashasvi",
    lname: "Mahawar",
    [mySym]: "MyCuteSymbol",
    "Full Name": "Yashasvi Mahawar",
    age: 20,
    location: "Banglore",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tue", "Wed"]
}


// console.log(JsUser.lname)
// console.log(JsUser["name"]);
// console.log(JsUser["lname"]);
// console.log(JsUser["age"]);
// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["location"]);
// console.log(JsUser["lastLoginDays"]);
// console.log(JsUser["Full Name"])
// console.log(typeof JsUser[mySym]);


// Object.freeze(JsUser);
// JsUser.name = "Devarishi chaudhary"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greetings())

