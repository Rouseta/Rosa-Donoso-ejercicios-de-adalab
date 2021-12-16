'use strict';

function getUserData() {
    fetch("https://api.github.com/users/")
        .then(response => response.json())
        .then(data =>
            console.log(data.result))

}

const btn = document.querySelector(".button");
btn.addEventListener("click", getUserData);

