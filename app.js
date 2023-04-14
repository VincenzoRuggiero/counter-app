"use strict";

let counterEl = document.querySelector(".counter");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");

let counter = 0;

minus.addEventListener("click", function () {
  counter--;
  counterEl.textContent = counter;
});

plus.addEventListener("click", function () {
  counter++;
  counterEl.textContent = counter;
});
