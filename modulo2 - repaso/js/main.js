'use strict'
//Variables globales
const button = document.querySelector('.button');
const page = document.querySelector('.js_page');
const selectFace = document.querySelector('.js_select_face');
const faceTitle = document.querySelector('.js_face_title');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


//Recoger input de usuaria

function renderFace(face) {
    faceTitle.innerHTML = face;
}

function changeFace() {

    const userSelection = selectFace.value;
    if (userSelection === 'happy') {
        renderFace(':)')
    } else if (userSelection === 'unhappy') {
        renderFace(':(');
    }

}

function changeColor() {
    const randomNumber = getRandomNumber(100);

    // Comprobar si es par
    if (randomNumber % 2 === 0) {
        // Si es par, poner fondo amarillo

        page.classList.remove('chileanOrange');
        page.classList.add('yellow');

    } else {
        // Si es impar, poner el fondo naranja

        page.classList.remove('yellow');
        page.classList.add('chileanOrange');
    }
}










function handleClickUpdate(event) {
    event.preventDefault();
    changeFace();
    changeColor();
}





//Listener

button.addEventListener('click', handleClickUpdate);