import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadTemplate('../../Templates/headerLoggedIn.html', 'header');
  loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName');
  loadTemplate('../../Templates/navBar.html', 'nav');
}
