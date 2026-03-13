import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {
  await loadTemplate('../../Templates/userIconAndName.html', '#userIcon');
  await loadTemplate('../../Templates/headerLoggedIn.html', '#headerLoggedIn');
  await loadTemplate('../../Templates/navbar.html', '#navbar');
}