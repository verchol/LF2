function RenderComponent(params) {
  if (params === undefined) params = {};

  this.name = "render";
  this.color = params.color || "#00FFFF";
  this.width = params.width || 20;
  this.height = params.height || 20;
  // zIndex - rendering order. Lower numbers get rendered first
  this.zIndex = params.zIndex || 0;
}
