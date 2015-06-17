function init() {
  requestAnimationFrame(update);
}

function render(obj) {
  if (obj === undefined) return;
  if (obj.position === undefined) return;
  var x = obj.position.x;
  var y = obj.position.y;
  var size = 20; // dynamic?
  
}

function update() {
  var canvas = document.getElementById("game_canvas");
  var ctx = canvas.getContext("2d");
}
