import { cargarContenidoHome, loadTemplate } from '../../Scripts/script.js';

document.addEventListener('DOMContentLoaded', async function() {
  await init();
  cargarContenidoHome();
});

async function init() {

  await loadTemplate('../../Templates/header.html', 'header');
  await loadTemplate('../../Templates/footer.html', 'footer');
}