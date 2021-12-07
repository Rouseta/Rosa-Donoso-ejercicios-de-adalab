'use strict';

/*const button = document.querySelector('.ole');
const paragraph = document.querySelector('.hola');
function changeParagraph() {
    return (paragraph.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!");
}
button.addEventListener('click', changeParagraph);*/

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-boton');


function printHi() {

    return console.log(`Hola ${input.value}`);
}
button.addEventListener('click', printHi);