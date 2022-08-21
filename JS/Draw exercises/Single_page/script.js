//Face
var canvas1 = document.getElementById("canvas1");
if (canvas1.getContext) {
  var context = canvas1.getContext("2d");
  context.beginPath();
  context.arc(75, 75, 50, 0, Math.PI * 2, true);
  context.moveTo(110, 75);
  context.arc(75, 75, 35, 0, Math.PI, false);
  context.moveTo(55, 65);
  context.arc(60, 65, 5, 0, Math.PI * 2, true);
  context.arc(90, 65, 5, 0, Math.PI * 2, true);
  context.stroke();
  context.beginPath();
}

//Triangle

var canvas2 = document.getElementById("canvas2");
if (canvas2.getContext) {
  var context = canvas2.getContext("2d");

  context.beginPath();
  context.moveTo(75, 75);
  context.lineTo(10, 75);
  context.lineTo(10, 25);
  context.fill();
}

//Box Square
var canvas3 = document.getElementById("canvas3");
if (canvas3.getContext) {
  var context = canvas3.getContext("2d");

  context.fillRect(20, 20, 100, 100);
  context.clearRect(40, 40, 60, 60);
  context.strokeRect(45, 45, 50, 50);
}

//Two Colored Box overlapping

var canvas4 = document.getElementById("canvas4");
if (canvas4.getContext) {
  var context = canvas4.getContext("2d");

  context.fillStyle = "rgb(256,0,0)";
  context.fillRect(15, 10, 55, 50);

  context.fillStyle = "rgba(0, 0, 200, 0.6)";
  context.fillRect(35, 30, 55, 50);
}

//Red Color Circle

var canvas5 = document.getElementById("canvas5");
if (canvas5.getContext) {
  var ctx = canvas5.getContext("2d");
  var X = canvas5.width / 2;
  var Y = canvas5.height / 2;
  var R = 45;
  ctx.beginPath();
  ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#FF0000";
  ctx.stroke();
}

//Multiple Dot circles with shading colors

var ctx = document.getElementById("canvas6").getContext("2d");
var counter = 0;
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    ctx.fillStyle =
      "rgb(" +
      Math.floor(255 - 42.5 * i) +
      "," +
      Math.floor(255 - 42.5 * i) +
      "," +
      Math.floor(255 - 42.5 * j) +
      ")";
    ctx.beginPath();
    if (i === counter && j === counter) {
      ctx.arc(25 + j * 50, 30 + i * 50, 20, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
    }
  }
  counter++;
}
