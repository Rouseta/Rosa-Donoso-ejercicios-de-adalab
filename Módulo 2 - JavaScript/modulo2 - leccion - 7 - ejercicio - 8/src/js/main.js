'use strict';
let botones = document.querySelectorAll('button');
const body = document.querySelector('.js-body');

function showAlert() {
    body.classList.toggle('red');
}
for (let boton of botones) {

    boton.addEventListener('click', showAlert);
}
