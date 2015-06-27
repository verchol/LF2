function core(params){
  var gameModel = params.game;
  var systems = [
    new MovementSystem(),
    new RenderSystem(document.getElementById("game_canvas"))
  ]; //TODO positionSystem should attach itself to core, not the other way around
  
  //TODO: add direction
  //TODO: add user input
  
  //TODO rename to startGameLoop  
  UserInputReceiver();  
  populateBasicGame(gameModel);
  
  this.gameLoop = function(){
    setInterval(updateGame, 100);
  };
  
  function updateGame(){
    // TODO make this loop more 'dynamic'
    var moveableEntities = [];
    _.forEach(gameModel.entities, function (entity) {
      if (entity.getComponent('movement')) moveableEntities.push(entity);
    });
    systems[0].runActionOnEntities("moveRight", moveableEntities);
    systems[1].renderEntities(gameModel.entities);
  }
}

//TEMP
function populateBasicGame(gameModel){
  var entity = entityFactory();
  gameModel.entities.push(entity);

  var background = new Entity({
    components: [new PositionComponent(),
		 new RenderComponent({width: 1280, height: 1024, color: "#FF0000", zIndex: 0})]
  });
  gameModel.entities.push(background);

  var arena = new Entity({
    components: [new PositionComponent({y: 220}),
		 new RenderComponent({width: 1280, height: 1024, color: "#0000FF", zIndex: 0.5})]
  });
  gameModel.entities.push(arena);
}

//TEMP
// and/or move to its own file and add tests
function entityFactory(){
  return new Entity({
    components: [
      new PositionComponent({x: 100, y: 150}),
      new MovementComponent(),
      new RenderComponent({zIndex: 1})
    ]
  });
}

// TODO move to separate file
function Entity(params) {
  return {
    components: params.components,
    getComponent: function (component_name) {
      return _.find(this.components, {name: component_name});
    }
  };
}
