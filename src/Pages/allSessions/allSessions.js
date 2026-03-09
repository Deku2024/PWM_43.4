import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadTemplate('../../Templates/headerLoggedIn.html', 'header');
  loadTemplate('../../Templates/navBar.html', 'navBar');
  loadTemplate('../../Templates/sessionMenu.html', 'session1');
  loadTemplate('../../Templates/sessionMenu.html', 'session2');
  loadTemplate('../../Templates/sessionMenu.html', 'session3');
}
