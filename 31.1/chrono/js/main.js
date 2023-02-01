var btn1 = document.createElement("button");
btn1.innerText = "Start";
var btn2 = document.createElement("button");
btn2.innerText = "Stop";
var btn3 = document.createElement("button");
btn3.innerText = "Reset";

var t = null;
var display = document.createElement("p");
display.innerText = "00:00:00";

document.getElementById("main").append(display, btn1, btn2, btn3);
// document.getElementById("buttons").append(btn1, btn2, btn3)
var sec = 0,
  min = 0,
  hour = 0;

btn1.addEventListener("click", function () {
  t = setInterval(function () {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }
    display.innerText =
      (hour < 10 ? "0" + hour : hour) +
      ":" +
      (min < 10 ? "0" + min : min) +
      ":" +
      (sec < 10 ? "0" + sec : sec);
  }, 1000);
});

btn2.addEventListener("click", function () {
  clearInterval(t);
});

btn3.addEventListener("click", function () {
  (sec = 0), (min = 0), (hour = 0);
  display.innerText = "00:00:00";
  clearInterval(t);
});
