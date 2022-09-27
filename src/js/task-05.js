const nameRefs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

nameRefs.input.addEventListener("input", onInputText);

function onInputText(event) {
  const inputText = event.currentTarget.value;

  console.log(inputText);
  console.log(nameRefs.output.textContent);
  nameRefs.output.textContent = inputText ? inputText : "Anonymous";
}