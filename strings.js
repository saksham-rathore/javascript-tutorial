// strings 
let str = "sam developer";
let str2 = 'good morning';

// check str length
str.length

// string indices
let str3 = "hey! buddy";
console.log(str3[5]); //h

//template literals
let specialstring = `this is template literals`;
console.log(specialstring);

// let obj = {
//     item: "pen", 
//     price: 10,
// };

// console.log("the cosr of", obj.item, "is", obj.price, "rupees");


let obj = {
    item: "pen", 
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// escape characters
console.log("sam\ndeveloper");
console.log("sam\tdeveloper");


// str.touppercase()
let string = "sam developer"
str = str.toUpperCase();
console.log(str);


// str.toLowerCase()
let string2 = "SAM DEVELOPER";
str = str.toLowerCase();
console.log(str);


// trim method they can remove the spaces on strings
let str4 = "         sam engineer   js    ";
console.log(str4.trim());


// str.slice

let hey = "231344";
console.log(hey.slice(2, 5))
// 5 index in non inclusive 


// str.concat add a 2 strings 
let hii = "sam";
let hii2 = " sage university";
// let res = hii.concat(hii2);
let res = hii + hii2;
console.log(res); 


// replace mathod
let strings = "hello";
console.log(strings.replace("lo", "p"));


// search characters
let strings2 = "i love js"
console.log(strings2.charAt(3)); //o





