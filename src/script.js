export function loadTemplate(fileName, selector, callback) {

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