let h1 = document.querySelector("h1");

h1.addEventListener("click", function (){
    h1.style.color = "red";
})

/*
it works to tap in h1 to change a color it
works through the listioner


element.addEventListener("event name", function(){

remove eventlistioner is 
h1.removeenentlistioner(mdsonfonsdo)

})
*/

// this is input event
let inp = document.querySelector("input");

inp.addEventListener("input", function (dets){
    if (dets.data !== null) {
        console.log(dets.data);
    }
});


// change event jab chalta hai jab aapke koi input ya select area mai koi change aajaye 

let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function (e) {
  console.log(e.target.value);
  device.value = `${e.target.value} device selected`;
});

