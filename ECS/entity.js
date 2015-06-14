function Entity() {
  var ent = this;
  ent.componentStore = [];

  ent.addComponent = function (comp) {
    ent.componentStore.push(comp);
  };
  ent.removeComponent = function (comp) {
    ent.componentStore = _.without(ent.componentStore, comp);
  };
}
