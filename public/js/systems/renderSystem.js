function RenderSystem(DOMElement) {
  var self = this;
  var _canvas = {
    DOMElement: DOMElement,
    width: DOMElement.width,
    height: DOMElement.height 
  };
  var _drawingContext = _canvas.DOMElement.getContext("2d");

  this.drawEntityToCanvas = function (entity) {
    var _r = entity.getComponent('render');
    var _p = entity.getComponent('position');
    _drawingContext.fillStyle = _r.color;
    _drawingContext.fillRect(_p.x, _p.y, _r.width, _r.height);
  };

  this.clearCanvas = function () {
    _drawingContext.clearRect(0, 0, _canvas.width, _canvas.height);
  };

  this.renderEntities = function (entities) {
    self.clearCanvas();
    // TODO render entities by zIndex
    var _ordered = [];
    var _renderableEntities = [];

    // this runs every update, which could make for a very memory-intensive task.
    // TODO find a way to do this once in a while, not every tick
    entities.forEach(function (entity) {
      if (entity.getComponent('render') && entity.getComponent('position')) {
	_renderableEntities.push(entity);
      }
    });
    _ordered = _.sortBy(_renderableEntities, function (entity) {
      return entity.getComponent('render').zIndex;
    });
    _ordered.forEach(function (entity) {
      self.drawEntityToCanvas(entity);
    });
  };
}
