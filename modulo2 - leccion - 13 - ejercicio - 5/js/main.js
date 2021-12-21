"user strict";
//De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?//
const pins = [2389, 2384, 2837, 5232, 8998];
const evenPins = [];

const justEven = pins.filter((pin) => {
    if (pin % 2 === 0) { evenPins.push(pin) }
})


console.log(evenPins);