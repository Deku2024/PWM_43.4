import { loadTemplate } from '../../Scripts/script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {

  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () => {
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName');
  });
  await loadTemplate('../../Templates/playersSideBar.html', '#playersSideBar');
  await loadTemplate('../../Templates/textAndNumberField.html', '.miscValueField');
  await loadTemplate('../../Templates/characteristicBlock.html', '.characteristic', () =>{
    characteristicBlock();
  });
  await loadTemplate('../../Templates/logTiradas.html', '#logTiradas');

}

function characteristicBlock() {
  const chars = ['STR', 'DEX', 'CONS', 'WIS', 'INT', 'CHA'];
  const div = document.querySelector('#characteristicsGroup');
  const characteristics = document.querySelector('#characteristicBlock');

  chars.forEach((char) => {
    const clon = characteristics.content.cloneNode(true);
    clon.querySelector('p').textContent = char;
    div.appendChild(clon);
  })
}