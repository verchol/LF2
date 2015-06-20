function PositionSystem() {
  var _globalSpeed = 1; //TODO this is a instance by instance case;
  var self = this;
  this.moveRight = function(pc){  //TODO rename positionComponent
    // TODO get entity as param, not component
    pc.x += _globalSpeed;
  };
  
  this.runActionOnEntities = function(action, entities){
    if (action !== "moveRight") return;
    
    entities.forEach(function (entity) {
      if (!entity || !entity.components) { // || !entity.components.)
        return;
      }
      self.moveRight(entity.components[0]);
    });
  };
}
//TODO - inject into ECS ?
//TODO - verify pc is positionComponent
