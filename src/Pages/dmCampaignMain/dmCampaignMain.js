import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', init);

function init() {

  loadTemplate('../../Templates/header.html', 'header');
  loadTemplate('../../Templates/headerLoggedIn.html', 'header');
  loadTemplate('../../Templates/playersSideBar.html', 'playersSideBar');
  loadTemplate('../../Templates/dmNote.html', 'firstNote');
  loadTemplate('../../Templates/dmNote.html', 'secondNote');
  loadTemplate('../../Templates/dmNote.html', 'thirdNote');
  loadTemplate('../../Templates/dmNote.html', 'fourthNote');
  loadTemplate('../../Templates/dmNote.html', 'fifthNote');
  loadTemplate('../../Templates/dmNote.html', 'lastNote');
  loadTemplate("../../Templates/logTiradas.html", 'log');
}