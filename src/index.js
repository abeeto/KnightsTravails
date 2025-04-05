import "./styles.css";
// import isInRange from "./utils";

// const startPos = [1, 0];
// eslint-disable-next-line no-console
const positionForm = document.getElementById("knight-position-form");
const submitButton = document.getElementById("knight-position-form-submit");
const textOutputDiv = document.getElementById("knights-output-text");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(positionForm);

  formData.entries().forEach(([key, value]) => {
    textOutputDiv.innerText += `${key}: ${value} \n`;
  });
});

const clearTextOutputBtn = document.querySelector("#clear-knights-output-btn");
clearTextOutputBtn.addEventListener("click", () => {
  textOutputDiv.innerText = "";
});
