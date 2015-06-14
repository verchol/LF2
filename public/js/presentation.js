function presentation(params){

  var game = params.game;
  // here is where we set our canvas size
  // canvas.size = game.arena.[width x height]
  var arena = game.arena;

  var DOMcanvas = document.getElementById("game_canvas");
  var ctx = DOMcanvas.getContext("2d");

  arenaTopLeftX = 0;
  arenaTopLeftY = params.canvas.height - arena.height;
  console.log("top left Y: " + arenaTopLeftY);
  console.log("canvas height: " + params.canvas.height);
  console.log("arena height: " +arena.height);
  /*
  arenaStartWidth = params.canvas.height - arena.height;
  arenaStartHeight = params.canvas.width - arena.width;
  */
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(arenaTopLeftX, arenaTopLeftY, arena.width, arena.height);
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(0, 0, arena.width, arenaTopLeftY);
  
  ctx.fillStyle = "#00FFFF";
  game.players.forEach(function (p) {
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
}
