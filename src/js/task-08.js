const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSumbitButtonClick);

function onSumbitButtonClick(event) {
  event.preventDefault();

  const targetFormEl = event.currentTarget;

  const {
    email: { value: email },
    password: { value: password },
  } = targetFormEl.elements;

  if (email.length === 0 || password.length === 0)
    return alert("Все поля должны быть заполнены");

  console.log({ email, password });

  targetFormEl.reset();
}
