function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
  document.getElementById("image").src = "moutains.jpg";
}

$(document).ready(function () {
  $(document).mousemove(function (e) {
    let x = e.clientX;
    let y = e.clientY;
    $("img").css("top", y + "px");
    $("img").css("left", x + "px");
  });
});

let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 2;
let dvd = document.getElementById("image");
const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

setTimeout(animate,10000);

dvd.addEventListener("click", animate);

