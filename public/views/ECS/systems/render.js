ECS.Systems.Render = function RenderSystem (entities) {
  // clearCanvas();
  var curEntity;
  var renderComp;
  var positionComp;
  var x;
  var y;
  var sprite;
  for (var entityId in entities) {
    curEntity = entities[entityId];
    // a position component probably should only hold a PixiJS sprite object, which in it holds position, rotation etc.
    if (curEntity.components.render && curEntity.components.position) {
      renderComp = curEntity.components.render;
      positionComp = curEntity.components.position;
      x = positionComp.x;
      y = positionComp.y;
      sprite = renderComp.sprite;
    }
  }
};
