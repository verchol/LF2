ECS.Systems.Render = function RenderSystem (entities) {
  // clearCanvas();
  var curEntity,
      renderComp,
      position
      x,
      y,
      sprite;

  for (var entityId in entities) {
    curEntity = entities[entityId];
    if (curEntity.components.render) {
      renderComp = curEntity.components.render;
      sprite = renderComp.sprite;
      position = renderComp.position;
      
    }
  }
};
