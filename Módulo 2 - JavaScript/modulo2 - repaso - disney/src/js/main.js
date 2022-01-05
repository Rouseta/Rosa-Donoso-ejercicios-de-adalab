'use strict';
/*FLUJO: Al cargar la página debemos pintar un listado de princesas con la siguiente información:

Nombre
Foto
Comentario de la princesa
Al hacer click sobre una princesa podemos cambiarle el fondo a color azul claro para marcarla como nuestra amiga.

Extraeremos los datos de la siguiente URL: 'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json' Ejemplo de objeto que llega del servidor:
*/
//Variables globales
const princessList = document.querySelector('.js_princessList');



fetch(`https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json`)
    .then((response) => response.json())
    .then((data) => {
        const princess = data;

        princessList.innerHTML = '';
        for (let i = 0; i < princess.length; i++) {
            princessList.innerHTML += `<article class="container">
            <img class="images" src = ${princess[i].picture.replace('ejercicio-fin-de-semana-promo-j', 'ejercicios-extra/js-fetch-arrays-princesas-disney')}> 
            <div class="js-div"><span class="comments">Nombre:</span>${princess[i].name}<p><span class="comments">
            Comentarios:</span>${princess[i].comment}</p></div> <p><span class="comments">
             `
        }
        const princessArticles = document.querySelectorAll('.container');
        for (const eachArticle of princessArticles) {

            eachArticle.addEventListener('click', getFavouritePrincess);
        }

        ;
    })


function getFavouritePrincess(event) {
    const favouritePrincess = event.currentTarget;
    favouritePrincess.classList.toggle('friend')

}

