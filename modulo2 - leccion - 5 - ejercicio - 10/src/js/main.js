'use strict';


const button = document.querySelector('.js-btn');
const body = document.querySelector('.body');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
function filmsList() {
    body.innerHTML = `<ul> <li class="filmInception">${inception}</li> <li class="filmButterfly">${theButterFlyEffect}</li><li class="filmSunshine">${eternalSunshineOfTheSM}</li> <li class="filmVelvet">${blueVelvet}</li> <li class="filmSplit">${split}</li> </ul>`
    const inceptionEl = document.querySelector(".filmInception");
    const butterflyEl = document.querySelector(".filmButterfly");
    const sunshineEl = document.querySelector(".filmSunshine");
    const velvetEl = document.querySelector(".filmVelvet");
    const splitEl = document.querySelector(".filmSplit");
    // Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.
    function filmName(event) {
        console.log(event.currentTarget.innerHTML);
    }
    inceptionEl.addEventListener('click', filmName);
    butterflyEl.addEventListener('click', filmName);
    sunshineEl.addEventListener('click', filmName);
    velvetEl.addEventListener('click', filmName);
    splitEl.addEventListener('click', filmName);
}
button.addEventListener('click', filmsList);