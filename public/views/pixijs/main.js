function init() {
  stage = new PIXI.Stage(0x66FF99);
  renderer = PIXI.autoDetectRenderer(640, 480, {view: document.getElementById("game_canvas")});
  farTexture = PIXI.Texture.fromImage("views/pixijs/fartex.png");
  far = new PIXI.Sprite(farTexture);
  far.position.x = 0;
  far.position.y = 0;
  stage.addChild(far);

  requestAnimationFrame(update);
}

function update() {
  far.rotation += 0.1;
  renderer.render(stage);
  requestAnimationFrame(update);
}
