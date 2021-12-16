let data = JSON.parse(localStorage.getItem("data"));

let Pulse = document.getElementById("Graphic_p");
let Temp = document.getElementById("Graphic_t");
let Press = document.getElementById("Graphic_pr");
let Sat = document.getElementById("Graphic_s");

if (data.pulse == "false") {
  Pulse.style.display = "none";
}
if (data.temp == "false") {
  Temp.style.display = "none";
}
if (data.press == "false") {
  Press.style.display = "none";
}
if (data.sat == "false") {
  Sat.style.display = "none";
}
