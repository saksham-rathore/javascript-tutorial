// // synchronous programming 
// function hello() {
//     console.log("hello")
// }
// setTimeout(hello, 2000) //timeout 2000ms millisecond 


// asyncronous programming
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 4000); //timeout ;

console.log("three");
console.log("four");