'use strict';
/*const adalaber = {};
adalaber.name = 'María';
adalaber.sayHello = function () {
    return 'Hola, me llamo ' + this.name;
};

// Muestra en la consola 'Hola, me llamo María'
console.log(adalaber.sayHello());*/

const adalaber = {}
adalaber.name = ' Susana ';
adalaber.age = ' 34 ';
adalaber.profession = ' periodista';
adalaber.showBio = function () {
    return `Hola, me llamo` + this.name + `tengo` + this.age + `y soy` + this.profession;


};
console.log(adalaber.showBio());