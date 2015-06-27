function InputSystem() {
  var self = this;

  this.handleInputOnEntities = function (keycode, entities) {
    if (keycode === undefined || entities === undefined) return;
    entities.forEach(function (entity) {
      if (!entity.components || !entity.getComponent('input')) return;
      
    });
  };
}
