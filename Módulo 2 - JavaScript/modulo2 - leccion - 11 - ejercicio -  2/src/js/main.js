'use strict';
/*Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.*/

const searchButton = document.querySelector('.js-output');
const dataInput = document.querySelector('.js-input');
let listaPersons = document.querySelector('.js-characters');

function handlesearchButton(event) {
    event.preventDefault();



    fetch(`https://swapi.py4e.com/api/people/?search=${dataInput.value}`)

        .then((response) => response.json())
        .then((data) => {
            const characters = data.results;
            listaPersons.innerHTML = '';
            for (let i = 0; i < characters.length; i++) {
                listaPersons.innerHTML += `<li>Nombre: ${characters[i].name} Género: ${characters[i].gender} </li > `;
            }
        });
}


searchButton.addEventListener('click', handlesearchButton);
