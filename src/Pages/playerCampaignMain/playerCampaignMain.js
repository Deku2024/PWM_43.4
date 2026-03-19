import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {

  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () => {
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName');
  });
  await loadTemplate('../../Templates/playersSideBar.html', '#playersSideBar');
  await loadTemplate('../../Templates/textAndNumberField.html', '.miscValueField');
  await loadTemplate('../../Templates/characteristicBlock.html', '.characteristicBlock');
  await loadTemplate('../../Templates/logTiradas.html', '#logTiradas');

}