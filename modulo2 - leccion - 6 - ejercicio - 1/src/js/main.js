'use strict';
const paragraph = document.querySelector('.testing');
const paragraph2 = document.querySelector('.testing2');
const adalaber1 = {}
adalaber1.name = 'Susana';
adalaber1.age = '34';
adalaber1.profession = 'periodista';
const frase = 'Estoy corriendo';


const adalaber2 = {}
adalaber2.name = 'Rocío';
adalaber2.age = '25';
adalaber2.profession = 'actriz';

paragraph.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;
paragraph2.innerHTML = `Mi nombre es ${adalaber2.name} tengo ${adalaber2.age} años y soy ${adalaber2.profession}`;

