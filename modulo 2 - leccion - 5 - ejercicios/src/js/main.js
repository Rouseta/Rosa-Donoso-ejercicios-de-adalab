'use strict';

/*const button = document.querySelector('.ole');
const paragraph = document.querySelector('.hola');
function changeParagraph() {
    return (paragraph.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!");
}
button.addEventListener('click', changeParagraph);*/
const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');
input.valueHTML = '.js-input';
function printHi(name) {
    console.log("Hola ${name}");
}
button.addEventListener('click', printHi);