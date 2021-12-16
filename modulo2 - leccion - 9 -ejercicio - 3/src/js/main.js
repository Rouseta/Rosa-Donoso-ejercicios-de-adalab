'use strict';
/*Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.*/

const lostNumbers = [4, 8, 15, 16, 23, 42];


//let evenNumbers = []; //no sé si dentro o fuera de la función. No me funciona de ninguna manera
//let oddNumbers = [];//no sé si dentro o fuera de la función. No me funciona de ninguna manera

//Si lo pongo fuera me da:[], si dentro is not defined...


//Creo un  bucle for y un condicional dentro de la función 
function bestLostNumber() {

    let evenNumbers = [];//no sé si dentro o fuera




    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 === 0) {
            evenNumbers.push(lostNumbers[i]);
        }
    }
    console.log(evenNumbers);



    //Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.




    let oddNumbers = [];



    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 3 === 0) {
            oddNumbers.push(lostNumbers[i]);
        }
    }

    console.log(oddNumbers);
    //Concatenar resultados

    const result = evenNumbers.concat(oddNumbers);
    console.log(result);
    console.log('hola');
}

bestLostNumber();

//No me ha salido, no sé por qué





