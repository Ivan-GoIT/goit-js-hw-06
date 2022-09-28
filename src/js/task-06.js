document
  .querySelector("#validation-input")
  .addEventListener("blur", onInputValidFilling);

function onInputValidFilling(event) {
  const inputEl = event.currentTarget;
  const correctNumbersOfSimbols =
    inputEl.value.length >= inputEl.dataset.length;
  const classArr = ["valid", "invalid"];

  classArr.forEach((classEl) => inputEl.classList.remove(classEl));

  inputEl.classList.add(correctNumbersOfSimbols ? "valid" : "invalid");
}
