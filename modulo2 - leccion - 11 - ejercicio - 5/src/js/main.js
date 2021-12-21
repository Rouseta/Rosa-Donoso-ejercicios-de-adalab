'use strict';

/*Mi tema preferido
Vamos a preparar una página sencilla, con un título, un par de párrafos y un selector de tema. Para hacer el selector:
Añadiremos dos radio buttons para poder elegir entre claro y oscuro.
Prepararemos dos clases de css: una pondrá el fondo claro y el texto oscuro, y la otra pondrá el fondo oscuro y el texto claro.
Aplicaremos a nuestra página una clase u otra según la selección de la usuaria, apoyándonos en el value del input seleccionado.
Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en localStorage.
Al cargar la página buscaremos en localStorage el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción.*/
console.log("ready");
const selection = document.querySelectorAll('.js-radio');
const content = document.querySelectorAll('.text');

//Función para añadir o quitar clases

function handleColor(event) {
    const selectorValue = event.currentTarget.value;

    for (const eachContent of content) {

        if (selectorValue === "1") {

            eachContent.classList.add("light");
            eachContent.classList.remove("dark");


        } else if (selectorValue === "2") {

            eachContent.classList.add("dark");
            eachContent.classList.remove("light");


        }
        console.log(event.currentTarget.value);
    }
}

//Añado listener para cada uno de los botones

for (const eachSelection of selection) {
    eachSelection.addEventListener('click', handleColor);
}

//si le quito el all a User selection funciona solo un párrafo y sólo el tema claro





