// este archivo js esta hecho para navegación general en las páginas de campaña
let arrowIcon;
let playersIcon;
let throwsIcon;

let playerSideBar;
let throwLog;
let dropDown_menu;

let overlay;

let hamburger;

let last_dropdown = null;

export function initCampaignMenu() {
  arrowIcon = document.getElementById("arrow-icon");
  playersIcon = document.getElementById("players-icon");
  throwsIcon = document.getElementById("throws-icon");

  playerSideBar = document.getElementById('playersSideBar');
  throwLog = document.getElementById('logTiradas');
  dropDown_menu = document.getElementById("dropDown_mobile_menu");

  overlay = document.getElementById('overlay-campaign');
  hamburger = document.getElementById('hamburguer_menu');
  
  hamburger.src = "../../Assets/close-img.svg";

  hamburger.onclick = function() {
    window.location.href = "../allSessions/allSessions.html";
  };

}

function showMobilePlayerSideBar() {
  
  if (playerSideBar.classList.contains('show')) {

    playerSideBar.classList.remove('show');
    overlay.classList.remove('show');

  } else {

    if (last_dropdown != null) {
      last_dropdown.classList.remove('show');
    }

    playerSideBar.classList.add('show');
    overlay.classList.add('show');
    last_dropdown = playerSideBar;

  }
}

function showMobileDropDown() {

  if (dropDown_menu.classList.contains('show')) {

    dropDown_menu.classList.remove('show');
    overlay.classList.remove('show');

  } else {

    if (last_dropdown != null) {
      last_dropdown.classList.remove('show');
    }

    dropDown_menu.classList.add('show');
    overlay.classList.add('show');
    last_dropdown = dropDown_menu;
  }

}

function showMobileThrowLog() {

  if (throwLog.classList.contains('show')) {

    throwLog.classList.remove('show');
    overlay.classList.remove('show');

  } else {

    if (last_dropdown != null) {
      last_dropdown.classList.remove('show');
    }

    throwLog.classList.add('show');
    overlay.classList.add('show');
    last_dropdown = throwLog;

  }
}

function closeOtherDropDowns() {
  playerSideBar.classList.remove('show');
  throwLog.classList.remove('show');
  playerSideBar.classList.remove('show');
  overlay.classList.remove('show');
}


window.showMobilePlayerSideBar = showMobilePlayerSideBar;
window.showMobileDropDown = showMobileDropDown;
window.showMobileThrowLog = showMobileThrowLog;
window.closeOtherDropDowns = closeOtherDropDowns;

