'use strict';

const inputUser = document.querySelector('.js-input');
const dataUser = document.querySelector('.js-userName');

function justName() {

    dataUser.innerHTML = inputUser.value; //Cómo convertir esto en una nueva constante

}
function keepData() {

    localStorage.setItem('name', inputUser.value);
}
function getDataBack() {
    inputUser.value = localStorage.getItem('name'); //Se sobreescriben con cada nuevo input

}
function allTogether() {
    justName();
    keepData();
    getDataBack();
}


inputUser.addEventListener('keyup', allTogether);

