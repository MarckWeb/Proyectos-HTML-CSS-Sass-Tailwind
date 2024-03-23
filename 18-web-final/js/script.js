const botonMenu1 = document.querySelector('#site-header .btn-menu')
const botonMenu2 = document.querySelector('#site-nav figure')
const siteHeader = document.querySelector('#site-header .fondo')

const html = document.querySelector('html')



botonMenu1.addEventListener('click', function(){
    html.classList.add('open')
})

botonMenu2.addEventListener('click', function(){
    html.classList.remove('open')
})

siteHeader.addEventListener('click', function(){
    html.classList.remove('open')
})

/*const btn1 = document.getElementById('btn-menu')
const btn2 = document.getElementById('site-button')
const html = document.querySelector('html')
const intro = document.getElementById('img-intro')


btn1.addEventListener('click', function(){
    html.classList.toggle('open')
})

btn2.addEventListener('click', function(){
    html.classList.remove('open')
})

intro.addEventListener('click', function(){
    html.classList.remove('open')
})*/
