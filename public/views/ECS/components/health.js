ECS.Components.Health = function HealthComponent (value) {
  value = value || 20;
  this.value = value;
  return this;
};
ECS.Components.Health.prototype.name = 'health';
