"user strict";

/*valorAnterior
valorActual
indiceActual
array de la que llamas a reduce*/


const runners = [
    { name: "Gregory Goyle", time: 56 },
    { name: "Nymphadora Tonks", time: 9 },
    { name: "Luna Lovegood", time: 45 },
    { name: "Cedric Diggory", time: 28 },
    { name: "Cho Chang", time: 35 },
];

const winner = runners.reduce((acc, character) => {


//Ejercico resuelto, pero quiero revisarlo bien en clase

//const theWinner = runners.reduce((winner, runner) => {
  //  return winner.time < runner.time ? winner : runner;
//});