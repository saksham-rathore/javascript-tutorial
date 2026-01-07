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
