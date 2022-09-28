function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector(".widget");
const widgetRefs = {
  colorStrEl: widgetEl.querySelector(".color"),
  buttonForChangeColorEl: widgetEl.querySelector(".change-color"),
};

widgetRefs.buttonForChangeColorEl.addEventListener(
  "click",
  onClickbuttonForChangeColor
);

function onClickbuttonForChangeColor(event) {
  const colorStrEl = document.querySelector(".widget > p > .color");

  const colorVal = getRandomHexColor();
  document.body.style.backgroundColor = colorStrEl.textContent = colorVal;
}
