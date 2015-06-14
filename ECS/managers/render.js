function RenderComponentManager() {
  var manager = this;
  manager.componentStore = [];
  manager.getNewComponent = function () {
    var renderComponent = new RenderComponent();
    manager.componentStore.push(renderComponent);
    return renderComponent;
  };
}
