'use strict';

const Body = document.getElementById('body');

let evento = "";

function cambiar(evento) {
    if (evento.keyCode === 82) {
        Body.classList.add('red');
    } else if (evento.keyCode === 77)
        Body.classList.add('violet');

}


Body.addEventListener('keydown', cambiar);