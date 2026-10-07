//array

const myarr = [0, 1, 2, 3, 4, 5]
const myarr2 = new Array(0, 1, 2, 3, 4)
// myarr.push(6);
// myarr.push(7);
// console.log(myarr);
// myarr.pop();
//add in begining
// myarr.unshift(9)
//remove the first element
// myarr.shift();

// console.log(myarr.includes(5))
// console.log(myarr.indexOf(3));

// const newarr = myarr.join(); //string

// console.log(myarr)

// console.log(newarr);

console.log("A ", myarr);
const myn1 = myarr.slice(1, 3)
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1, 3)
console.log(myn2);
console.log("C ", myarr);
