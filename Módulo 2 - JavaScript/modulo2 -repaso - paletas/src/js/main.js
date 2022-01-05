'use strict';

/*Esta vez tenemos una URL https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json que nos devuelve datos de una paleta y tenemos que pintarla como en el ejemplo:

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
    });

*/
const mainElement = document.querySelector('.page');
let paletteData = [];
//let colors = ['FFBF2E', 'E85E0C', 'FF0000', 'C70CE8', '330DFF',]

fetch("https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json")
    .then(response => response.json())
    .then(data => {
        const paletteData = data




        mainElement.innerHTML = '';
        for (let i = 0; i < paletteData.length; i++) {

            const name = paletteData[i].palettes.name;
            const color = paletteData[i].palettes.color;


        }
        console.log(color)













