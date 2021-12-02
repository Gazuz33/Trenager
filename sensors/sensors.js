const  zone1_press = document.querySelector('.zone1_press');
const  zone1_temp = document.querySelector('.zone1_temp');
const  zone1_pulse = document.querySelector('.zone1_pulse');
const  zone1_oxy = document.querySelector('.zone1_oxy');
const  zone2_press = document.querySelector('.zone2_press');
const  zone2_temp = document.querySelector('.zone2_temp');
const  zone2_pulse = document.querySelector('.zone2_pulse');
const  zone2_oxy = document.querySelector('.zone2_oxy');

const  press = document.querySelector('#press');
const  temp = document.querySelector('#temp');
const  pulse = document.querySelector('#pulse');
const  oxy = document.querySelector('#oxy');

zone1_press.ondragover = allowDrop;
zone2_press.ondragover = allowDrop;
zone1_temp.ondragover = allowDrop;
zone2_temp.ondragover = allowDrop;
zone1_pulse.ondragover = allowDrop;
zone2_pulse.ondragover = allowDrop;
zone1_oxy.ondragover = allowDrop;
zone2_oxy.ondragover = allowDrop;

function allowDrop (event) {
    event.preventDefault();
}
press.ondragstart = drag;
temp.ondragstart = drag;
pulse.ondragstart = drag;
oxy.ondragstart = drag;

function drag (event) {
    event.dataTransfer.setData('id', event.target.id);
}

zone1_press.ondrop = drop;
zone1_temp.ondrop = drop;
zone1_pulse.ondrop = drop;
zone1_oxy.ondrop = drop;
zone2_press.ondrop = drop;
zone2_temp.ondrop = drop;
zone2_pulse.ondrop = drop;
zone2_oxy.ondrop = drop;

function drop (event) {
    let itemId = event.dataTransfer.getData('id');
    event.target.append(document.getElementById(itemId));
}










