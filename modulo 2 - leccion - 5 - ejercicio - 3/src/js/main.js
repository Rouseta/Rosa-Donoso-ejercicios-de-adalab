'use strict';

//Ejercicio 3

const container = document.querySelector('.wrap');
const newLorem = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat repudiandae enim ducimus eaque vero? Doloribus placeat ab corrupti facilis. Exercitationem pariatur ab numquam qui eligendi consectetur omnis unde eum praesentium.</p>`
const lorem = `<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae totam
    fugiat repellat doloribus? Possimus autem debitis dicta eveniet nam quis
    unde sint nobis reiciendis provident. Nihil esse iste in veniam.</p>`
container.innerHTML = lorem;


function addLorem() {
    return container.innerHTML = lorem + newLorem;

}
container.addEventListener('mouseover', addLorem);


