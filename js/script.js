const form = document.querySelector("form");
const inputEmail = document.querySelector("input");
const fieldset = document.querySelector("fieldset");
const button = document.querySelector("button");
const errorMessage = document.querySelector(".mensagem-erro");

const emptyFieldError = "The email field cannot be empty";
const invalidEmailError = "Please provide a valid email";

form.addEventListener("submit", validaEmail);
button.addEventListener("click", validaEmail);

function validaEmail(evento) {
  evento.preventDefault();

  const inputValue = inputEmail.value.trim();
  // console.log(inputValue);

  if (inputValue === "") {
    fieldset.classList.add("error");
    errorMessage.textContent = emptyFieldError;
  } else if (!emailEhValido(inputValue)) {
    fieldset.classList.add("error");
    errorMessage.textContent = invalidEmailError;
  } else {
    fieldset.classList.remove("error");
    window.location.href = "http://github.com/Inkekk";
  }
}

function emailEhValido(input) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  );
}
