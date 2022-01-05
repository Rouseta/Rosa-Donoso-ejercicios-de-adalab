'use strict';

const newItem = document.createElement('p'); //el contenedor


// 
const newContent = document.createTextNode('(No)He aprendido bien cómo funcionan los bucles');//el contenido

// Y se lo añadimos a nuestro <p>
newItem.appendChild(newContent); //contendor + contenido

const items = document.querySelector('.body');//donde vamos a insertar contendor + contenido
items.appendChild(newItem); // ejecutamos la inserción de  contenedor + contenido

const contenido = newItem.appendChild(newContent);

for (let i = 0; i < 100; i++) {
    contenido + i;//? No sé cómo pintarlo





}
