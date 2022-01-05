"user strict";
/*Crear una página con un botón que transcurridos 10 segundos te pregunte: "¿te has dormido?". Si pulsas en el botón la cuenta volverá a cero y otra vez, si transcurren 10 segundos sin pulsar volverá a preguntar de nuevo "¿te has dormido?"
*/
const buttonAwake = document.querySelector('.awake');
const paragraph = document.querySelector('.sleep');

let counter = -1;

const awake = () => {

    if (counter === 4) {


        paragraph.innerHTML = "¿Te has dormido?"

    } else if (counter === 10) {
        counter = 0;
        paragraph.innerHTML = ""
    }



}

const time = () => {

    counter++
    console.log(counter);
    awake();
}

const intervalor = setInterval(time, 1000);
awake();

buttonAwake.addEventListener('click', () => {
    /*
    clearInterval(intervalor);
    intervalor = setInterval(time, 1000);
    */
    counter = -1;
    paragraph.innerHTML = "";
});



