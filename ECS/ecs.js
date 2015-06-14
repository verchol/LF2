/*
var p = new Entity(); // empty container
var renderManager = new RenderComponentManager();
var r = renderManager.getNewComponent();
p.addComponent(r);
*/

var ECS = {};
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

ECS.Components = {};
ECS.Components.Health = function HealthComponent (value) {
  value = value || 20;
  this.value = value;
  return this;
};
ECS.Components.Health.prototype.name = 'health';

ECS.Components.Render = function RenderComponent (params) {
  this.sprite = params.sprite;
  return this;
};
ECS.Components.Render.prototype.name = 'render';

ECS.Systems = {};
ECS.Systems.Render = function RenderSystem (entities) {
  // clearCanvas();
  var curEntity;
  for (var entityId in entities) {
    curEntity = entities[entityId];
    if (curEntity.components.render && curEntity.components.position) {
      console.log(curEntity);
    }
  }
};

ECS.Systems.Input = function InputSystem (entities) {
  for (var entityId in entities) {
    curEntity = entities[entityId];
    if (curEntity.components.input && curEntity.compoentns.movement) {
      console.log('moving entity');
    }
  }
};

var entity = new ECS.Entity();
entity.addComponent(new ECS.Components.Health());
entity.print();
