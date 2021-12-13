'use strict';
let botones = document.querySelectorAll(button);
const body = document.querySelector('.js-body');

function showAlert() {
    body.classList.toggle('red');
}
for (let boton of botones) {
    // listener sobre el elemento, con tipo de evento y handler
    botones.addEventListener('click', showAlert);
}
