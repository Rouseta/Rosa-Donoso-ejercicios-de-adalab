'use strict';

const button = document.querySelector(".js-btn");
function pressBtn() {
    button.classList.toggle('styleBtn');
};
button.addEventListener('click', pressBtn);
