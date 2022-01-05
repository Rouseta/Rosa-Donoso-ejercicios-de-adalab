'use strict';

/*Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:
María, 29 años, diseñadora
Lucía, 31 años, ingeniera química
Susana, 34 años, periodista
Rocío, 25 años, actriz
Inmaculada, 21 años, diseñadora
En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.*/
const contacts = [

    {
        adalaberName: 'María',
        adalaberAge: 29,
        adalaberJob: 'Diseñadora'
    },

    {
        adalaberName: 'Lucía',
        adalaberAge: 31,
        adalaberJob: 'Ingeniera química',
    },

    {
        adalaberName: 'Susana',
        adalaberAge: 34,
        adalaberJob: 'Periodista',
    },

    {
        adalaberName: 'Inmaculada',
        adalaberAge: 21,
        adalaberJob: 'Diseñadora',
    }

];
//Una función countAdalabers que devuelve el número de adalabers en el listado.
function countAdalabers(contacts) {
    console.log(contacts.length);
    return contacts.length;
}
//Una función averageAge que devuelve la media de edad de listado.

function getAverageAge(contacts) {
    let i = 0;
    for (let i = 0; i < contacts.length; i++) {
        suma += contacts[i].edad;
        return suma;
    }
    let avrg = suma / contacts.lenght
    return avrg;


}
console.log(getAverageAge(contacts.adalaberAge));


//Una función theYoungest que devuelve el nombre de la adalaber más joven.

/*const edades = {
    name: '´La más joven',
    ages: [29, 31, 34, 21],
    adalaberNames: ['María', 'Lucía', 'Susana', 'Inmaculada']
};
function the Youngest(){

}*/
