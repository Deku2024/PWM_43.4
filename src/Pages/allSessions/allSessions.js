import { loadTemplate } from '../../Scripts/script.js';
import { initMenu } from '../../Scripts/auxiliar-script.js';

const user = JSON.parse(localStorage.getItem('user'));

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', initiateAnimation);

async function init() {
  await loadTemplate('../../Templates/headerLoggedIn.html', 'header', () =>
    loadTemplate('../../Templates/userIconAndName.html', '.userIconAndName', () => {
      initMenu();
    })
  );
  await loadTemplate('../../Templates/navBar.html', 'nav');
  await cargarContenidoUsuario(user);
}



function initiateAnimation() {
  const sessions = document.querySelectorAll('.session');
  
  sessions.forEach((session, index) => {
    session.style.setProperty('--i', index);
  })
}


async function getTemplate() {
  const res = await fetch('../../Templates/sessionMenu.html');
  const text = await res.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');

  return doc.querySelector('#session-template');
}


if (!user) {
 window.location.href = "../logIn/logIn.html";
}

async function cargarContenidoUsuario(user) {
  const [data, template] = await Promise.all([
    fetch('../../Data/sessions.json').then(r => r.json()),
    getTemplate()
  ]);

  const sessionsList = document.querySelector('#sessionsList');

  if (!sessionsList || !template) {
    console.error('Falta ul o template');
    return;
  }

  data.forEach((item, index) => {
    if (item.usuario_id === user.id) {
      const clone = template.content.cloneNode(true);

      clone.querySelector('.nombre').textContent = item.nombre;
      clone.querySelector('.session').style.setProperty('--i', index);

      let session = clone.querySelector('.session');
      if(user.id !== item.dm_id) {
        clone.querySelector('.joinToThisSession').href = "../playerCampaignMain/playerCampaignMain.html";
        session.onclick = function() {
          addMobileLink("../playerCampaignMain/playerCampaignMain.html");
        };
      } else {
        session.onclick = function() {
          addMobileLink("../dmCampaignMain/dmCampaignMain.html");
        };
      }

      sessionsList.appendChild(clone);
    }
  });
}

function addMobileLink(link) {
  if (window.matchMedia("(max-width: 600px)").matches) {
    window.location.href = link;
  }
}

