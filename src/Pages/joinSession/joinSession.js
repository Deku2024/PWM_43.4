import { loadTemplate } from '../../script.js';
import { initMenu } from '../../auxiliar-script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {
  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () => {
    loadTemplate(
      '../../Templates/userIconAndName.html',
      '.userIconAndName',
      () => {
        initMenu();
      })
  });
  await loadTemplate('../../Templates/navbar.html', 'nav');
}