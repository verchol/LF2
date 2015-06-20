function RenderComponent(params) {
  if (params === undefined) params = {};

  this.name = "render";
  this.color = params.color || "#00FFFF";
  this.size = params.size || 20;
}
