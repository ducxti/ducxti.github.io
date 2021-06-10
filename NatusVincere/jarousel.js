let images = document.querySelectorAll('.slider-item');
let sliderLine = document.querySelector('.slider-line');
let slider = document.querySelector('.slider');

let nextBtn = document.querySelector('.slider-next');
let prevBtn = document.querySelector('.slider-prev');

let count = 0;
let width;

function carusel() {
    width = slider.offsetWidth;
    sliderLine.style.width = width * images.length + 'px';

    for (let i = 0; i < images.length; i++) {
        images[i].style.width = width + 'px';
        images[i].style.height = 'auto';

    }
    move();
}

window.addEventListener('resize', carusel)
carusel();

function move() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px';
}


function moveForvard() {
    count++;
    if(count >= images.length) {
        count = 0;
    }
    move();
}

function moveBack() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    move();
}

nextBtn.onclick = moveForvard;
prevBtn.onclick = moveBack;

setInterval(moveForvard, 10000);