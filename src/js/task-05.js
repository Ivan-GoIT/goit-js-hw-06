const nameRefs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

nameRefs.input.addEventListener("input", onInputText);

function onInputText(event) {
  const inputText = event.currentTarget.value;
  nameRefs.output.textContent = inputText ? inputText : "Anonymous";
}