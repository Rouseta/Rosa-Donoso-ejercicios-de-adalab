'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    }
];

//Pintar una tarea
const listContent = `<li>${tasks[0].name}</li><li>${tasks[1].name}</li><li>${tasks[2].name}</li>`;

const listElement = document.querySelector('.task__list');
listElement.innerHTML += listContent;

//Tachar tarea completada
if (tasks[0].completed === true) {
    listElement.classList.add('strikethrough');

}

/* Cuando añado más elementos a la lista se me tachan también la false y  el resto de elementos. Entiendo por qué, pero no sé cómo cambiarlo ¿Añado una clase a <li>, separo los objetos en una constante para strings y otra para boolianos, */

//Pintar el resto de tareas y que completed aparezcan tachadas




