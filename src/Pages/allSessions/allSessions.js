import { loadTemplate } from '../../script.js';
import { initMenu } from '../../auxiliar-script.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadTemplate('../../Templates/headerLoggedIn.html', 'header', () =>
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName', () => {
      initMenu();
    })
  );
  loadTemplate('../../Templates/navBar.html', 'nav');
  loadTemplate('../../Templates/sessionMenu.html', '.session');
}
