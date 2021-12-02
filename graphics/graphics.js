let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let x = 0;
let timer;

draw();

function draw(){
    y = Math.sin(x);
    if (x>=1000){
        x=0;
    }
    else {
        x=x+0.1;
    }
    ctx.fillRect(5*x,100+20*y, 2,2);
    timer = setTimeout(draw, 10);
}
