import { loadCharacteristicsBlocks, loadTemplate } from '../../Scripts/script.js';
import { initCampaignMenu } from '../../Scripts/auxiliar-campaign-script.js';
import { initMenu } from '../../Scripts/auxiliar-script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {

  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () => {
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName', () => {
      initCampaignMenu();
    });
  });
  await loadTemplate('../../Templates/playersSideBar.html', '#playersSideBar');
  await loadTemplate('../../Templates/textAndNumberField.html', '.miscValueField');
  await loadCharacteristicsBlocks('.characteristicBlock', ["STR", "DEX", "CON", "INT", "WIS", "CHR"]);
  await loadTemplate('../../Templates/logTiradas.html', '#logTiradas');

}