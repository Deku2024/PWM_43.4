import { loadTemplate } from '../../script.js';
import { initMenu } from '../../auxiliar-script.js';

document.addEventListener('DOMContentLoaded', init);

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

if (!user) {
  window.location.href = "../logIn/logIn.html";}
