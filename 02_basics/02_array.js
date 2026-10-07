const nums = [1, 2, 3, 4];
const negnums = [-1, -2, -3, -4];
// nums.push(negnums);
// console.log(nums.length);
// console.log(nums[4][2])

// const newarray = nums.concat(negnums);
// console.log(newarray);


// const newarr = [...nums, ...negnums]
// console.log(newarr)

const newarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const newprintarray = newarr.flat(2)
// console.log(newprintarray);

// console.log(Array.isArray(["Yash", "Mahawar"]))
console.log(Array.from("Yash"))
console.log(Array.from({name: "hitesh"}))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));