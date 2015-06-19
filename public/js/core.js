function core(params){
  var gameModel = params.game;
  var systems = [new positionSystem()]; //TODO positionSystem should attach itself to core, not the other way around
  
  //TODO: add direction
  //TODO: add user input
  
  //TODO rename to startGameLoop  
  populateBasicGame(gameModel);
  
  this.gameLoop = function(){
    setInterval(updateGame, 100);
  }
  
  function updateGame(){
    systems.forEach(function (system){
      system.runActionOnEntities("moveRight",gameModel.entities);
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
      new positionComponent()
    ],
    size: 20 //TODO (opened a ticket about this)
  };
}