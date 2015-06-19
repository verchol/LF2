function setUpPositionSystem(componentContainer){
  componentContainer.components.position = function positionComponent (params) {
    this.x = params.x || 0;
    this.y = params.y || 0;
    return this;
  };

  componentContainer.components.Render.prototype.name = 'position';
}