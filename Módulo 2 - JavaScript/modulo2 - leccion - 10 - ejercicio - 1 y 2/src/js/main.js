'use strict';
function getDogImage() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')

        .then(response => response.json())
        .then(data => {
            const img = document.querySelector('img');
            img.src = data.message;
            img.alt = 'Un perro';
        });
}
function getOtherDogImage() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')

        .then(response => response.json())
        .then(data => {
            const img = document.querySelector('img');
            img.src += data.message;
            img.alt = 'Un perro';
        });
}

const btn = document.querySelector(".js-dog");
const btn2 = document.querySelector(".js-dog-other");
btn.addEventListener("click", getDogImage);
btn2.addEventListener("click", getOtherDogImage);