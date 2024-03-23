const botonMenu = document.getElementById('button')
const html = document.querySelector('html')

botonMenu.addEventListener('click', function(){
    html.classList.toggle('open')
})