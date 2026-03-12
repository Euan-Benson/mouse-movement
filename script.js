function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
  //   document.getElementById("image").src = "moutains.jpg";
}

$(document).ready(function () {
  $(document).mousemove(function (e) {
    let x = e.clientX;
    let y = e.clientY;
    // $("img").css("top", y + "px");
    // $("img").css("left", x + "px");
  });
});

let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
let speed = 2;
let popup = document.getElementById("popup");
const popupWidth = popup.clientWidth;
const popupHeight = popup.clientHeight;

function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + popupHeight >= screenHeight || y < 0) {
    dirY *= -1;
  }
  if (x + popupWidth >= screenWidth || x < 0) {
    dirX *= -1;
  }
  x += dirX * speed;
  y += dirY * speed;
  popup.style.left = x + "px";
  popup.style.top = y + "px";
  window.requestAnimationFrame(animate);
  //   document.getElementById("image").src = "";
}

function stopAnimation(e) {
  speed = 0;
}

function showMouse(e) {
  $("body").css("cursor", "default");
}

setInterval(animate, 5000);
