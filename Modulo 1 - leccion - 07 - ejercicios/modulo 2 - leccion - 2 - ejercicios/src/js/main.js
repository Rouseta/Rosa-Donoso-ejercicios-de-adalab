'use strict';
const userAge = document.querySelector('.js-age');
const LifeHours = 8760 * parseInt(userAge.innerHTML);

document.querySelector('h1').innerHTML = (`He vivido ${LifeHours} horas`);


