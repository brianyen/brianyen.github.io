let leftEl = document.getElementById("cycleLeft");
let rightEl = document.getElementById("cycleRight");
let imageEl = document.getElementById("aboutImage");

let allFiles = ["img1.png", "img2.png"];
let pathPrefix = "./img/";

function cycleDirection(direction) {
    idx = parseInt(imageEl.getAttribute("idx"))
    if (direction == "left") {
        idx--;
    } else {
        idx++;
    }
    if (idx < 0) {
        idx += allFiles.length;
    }
    idx = idx % allFiles.length;
    imageEl.setAttribute("idx", idx);
    imageEl.src = pathPrefix + allFiles[idx];
}

leftEl.addEventListener("click", () => {cycleDirection("left")})
rightEl.addEventListener("click", () => {cycleDirection("right")})