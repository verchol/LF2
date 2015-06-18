function core(params){
  var gameModel = params.game;
  
  //TODO: add direction
  //TODo: add user input
  this.moveEntity = function(entity) {
    entity.x += entity.speed;
  }
  var _moveEntity = this.moveEntity;  
  
  this.gameLoop = function(){
    setInterval(function () {
      gameModel.players.forEach(function (p) {
        _moveEntity(p);
      });
    }, 100);
  }
}