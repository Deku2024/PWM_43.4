import { loadTemplate } from '../../Scripts/script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {

  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () => {
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName');
  });
  await loadTemplate('../../Templates/dmNote.html', '.note');
  await loadTemplate('../../Templates/playersSideBar.html', '#playersSideBar');
  await loadTemplate('../../Templates/logTiradas.html', '#logTiradas');

}