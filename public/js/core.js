function core(params){
  var gameModel = params.game;
  var systems = [
    new PositionSystem(),
    new RenderSystem(document.getElementById("game_canvas"))
  ]; //TODO positionSystem should attach itself to core, not the other way around
  
  //TODO: add direction
  //TODO: add user input
  
  //TODO rename to startGameLoop  
  populateBasicGame(gameModel);
  
  this.gameLoop = function(){
    setInterval(updateGame, 100);
  };
  
  function updateGame(){
    // TODO Totally fix this loop. It runs runActionOnEntities('moveRight') on all systems
    //      Not all systems have runActionOnEntities or moveRight for that matter
    /*
    systems.forEach(function (system){
      system.runActionOnEntities("moveRight", gameModel.entities);
    });
    */
    systems[0].runActionOnEntities("moveRight", [gameModel.entities[2]]);
    systems[1].renderEntities(gameModel.entities);
  }
}

//TEMP
function populateBasicGame(gameModel){
  var background = new Entity({
    components: [new PositionComponent(),
		 new RenderComponent({width: 1280, height: 1024, color: "#FF0000"})]
  });
  gameModel.entities.push(background);

  var arena = new Entity({
    components: [new PositionComponent({y: 220}),
		 new RenderComponent({width: 1280, height: 1024, color: "#0000FF"})]
  });
  gameModel.entities.push(arena);

  var entity = entityFactory();
  gameModel.entities.push(entity);
}

//TEMP
// and/or move to its own file and add tests
function entityFactory(){
  return new Entity({
    components: [
      new PositionComponent({x: 100, y: 150}),
      new RenderComponent({zIndex: 2})
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
