'use strict';


const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');
function clickItem(event) {
    const selectTeacher = event.currentTarget;
    selectTeacher.classList.toggle('teacher--selected');
    const spanText = selectTeacher.querySelector('.favorite');
    if (spanText.innerHTML === 'Añadir') {
        spanText.innerHTML = 'Quitar';
    } else if (spanText.innerHTML === 'Quitar') {
        spanText.innerHTML = 'Añadir';
    };
};
isra.addEventListener('click', clickItem);
tuerto.addEventListener('click', clickItem);
nasi.addEventListener('click', clickItem);