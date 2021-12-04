let canvas1 = document.getElementById('c1');
let canvas2 = document.getElementById('c2');
let canvas3 = document.getElementById('c3');
let canvas4 = document.getElementById('c4');
let cont1 = canvas1.getContext('2d');
let cont2 = canvas2.getContext('2d');
let cont3 = canvas3.getContext('2d');
let cont4 = canvas4.getContext('2d');

let x = 0, y = 0;
let timer;

draw();

function draw() {
    y = Math.sin(x);
    if (x>=1000){
        x=0;
    }
    else {
        x=x+0.1;
    }
    cont1.fillRect(5*x,100+20*y, 2,2);
    cont2.fillRect(10*x,110-19*y, 2,1.3);
    cont3.fillRect(4*x,80-20*y, 2,1.5);
    cont4.fillRect(3*x,100-20*y, 2,1.9);
    timer = setTimeout(draw, 10);
}

