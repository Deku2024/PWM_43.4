export function loadTemplate(fileName, selector, callback) {

  fetch(fileName)
    .then((res) => res.text())
    .then((text) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        el.innerHTML = text;
      });

      if (callback) {
        callback();
      }
    });
}
