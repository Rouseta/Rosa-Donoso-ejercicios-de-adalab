'use strict';

//Vamos a crear un div en HTML que contenga tres párrafos con un texto aleatorio. Con la ayuda de JavaScript vamos a obtener su tamaño usando la propiedad offsetHeight.//

const height = document.querySelector('.text');//si pongo selector all me da undefined

const getHeight = height.offsetHeight; //entiendo que no todos los párrafo miden lo mismo...si sí, entonces multiplico *3
console.log(getHeight);

const newHeight = getHeight / 3;
console.log(newHeight);



