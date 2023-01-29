var fName = prompt("What's your name ?");
var eyes = confirm("Do you have blue eyes ?");
var index = 0;

while (fName !== "David" || eyes == false) {
  index++;
  fName = prompt("What's your name ?");
  eyes = confirm("Do you have blue eyes ?");
}
var mess = "It took " + index + " tries until we found him !";
alert(mess)
