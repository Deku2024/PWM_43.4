import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
});

async function init() {

  await loadTemplate('../../Templates/header.html', 'header');
  await loadTemplate('../../Templates/footer.html', 'footer');
}