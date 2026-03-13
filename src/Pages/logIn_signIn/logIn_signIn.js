import { loadTemplate } from '../../script.js';

document.addEventListener('DOMContentLoaded', init);

function init() {

  loadTemplate('../../Templates/header.html', 'header');
  loadTemplate('../../Templates/footer.html', 'footer');
}