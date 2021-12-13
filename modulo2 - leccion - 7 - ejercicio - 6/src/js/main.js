'use strict';
//const favourite[];
const button = document.querySelector('.button');
const Peli = document.querySelector('.peli');
const Peli2 = document.querySelector('.peli2');

function getDataUser() {

    unction handleFillInput(){
        const arrPelis = [inputPeli.value, inputPeli2.value];
        for (const film of arrPelis) {
            console.log(`A mí también me encantó "${film}"`);
        }
    };
    button.addEventListener('click', handleFillInput);
}














//button.addEventListener('click', keepArray);