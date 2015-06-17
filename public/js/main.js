game = new game();

document.addEventListener('keydown', function (ev) {
  var ent = game.players[0];  
  switch(ev.key) {
  case "w":
    game.moveEntity(ent, "up");
    break;
  case "a":
    game.moveEntity(ent, "left");
    break;
  case "d":
    game.moveEntity(ent, "right");
    break;
  case "s":
    game.moveEntity(ent, "down");
    break;
  case "R":
    location.reload();
    break;
  }
});

canvas = {
  width: 1024, 
  height: 1280,
  DOMElement: document.getElementById("game_canvas") 
};
requestAnimationFrame(presentation);
