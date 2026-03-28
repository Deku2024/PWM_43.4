export async function loadTemplate(fileName, selector, callback) {

  fetch(fileName)
    .then(res => res.text())
    .then(text => {

      document.querySelectorAll(selector).forEach(el => {
        el.innerHTML = text;
      });

      if (callback) {
        callback();
      }

    });

}

export async function loadCharacteristicsBlocks(selector, characteristics, callback) {
  fetch('../../Templates/characteristicBlock.html')
    .then((res) => res.text())
    .then((text) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((el, index) => {
        el.innerHTML = text;
        const name = el.querySelector('.characteristicName');
        name.textContent = characteristics[index];
      });
    });
  
  if (callback) {
    callback();
  }
}
export function cargarContenidoHome() {
  fetch('../../data/content.json')
  .then(res => res.json())
    .then(data => {
      let dynamicContentSection = document.querySelector('#mainInformation');
      if (!dynamicContentSection) {
        console.error('No se encontró el selector en el DOM');
        return;
      }
      data.forEach(item => {
        let section = document.createElement('section');
        section.classList.add('card');
        section.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
        dynamicContentSection.appendChild(section);
      });
    })
    .catch(error => console.error('Error:', error));
}

export function cargarSesiones() {
  fetch('../../data/sessions.json')
    .then(res => res.json())
    .then(data => {
      let dynamicContentSection = document.querySelector('#sessionSection');
      if (!dynamicContentSection) {
        console.error('No se encontró el selector en el DOM');
        return;
      }
      data.forEach(item => {
        let article = document.createElement('article');
        a
      })
    })
}
