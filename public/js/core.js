function core(params){
  var gameModel = params.game;
  var systems = [
    new PositionSystem(),
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
    systems.forEach(function (system){
      system.runActionOnEntities("moveRight", gameModel.entities);
    });
  }
}

//TEMP
function populateBasicGame(gameModel){
  var entity = entityFactory();
  gameModel.entities.push(entity);
}

//TEMP
// and/or move to its own file and add tests
function entityFactory(){
  return {
    components: [
      new PositionComponent(),
      new RenderComponent()
    ],
    getComponent: function (component_name) {
      return _.find(this.components, {name: component_name});
    },
    size: 20 //TODO (opened a ticket about this)
  };
}
