var btn1 = document.createElement("button");
btn1.innerText = "Start";
var btn2 = document.createElement("button");
btn2.innerText = "Stop";
var btn3 = document.createElement("button");
btn3.innerText = "Reset";

var t = null;
var display = document.createElement("p");
display.innerText = "00:00:00";

document.getElementById("main").append(btn1, btn2, btn3, display);