const refs = {
  rangeEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};
const rangeEl = document.querySelector("#font-size-control");

const onChangeValueOfRange = (event, textEl=refs.textEl) => {
    const targetEl = event.currentTarget;
    textEl.style.fontSize = targetEl.value+'px';
};

refs.rangeEl.addEventListener('input',onChangeValueOfRange)