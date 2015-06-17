function presentation() {
  // here is where we set our canvas size
  // canvas.size = game.arena.[width x height]
  var arena = game.arena;

  var DOMcanvas = canvas.DOMElement;
  var ctx = DOMcanvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arenaTopLeftX = 0;
  arenaTopLeftY = canvas.height - arena.height;
  /*
  console.log("top left Y: " + arenaTopLeftY);
  console.log("canvas height: " + canvas.height);
  console.log("arena height: " + arena.height);
  arenaStartWidth = canvas.height - arena.height;
  arenaStartHeight = canvas.width - arena.width;
  */
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(arenaTopLeftX, arenaTopLeftY, arena.width, arena.height);
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(0, 0, arena.width, arenaTopLeftY);
  
  ctx.fillStyle = "#00FFFF";
  game.players.forEach(function (p) {
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });

  requestAnimationFrame(presentation);
}
