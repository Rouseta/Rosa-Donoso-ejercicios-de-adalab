'use strict';


let media = 0;

const numbers = [2, 3, 5, 7, 11,];
const Zahlen = [10, 10, 10, 10, 10];
const numeros = [1, 1, 1, 1, 1]
numbers[5] = 13;
numbers[6] = 17;
numbers[7] = 19;
/*for (let i = 0; i < numbers.length; i++) {
    media += numbers[i] / 6
    function avrg(numbers) {
        return numbers[i] / numbers.length

    }

}
//console.log('La media es ' + media);
*/
//Crear función
function avrg(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        media += numbers[i] / numbers.length
    }

    return media;
}
console.log(avrg(numeros)); //no sé cómo cojones, pero me funciona 
