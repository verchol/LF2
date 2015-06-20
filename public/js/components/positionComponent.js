function PositionComponent(params){
  if (params === undefined) params = {};

  this.name = "position";
  this.x = params.x || 0;
  this.y = params.y || 0;

  return this;
}

function setUpPositionComponent(componentContainer){
  componentContainer.components.position = new PositionComponent();
}
