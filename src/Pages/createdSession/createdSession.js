import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadTemplate('../../Templates/userIconAndName.html', 'userIcon');
  loadTemplate('../../Templates/headerLoggedIn.html', 'header');
  loadTemplate('../../Templates/navBar.html', 'navBar');
}
