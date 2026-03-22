import { loadTemplate } from '../../Scripts/script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {

  await loadTemplate('../../Templates/header.html', 'header');
  await loadTemplate('../../Templates/footer.html', 'footer');
}

function showError(input, errorDiv) {
  const inputControl = input.parentElement;
  errorDiv.textContent = input.validationMessage;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');

}

function showSuccess(input, errorDiv) {
  const inputControl = input.parentElement;
  errorDiv.textContent = "";
  inputControl.classList.add('success');
  inputControl.classList.remove('error');

}



function validateInput(input, errorDiv, validator) {

  input.addEventListener("input", () => {

    validator(input);

    if (input.validity.valid) {
      showSuccess(input, errorDiv);
    } else {
      showError(input, errorDiv);
    }

  });

}

const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");

validateInput(username, usernameError, (input) => {

  if (input.validity.valueMissing) {
    input.setCustomValidity("Debe especificar un nombre de usuario");

  } else if (input.validity.tooShort || input.validity.tooLong) {
    input.setCustomValidity("Debe tener entre 6 y 25 caracteres");

  } else if (input.validity.patternMismatch) {
    input.setCustomValidity("Caracter no válido");

  } else {
    input.setCustomValidity("");
  }

});

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

validateInput(email, emailError, (input) => {

  if (input.validity.valueMissing) {
    input.setCustomValidity("Debe especificar un email");

  } else if (input.validity.typeMismatch) {
    input.setCustomValidity("Debe introducir un email válido");

  } else {
    input.setCustomValidity("");
  }

});

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,15}$/;

validateInput(password, passwordError, (input) => {

  if (input.validity.valueMissing) {
    input.setCustomValidity("La contraseña es obligatoria");

  } else if (!passwordRegex.test(input.value)) {
    input.setCustomValidity("Contraseña no válida, debe ser alfanumérica y contener al menos un caracter especial.");

  } else {
    input.setCustomValidity("");
  }

})

const repeat = document.querySelector("#repeatpassw");
const repeatError = document.querySelector("#repeatpasswError");

validateInput(repeat, repeatError, (input) => {

  if (input.value !== password.value) {
    input.setCustomValidity("Las contraseñas deben coincidir");

  } else {
    input.setCustomValidity("");
  }

});




const form = document.getElementById('signIn-form');

form.addEventListener("submit", event => {
  if (!form.checkValidity()) {
    event.preventDefault();
  }
});




