// arithmetic operators
let a = 4;
let b = 3;

console.log("a + b = ", a + b);
console.log("a - b = ", a + b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); //SQUARE OF THIS 

// increment
a++;
console.log("a =", a); //6
//decrement 
a--;
console.log("a =", a); //6

// post and pre increment 
console.log("++a = ", ++a)

console.log("--a = ", --a)

console.log("a++ = ", a++)
console.log("a = ", a);


console.log("a-- = ", a--)
console.log("a = ", a)

// assignment operartors
// same as arithmatic operators but equal to should always included

 
let c = 4;
let d = 2;
c += 4  //c = c + 4
console.log("c = ", c); // 9

c -= 4  //c = c - 4
console.log("c = ", c); // 0



// comparison operators it gives only boolean values 
let e = 8
let f = 5

console.log("8 == 8", e == f);
console.log("8 != 8", e != f);
// stricter check the value
console.log("e === f", e === f);
console.log("e !== f", e !== f);


console.log("e > f", e > f);
console.log("e < f", e < f);

// logical operators AND &&
// both condition are true it give a true answer
let g = 4;
let h = 5;

let cond1 = g < h; //true
let cond2 = g === h //false
console.log("cond1 && cond2 = ", cond1 && cond2);


// logical operators OR ||
// one condition are true answer is true 
let i = 4;
let j = 4;
let cond3 = i === j; //true
let cond4 = i < j //false
console.log("cond3 || cond4 = ", cond3 || cond4);


// logical operators NOT !
// its opposite T=>F F=>T
let k = 3;
let l = 5;

console.log("!(3<5) = ", !(k < l))


// conditional statements 
let age = 35;

if(age > 12) {
    console.log("you can vote");
}

if(age > 2) {
    console.log("you cannot vate")
}

let mode = "light"
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white"
}

console.log(color);

// if-else statement
// odd or even 

let num = 10; 

if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

