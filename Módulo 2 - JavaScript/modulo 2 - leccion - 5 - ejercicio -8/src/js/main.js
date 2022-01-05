'use strict';

const button = document.querySelector(".js-btn");
const button2 = document.querySelector(".js-btn2");
function pressBtn(event) {
    button.classList.toggle('styleBtn');
    // const clickedButton = event.currentTarget;
    if (button === event.currentTarget) {
        button.classList.add('red');
        button2.classList.remove('red');
    } else if (button2 === event.currentTarget) {
        button2.classList.add('red');
        button.classList.remove('red');
    }
};
button.addEventListener('click', pressBtn);
button2.addEventListener('click', pressBtn);