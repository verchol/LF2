function positionComponent(params){
  if (params === undefined) params = {};
  
  this.x = params.x || 0;
  this.y = params.y || 0;
  return this;
}

function setUpPositionComponent(componentContainer){
  componentContainer.components.position = new positionComponent();
  componentContainer.components.Render.prototype.name = 'position';
}