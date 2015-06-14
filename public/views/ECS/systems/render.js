ECS.Systems.Render = function RenderSystem (entities) {
  // clearCanvas();
  var curEntity;
  for (var entityId in entities) {
    curEntity = entities[entityId];
    if (curEntity.components.render && curEntity.components.position) {
      console.log(curEntity);
    }
  }
};
