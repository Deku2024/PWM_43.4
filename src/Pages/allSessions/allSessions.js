import { loadTemplate } from '../../Scripts/script.js';
import { initMenu } from '../../Scripts/auxiliar-script.js';

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', initiateAnimation);

async function init() {
  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () =>
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName', () => {
      initMenu();
    })
  );
  await loadTemplate('../../Templates/navBar.html', 'nav');
  await loadTemplate('../../Templates/sessionMenu.html', '.session');
}

const user = JSON.parse(localStorage.getItem('user'));

// animación para que las sesiones aparezcan en cascada

function initiateAnimation() {
  const sessions = document.querySelectorAll('.session');
  
  sessions.forEach((session, index) => {
    session.style.setProperty('--i', index);
  })
}


if (!user) {
 window.location.href = "../logIn/logIn.html";
} else {

}

