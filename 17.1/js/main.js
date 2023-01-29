function paint(rooms = ["All rooms", (colors = "white")]) {
  if (
    rooms instanceof Array &&
    colors instanceof Array &&
    colors.lenght === rooms.lenght
  ) {
    for (let i = 0; i < rooms.length; i++) {
      console.log("I pained " + rooms[i] + " in color " + color[i]);
    }
  } else {
    alert("You must pass array of the same size for this work");
  }
}

