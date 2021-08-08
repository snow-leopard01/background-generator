var _ = require("lodash");
console.log(_);

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomColorGenerator = document.querySelector(".randomButton");
// console.log(body);

function setGraident() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
  console.log(color1.value, color2.value);
}

function randomColor() {
  let randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.background =
    "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGraident);
color2.addEventListener("input", setGraident);
randomColorGenerator.addEventListener("click", randomColor);
