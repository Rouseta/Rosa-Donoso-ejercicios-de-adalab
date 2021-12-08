'use strict';

const divElement = document.querySelector('.container');



window.onscroll = function () {
    if (window.scrollY > 250) {
        divElement.classList.add('peace');
        divElement.classList.remove('container');

    } else {
        divElement.classList.remove('peace');
        divElement.classList.add('alert');
    }
}





