'use strict';


const selection = document.querySelector('#city');
const picture = document.querySelector('#img');

console.log(selection);
function addPicture() {

    const selectionValue = selection.value;




    if (selectionValue === 'NewYork') {

        picture.setAttribute("src", "https://www.gettyimages.es/fotos/new-york-city");


    } else if (selectionValue === 'Madrid') {
        picture.setAttribute("src", "https://media.gettyimages.com/photos/aerial-view-of-madrid-spain-picture-id673877045?s=2048x2048");

    } else if (selectionValue === 'Paris') {
        picture.setAttribute("src", 'https://www.gettyimages.es/detail/foto/aerial-view-of-paris-with-eiffel-tower-during-imagen-libre-de-derechos/847408280');

    }
}




selection.addEventListener('change', addPicture);








