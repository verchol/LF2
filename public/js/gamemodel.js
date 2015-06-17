function game() {
  this.arena = {
    width: 1280,
    height: 1024
  };

  this.players = [{x: 10, y: 1000, size: 20, speed: 5}];

  this.moveEntity = function (entity, direction) {
    var dif;
    switch (direction) {
    case "up":
      entity.y -= entity.speed;
      break;
    case "down":
      if (entity.y + entity.size + entity.speed <= this.arena.height) {
	entity.y += entity.speed;
      } else {
	dif = entity.speed + (entity.y + entity.size + entity.speed);
	entity.y += dif;
      }
      break;
    case "left":
      if (entity.x - entity.speed >= 0) {
	entity.x -= entity.speed;
      } else {
	dif = entity.speed + (entity.x - entity.speed);
	entity.x -= dif;
      }
      break;
    case "right":
      entity.x += entity.speed;
      break;
    }
  }
}
