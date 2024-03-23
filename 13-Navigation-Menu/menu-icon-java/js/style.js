// el all en query sellecciona todos los elementos con la misma clase
let listElements = document.querySelectorAll('.list__button--click');   

// recorrera la lista del var listelement
listElements.forEach(listElements =>{
    listElements.addEventListener('click', ()=>{
        
        listElements.classList.toggle('arrow');

        let height = 0;
        // tomara al hermano adiacente que es la ul despues de la div de listelement el nextelementsibling
        let menu = listElements.nextElementSibling
        // propiedad clientheight hace que muetsre cuanto vale height

        // scroolheight indica el alto de la lista
        
        if(menu.clientHeight== '0'){
            height=menu.scrollHeight;
        }

        menu.style.height = height + 'px';

        
    })

})