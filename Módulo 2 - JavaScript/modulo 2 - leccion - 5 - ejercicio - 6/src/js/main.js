'use strict';

const input = document.querySelector('.input');
const paragraph = document.querySelector('.text');



function getInput(event) {
    paragraph.innerHTML = event.currentTarget.value;


}
input.addEventListener('keydown', getInput);


