'use strict';

/* Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:


Número máximo de peras
Número mínimo de peras
Número actual de peras
Número inicial de peras
Y varios métodos que hagan:
Añadir al cesto una pera
Sacar del cesto una pera
Restablecer el número de peras al valor inicial.
Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.*/
/*cestaPeras = {
    max: 20,
    min: 2,
    current: 5,
    start: 0,

};*/
// o es mejor
cestaPeras = {}
cestaPeras.max = 20;
cestaPeras.min = 2;
cestaPeras.current = 5;
cestaPeras.start = 0;

//Métodos
cestaPeras.addOne = function () {
    if (this.current < this.max) {
        this.current++;
        return console.log(`Sumo una pera y tengo ahora: ${cestaPeras.current}');
    } else {
        this.current;
        return  console.log (`No metas más peras que ya tienes ${ cestaPeras.max } y te vas a cargar el cesto);
    }
}



