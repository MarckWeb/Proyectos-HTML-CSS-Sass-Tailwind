'use strict';

const button = document.getElementById('button');
const nav = document.getElementById('navigation__navbar');
const links = [...nav.querySelectorAll('a')];
let currentURL = window.location.href;

button.addEventListener('click', () => {
    nav.classList.toggle('navigation__navbar--active');
    button.classList.toggle('button--active');
});


links.forEach(item => {
    let linkURL = item.href;
    if (currentURL === linkURL) {
        item.classList.add('navigation__navbar-link--active');
    } else {
        item.classList.remove('navigation__navbar-link--active');
    }
});
