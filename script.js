function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;

  $('img').css('left', e.pageX+"px");
  $('img').css('top', e.pageY+"px");
}

function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}
