function myfunction() {
    console.log("welcome to javascript");
    console.log("we are learning js :");
}

myfunction();


function myfunction(msg) {
    // parameter -> input
    console.log(msg);
}

myfunction("i love js") //argument


// functions -> 2 nmbers, sum 
function sum(x, y) {
    console.log(x+y);
}

// modern javascript
const arrowsun = (a, b) => {
    console.log(a + b);
}


// function function_name(parameter1, parameter2) {
//     code to run 
//     return value;
// }

// function_name(arguments1, arguments2)


/*
function add(a,b) {
    let sum = a + b;
    return sum;
}
let result = add(10,49)
console.log(result)
 
*/

function calculatediscount(price, discountprice) {
    let discount = price * (discountprice / 100);
    let final_price = price - discount;
    return final_price;
}

console.log(calculatediscount(1000, 20));
