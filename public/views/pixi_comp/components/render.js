/*
  {sprite: String,
   position: {
    x: Int,
    y: Int
   }
  }
*/
ECS.Components.Render = function RenderComponent (params) {
  if (params === undefined) return null;
  var texture = PIXI.Texture.fromImage(params.spriteTexture);
  this.sprite = new PIXI.Sprite(texture);

  if (params.position && params.position.x) {
    this.sprite.position.x = params.position.x;
  }

  if (params.position && params.position.y) {
    this.sprite.position.y = params.position.y;
  }


  return this;
};
ECS.Components.Render.prototype.name = 'render';
