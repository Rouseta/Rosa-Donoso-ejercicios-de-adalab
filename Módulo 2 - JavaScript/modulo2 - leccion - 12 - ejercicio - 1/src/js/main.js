'use strict';


const numbers = [1, 2, 3];
const newItem = document.createElement('li');
const newContent = document.createTextNode(numbers);
newItem.appendChild(newContent);//le meto el contenido a la lisra
const items = document.querySelector('.items'); //Creo constante para pasar elementos a HTML
items.appendChild(newItem) //añado contenido a constante y a HTML
//items.remove(); para borrar todos los items
