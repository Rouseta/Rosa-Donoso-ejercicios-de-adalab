"user strict";
//La media de la carrera
//Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?//
const times = [56, 9, 45, 28, 35];



//const result = scores.reduce((acc, number) => acc + number, 0);

//console.log(result);
const average = times.reduce((acc, number) => acc + number / times.length, 0);
console.log(average);