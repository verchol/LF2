ECS.Components.Position = function PositionComponent (params) {
  if (params === undefined) params = {};
  var x = params.x || 20;
  var y = params.y || 20;
  this.x = x;
  this.y = y;;
  return this;
};
ECS.Components.Position.prototype.name = 'position';
