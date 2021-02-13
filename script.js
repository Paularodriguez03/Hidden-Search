/*=============================== */
/*Variables */
const search = document.querySelector ('.search');
const btn = document.querySelector ('.btn');
const input = document.querySelector ('.input');


/*=========================================*/
/*Evento click */

btn.addEventListener('click', ()=>{
    search.classList.toggle('active');
    //ocultar y mostrar elementos de una página web
    input.focus()
    /*fija el foco del cursor en el elemento 
    indicado, si éste puede ser enfocado. */
});