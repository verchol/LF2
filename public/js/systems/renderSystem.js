function RenderSystem(params) {
  var self = this;
  var _canvas = {
    DOMElement: params.DOMElement,
    width: params.width,   // do this more 'dynamically'
    height: params.height
  };
  var _drawingContext = _canvas.getContext("2d");

  this.clearCanvas = function () {
    _drawingContext.clearRect(0, 0, _canvas.width, _canvas.height);
  };

  this.drawEntityToCanvas = function (entity) {
    var _r = entity.getComponent('render');
    var _p = entity.getComponent('position');
    _drawingContext.fillStyle = _r.color;
    _drawingContext.fillRect(_p.x, _p.y, _p.size, _p.size);  // TODO get arena size, add to y
  };

  this.clearCanvas = function () {
    _drawingContext.clearRect(0, 0, _canvas.width, _canvas.height);
  };

  this.renderEntities = function (entities) {
    self.clearCanvas();
    entities.forEach(function (entity) {
      if (entity.getComponent('render') && entity.getComponent('position')) {
        self.drawEntityToCanvas(entity);
      }
    });
  };
};
