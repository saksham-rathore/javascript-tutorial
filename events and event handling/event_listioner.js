let box = document.querySelector("#box");

window.addEventListener("mousemove", function (dets) {
    box.style.top = dets.clientY + "px";
    box.style.left = dets.clientX + "px";
});




// make a counter to event listener method
let count = 10;

let interval = setInterval(function(){
    if (count >= 0) {
        console.log(count);
        count--;
    } else clearInterval(interval);
}, 1000);