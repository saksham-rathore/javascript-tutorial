let mode = "dark"
let color; 

if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink"
} else {
    color = "white"
}
 console.log(color);


//  ternary operator
let age = 25;
let result = age >= 18 ? "adult" : "not adult"
console.log(result);

// direct method 
age >= 18 ? console.log("adult") : console.log("not adult");


// alert is popup messaege in our website one time popup
alert("hey! Sam");

// prompt is popup program which is used to get a input in users 
prompt("hey! buddy");

let name = prompt('hello!');
console.log(name);


