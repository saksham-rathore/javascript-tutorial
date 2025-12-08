let marks = [28,34,423,432,234,23,4,342];
console.log(marks);
console.log(marks.legnth); //property 

// arrays are mutable it can be update or change 
// strings arre immutable which is not change or update 


// looping over an array 
// let heroes = ["spider", "thor", "hulk", "shaktiman", "antman"];
// for(let idx=0; idx<heroes.length; idx++) {
//     console.log(heroes[idx]);
// }



let heroes = ["spider", "shaktiman", "hulk", "thor", "antman", "ironman"];
for (let hero of heroes) {
    console.log(hero);
}