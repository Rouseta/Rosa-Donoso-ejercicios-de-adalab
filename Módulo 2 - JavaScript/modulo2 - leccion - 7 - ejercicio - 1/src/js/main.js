'use strict';

const movies = ['Dentro del laberinto', 'El padrino', 'Zatoichi'];
//movies.push('Braveheart', 'El hombre elefante');
movies[3] = 'La ciudad no es para mí';
movies[2] = 'Yojimbo';
movies[1] = 'Cazafantasmas'
console.log(movies);

/*const pelis = []
pelis[0] = 'El cuchitril de Joe';
pelis[1] = 'Los colegas del barrio';
pelis[2] = 'Los caballeros de la mesa cuadrada';
console.log(pelis);*/

function workWithMovies() {
    return movies.length;

}


const pelis = workWithMovies;