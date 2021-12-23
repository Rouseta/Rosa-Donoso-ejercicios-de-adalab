"user strict";
let counter = -1;

const incrementAndShowCounter = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 1000);
