const counterRefs = {
  valueEl: document.querySelector("#counter #value"),
  decrementButtonEl: document.querySelector(
    "#counter > [data-action=decrement]"
  ),
  incrementButtonEl: document.querySelector(
    "#counter > [data-action=increment]"
  ),
};

const onDecrementButtonClick = () => {
    let value = parseInt(counterRefs.valueEl.textContent);
    counterRefs.valueEl.textContent = --value;

};

const onIncrementButtonClick = () => {
  let value = parseInt(counterRefs.valueEl.textContent);
  counterRefs.valueEl.textContent = ++value;
};

counterRefs.decrementButtonEl.addEventListener("click", onDecrementButtonClick);
counterRefs.incrementButtonEl.addEventListener("click", onIncrementButtonClick);

