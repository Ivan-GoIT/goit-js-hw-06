//Для максимального количества чистых функций ТЗ было слегка изменено

const refs = {
  crealeButtonEl: document.querySelector("[data-create]"),
  destroyButtonEl: document.querySelector("[data-destroy]"),
};

refs.crealeButtonEl.addEventListener("click", onCreateButtonClick);
refs.destroyButtonEl.addEventListener("click", onDestroyButtonClick);

function creaateBoxes(amount) {
  const boxes = [];

  for (let i = 1; i <= amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = divEl.style.height = `${i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxes.push(divEl.outerHTML);
  }

  return boxes.join("");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateButtonClick() {
  const inputEl = document.querySelector("#controls > input");
  const boxesEl = document.querySelector("#boxes");
  boxesEl.insertAdjacentHTML("afterbegin", creaateBoxes(inputEl.value));
}

function onDestroyButtonClick() {
  const boxesEl = document.querySelector("#boxes");
  boxesEl.innerHTML = "";
}
