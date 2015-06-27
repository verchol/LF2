function MovementSystem() {
  var _globalSpeed = 1; //TODO this is a instance by instance case;
  var self = this;

  this.moveEntity = function (entity, direction) {
    var _pc = entity.getComponent('position');
    switch(direction) {
    case "right":
      _pc.x += _globalSpeed;
    }
  };

  this.runActionOnEntities = function(action, entities){
    if (action === undefined || entities === undefined) return;
    if (action !== "moveRight") return;
    
    entities.forEach(function (entity) {
      if (!entity || !entity.components || !entity.getComponent('movement') || !entity.getComponent('position')) {
        return;
      }

      self.moveEntity(entity, "right");
    });
  };
}
