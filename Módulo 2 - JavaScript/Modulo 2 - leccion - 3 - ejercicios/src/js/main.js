'use strict';


/*// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
const userImage = document.querySelector('.js-user__avatar');
userImage.src = `${userAvatar || DEFAULT_AVATAR}`;


userImage.src = (userAvatar === "") ? DEFAULT_AVATAR : userAvatar;*/


/*function getIva(price) {
    const iva = price * 0.21;
    const total = price + iva;
    const texto = `el precio es ${price} el iva es ${iva} el total es ${total} `;
    return texto;
}
const paragraph = document.querySelector(".js-text");
paragraph.innerHTML = getIva(100);
//Ejercicio 3
function media(a, b, c, d) {
    const result = (a + b + c + d) / 4;
    const texto = `La media es ${result}`;
    return texto;
}
console.log(media(4, 7, 3, 10));*/
function getEl(selector) {
    const element = document.querySelector(selector);
    if (element === null) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }
    return element;
}

const textEl = getEl('tent');
if (textEl) {
    console.log(textEl.innerHTML);
}




