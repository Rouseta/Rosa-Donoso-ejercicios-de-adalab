"user strict";


let counter = 0;


const secondsAgo = () => {

    if (counter < 30) {
        counter++;
        const time = document.querySelector('.time');
        time.innerHTML = `Escrito hace ya ` + counter + ` segundos`;
    };
};
setInterval(secondsAgo);
