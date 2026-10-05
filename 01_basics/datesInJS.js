//Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newdate = new Date();
// console.log(newdate.getMonth() + 1);
// console.log(newdate.getDay());

newdate.toLocaleDateString('default',{
    weekday : "long"
})
console.log(newdate.getDay());