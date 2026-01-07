/*
make a downloading counter
let conut = 0;
let seconds = 10;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let intv = setInterval(
    function () {
        if (conut <= 99) {
            conut++;
            progress.style.width = `${conut}%`;
            percentText.textContent = `${conut}%`;
        } else {
            document.querySelector("h2").textContent = "Downloaded.";
            clearInterval(intv);
        }
    },
    (seconds * 1000) / 100
);
*/


/*
local storeage -> aapke browser ke ander data store karna jo ki browser band hone per bhi delete nhi hoga 

sessionstorage -> ye aapke data temporarily store karta hai matlab ki tab band hua or data gya


cookies -> ye bhi data store karta hai and aapke data browser ke cookies naam ki property main save hota hai and  ye cookie concept kam data ya light data use ke liye hota hai


cookies
browser mai chota data store karne ke liye cookies ka istemaal hota hai 


~ cookies - 4kb
local storage or SessionStorage - ~5mb

local storage mai array save nhi kr sakte hai jisko hame json property se convert krna padega array form mai 

*/