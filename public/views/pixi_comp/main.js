function init() {
  stage = new PIXI.Stage(0x66FF99);
  renderer = PIXI.autoDetectRenderer(640, 480,
				     {view:
				      document.getElementById("game_canvas")});
  var entity = new ECS.Entity();
  entity.addComponent(new ECS.Components.Render({stage: stage, spriteTexture: "views/pixi_comp/bunny.png"}));
  stage.addChild(entity.components.render.sprite);
  requestAnimationFrame(update);
}

function update() {
  renderer.render(stage);
  requestAnimationFrame(update);
}
