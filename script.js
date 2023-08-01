/*
https://codewithcurious.com/projects/bmi-calculator-using-html-css-javascript/
*/

let result = document.getElementById("result");
let btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let category;
  let bmi = weight / ((height / 100) ** 2);

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  if (weight.trim() === "" && height.trim() === "") {
    result.textContent = "Fields are empties, please enter a 'height' and 'weight'.";
  } else if (weight.trim() === "") {
    result.textContent = "Weight field is empty, please enter a number in kg.";
  } else if (height.trim() === "") {
    result.textContent = "Height field is empty, please enter a number in cm.";
  } else {
    result.textContent = "Your BMI is: " + bmi.toFixed(2) + " (" + category + ").";
  }
});
