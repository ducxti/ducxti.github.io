let register = document.getElementById('window');
let button = document.querySelector('.regButton');
let divClose = document.querySelector('.close');

let darkLayer = document.createElement('div');
darkLayer.id = 'shadow';

function show() {
    document.body.append(darkLayer);
    register.style.display = 'block';
    register.style.opacity = 1;
}

function close() {
    darkLayer.parentNode.removeChild(darkLayer);
    register.style.display = 'none';
    register.style.opacity = 0;
}
button.onclick = show;
divClose.onclick = close;
darkLayer.onclick = close;

window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
  }