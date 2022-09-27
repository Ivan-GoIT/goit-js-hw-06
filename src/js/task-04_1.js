const counterRefs = {
  valueEl: document.querySelector("#counter #value"),
  buttonsEl: document.querySelectorAll(
    "#counter > [data-action]"
  ),
};

const onCounterButtonClick = (event) => { 
  let value = parseInt(counterRefs.valueEl.textContent);
  const targetAction = event.target.dataset.action
  console.log(targetAction);
  switch (targetAction) { 
    case 'increment':
      value++;
      break;
    case 'decrement':
      value--;
      break;
  }
  counterRefs.valueEl.textContent=value;
  }
  
  counterRefs.buttonsEl.forEach((button) =>
    button.addEventListener("click", onCounterButtonClick)
  );
  

