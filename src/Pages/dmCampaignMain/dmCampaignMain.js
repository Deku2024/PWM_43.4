import { loadTemplate } from '../../Scripts/script.js';
import { initCampaignMenu } from '../../Scripts/auxiliar-campaign-script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {

  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () => {
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName', () => {
      initCampaignMenu();
    });
  });
  await loadTemplate('../../Templates/dmNote.html', '.note');
  await loadTemplate('../../Templates/playersSideBar.html', '#playersSideBar');
  await loadTemplate('../../Templates/logTiradas.html', '#logTiradas');

}