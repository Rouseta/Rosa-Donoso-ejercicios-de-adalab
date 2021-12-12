'use strict';
//const favourite[];
const button = document.querySelector('.button');
const Peli = document.querySelector('.peli');
const Peli2 = document.querySelector('.peli2');

function getDataUser() {

    const inputPeli = Peli.value;
    return inputPeli;
    console.log(inputPeli);

}


function getDataUser2() {
    const inputPeli2 = Peli2.value;
    return inputPeli2
}

function getFilmsTogether(peli, peli2) {
    const pelisJuntas = `${inputPeli} ${inputPeli2}`
    return pelisJuntas;




}
function escribirHTML(pelis completas) {
    result.innerHTML = pelisJuntas;
}
button.addEventListener("click", getFilmsTogether);



//function keepArray()








//button.addEventListener('click', keepArray);