import { loadTemplate } from '../../Scripts/script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {

  await loadTemplate('../../Templates/header.html', 'header');
  await loadTemplate('../../Templates/footer.html', 'footer');
}


const form2 = document.getElementById('logIn-form');

form2.addEventListener('submit', event => {
  event.preventDefault();
  console.log("Submitted!");
  const username = document.querySelector("#firstInput").value.trim();
  const password = document.querySelector("#lastInput").value.trim();
  const errorDiv = form2.querySelector('.error');

  errorDiv.textContent = "";
  errorDiv.style.backgroundColor = "#f5efe6";

  fetch('../../data/users.json')
    .then(response => response.json())
    .then(data => {
      const user = data.find(u => u.nombre === username && u.password === password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "../allSessions/allSessions.html";
        console.log(user);
      } else {
        errorDiv.textContent = "Credenciales incorrectas";
      }
    })
    .catch(error => {
      console.log(error);
      errorDiv.textContent = "Error cargando usuarios";
    });


})