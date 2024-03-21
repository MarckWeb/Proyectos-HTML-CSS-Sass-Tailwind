const btnMenu = document.getElementById('btn-menu');
const siteNav = document.getElementById('site-nav');

siteNav.classList.add('hide');

btnMenu.addEventListener('click', function () {
  siteNav.classList.toggle('hide');
});