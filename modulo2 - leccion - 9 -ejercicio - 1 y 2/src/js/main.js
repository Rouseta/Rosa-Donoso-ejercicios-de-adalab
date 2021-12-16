'use strict';
let acc = 0;
let numbers = [];
const numbersLength = 100;


function get100Numbers() {




    for (let i = 0; i < numbersLength; i++) {
        acc++
        numbers.push(acc);


    }
    return numbers;

};
console.log((get100Numbers));

function getReversed100Numbers() {

    const revers = get100Numbers();
    return revers.reverse();


}
console.log((getReversed100Numbers));


