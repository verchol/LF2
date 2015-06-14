ECS.Entity = function Entity() {
  this.id = (+new Date()).toString(16) +
    (Math.random() * 1000000000 | 0).toString(16) +
    ECS.Entity.prototype._count;

  ECS.Entity.prototype._count++;

  this.components = {};

  return this;
};

ECS.Entity.prototype._count = 0;
ECS.Entity.prototype.addComponent = function addComponent(component) {
  this.components[component.name] = component;
  return this;
};
ECS.Entity.prototype.removeComponent = function removeComponent(componentName) {
  var name = componentName;
  if (typeof componentName === "function") {
    name = componentName.prototype.name;
  }

  delete this.components[name];
  return this;
};

ECS.Entity.prototype.print = function () {
  console.log(JSON.stringify(this, null, 4));
  return this;
};
