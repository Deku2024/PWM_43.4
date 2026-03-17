import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  loadTemplate('../../Templates/headerLoggedIn.html', 'header', () => {
    loadTemplate('../../Templates/userIconAndName.html', '.userIconandName');
  });
  loadTemplate('../../Templates/navBar.html', 'nav');
}
