import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', init);

function init() {

  loadTemplate('../../Templates/headerLoggedIn.html', '#headerLoggedIn');
  loadTemplate('../../Templates/userIconAndName.html', '#userIcon');
  loadTemplate('../../Templates/playersSideBar.html', '#playersSideBar');
  loadTemplate('../../Templates/textAndNumberField.html', '.miscValueField');
  loadTemplate('../../Templates/characteristicBlock.html', '.characteristicBlock');
  loadTemplate('../../Templates/logTiradas.html', '#logTiradas');

}