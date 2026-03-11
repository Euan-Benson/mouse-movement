function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
  document.getElementById("image").src = "moutains.jpg";
}

function drift(x,y) {
  let nX = x + 100;
  let nY = y + 100;
  $("img").css("top", nY + "px");
  $("img").css("left", nX + "px");
}

$(document).ready(function () {
  $(document).mousemove(function (e) {
    let x = e.clientX;
    let y = e.clientY;
    $("img").css("top", y + "px");
    $("img").css("left", x + "px");
    // window.setTimeout(drift(x,y),20000);
  });
});

