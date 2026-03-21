import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () => {
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName');
  });
  await loadTemplate('../../Templates/navBar.html', 'nav');
}