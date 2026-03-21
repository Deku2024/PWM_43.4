// este archivo js esta hecho para animaciones pequeñas y/o relacionadas con la media query

let sideBar;
let hamburguer_menu;
let close_icon;

export function initMenu() {
  sideBar = document.querySelector('nav');
  hamburguer_menu = document.querySelector('#hamburguer_menu');
  close_icon = document.querySelector('#close_icon');
}

function changeIcon() {
    if (!sideBar.classList.contains('show')) {
      showMenu();
    } else {
      closeMenu()
    }
}

function showMenu() {
  sideBar.classList.add('show');
  hamburguer_menu.classList.remove('show-icon');
  close_icon.classList.add('show-icon');
}

function closeMenu() {
  sideBar.classList.remove('show');
  close_icon.classList.remove('show-icon');
  hamburguer_menu.classList.add('show-icon');
}


window.changeIcon = changeIcon;