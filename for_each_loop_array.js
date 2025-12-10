function abc() {
    console.log("hello");
}
function myfunction(abc) {
    return abc;
}

// for each loop in array
let arr = ["pune", "banglore", "mumbai"];

arr.forEach((val) => {
    console.log(val);
});

// some more array map method
let nums = [2, 423, 324];

let newarr = nums.map((val) => {
    return val;
});
 
console.log(newarr);


// filter array
let arr2 = [1,2,3,4,5,6,7];

let evenArr = arr2.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);

// reduce method 
let arr3 = [1,2,3,4];
 
const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output);