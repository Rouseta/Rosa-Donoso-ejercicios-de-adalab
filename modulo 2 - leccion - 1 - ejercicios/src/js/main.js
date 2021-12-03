'use strict'
/*function med(a, b, c, d) {
    const result = (a + b + c + d) / 4;
    return result;
}
console.log(med(8, 4, 6, 7));*/

/*function getPrice(a) {

    return "Precio sin IVA:" + a + "Precio con IVA" + (a * 21 / 100) + "y Total:" + a + (a * 21 / 100);
}
console.log(getPrice(10));*/
/*function getPair(a) {
    if (a % 2 === 0) {
        return "true";
    }
    else {
        return "false"
    }
}
console.log(getPair(57));*/


function getEl(a) {

    return document.querySelector(a);


}
const TitleElement = getEl(".content");
console.log(TitleElement);