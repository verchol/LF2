var entity = new ECS.Entity();
entity.addComponent(new ECS.Components.Health());
entity.addComponent(new ECS.Components.Render({sprite: "sprite.png"}));
entity.addComponent(new ECS.Components.Position());
var entities = {};
entities[entity.id] = entity;
ECS.Systems.Render(entities);
