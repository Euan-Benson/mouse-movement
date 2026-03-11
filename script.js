function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
  document.getElementById("image").src = "moutains.jpg";
}

function clearCoor() {
  document.getElementById("demo").innerHTML = "";
  document.getElementById("image").src = "";
}
