"user strict";
//¡Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?//

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const saludo = names.map((nombre) => `Bienvenida, ${nombre}`);
console.log(saludo);
//map hace las veces de bucle, recorre el array uno a uno y el parámetro es (me parece, el índex)

