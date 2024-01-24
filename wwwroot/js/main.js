"use strict";

const menuButtonEl = document.getElementById('menu-button');
const asideEl = document.getElementById('aside');

let navOpen = false;

menuButtonEl.addEventListener("click", manageNav, false);

function manageNav() {
    if (navOpen == false) {
        asideEl.style.transform = 'translateX(0)'
        menuButtonEl.classList.add('open'); 
        navOpen = true;
    } else {
        asideEl.style.transform = 'translateX(300px)'
        menuButtonEl.classList.remove('open'); 
        navOpen = false;
    }
}