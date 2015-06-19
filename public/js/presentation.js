function presentation(params) {
  var _arena;
  var _entities;
  var _arenaTopLeft = { x:0, y:0 };
  var _model = {};
  var _canvas = {};
  var _drawingContext = {};
  var _onFinishDraw = function(){};

  populatePresentationModel(params);

  this.start = start;
  function start(){
    drawGame();
  }

  function drawGame(){
    clearCanvas();
    drawBackground();
    drawArena();
    _entities.forEach(drawPlayer);
    
    addFps();
    
    _onFinishDraw(drawGame);
  }
  
  function clearCanvas(){
    _drawingContext.clearRect(0, 0, _canvas.width, _canvas.height);
  }

  // TODO: Move all rendering functions into a render system
  // TODO: Don't use such specific functions. A render system can render
  // any entity, regardless of whether it's a 'player' or not.
  function drawBackground(){
    _drawingContext.fillStyle = "#FF0000";
    _drawingContext.fillRect(_arenaTopLeft.x, _arenaTopLeft.y, _arena.width, _arena.height);
  }
  
  function drawArena(){
    _drawingContext.fillStyle = "#0000FF";
    _drawingContext.fillRect(0, 0, _arena.width, _arenaTopLeft.y);
  }
  
  function drawPlayer(player){
    _drawingContext.fillStyle = "#00FFFF";
    _drawingContext.fillRect(player.components[0].x, _arenaTopLeft.y + 15 + player.components[0].y, player.size, player.size);
  }

  function populatePresentationModel(params){
    /// Don't forget to add brackets
    if (!params.game) {
      // We don't "throw" exceptions. Use console.log's and return's.
      //      throw "presentation: how are you supposed to start a game without proper arguments?";
      console.log("presentation: how are you supposed to start a game without proper arguments?");
      return;
    }
    
    _canvas = {
      width: 1024,   //TODO: why are these values not drawn from the canvas itself? 
      height: 1280,  // This isn't technically our canvas info, it's our 'camera' info.
      DOMElement: document.getElementById("game_canvas") //TODO get via params.
    };
    
    _drawingContext = _canvas.DOMElement.getContext("2d");
    
    _arena = params.game.arena;
    _entities = params.game.entities;
    _arenaTopLeft.y = _canvas.height - _arena.height;
    _onFinishDraw = params._onFinishDraw;
  }
  
  var _startTime = performance.now();
  var _numberOfFrames = 0;
  var _fps = 0;
  
  function addFps(){
    var now = performance.now();
    if (now - 1000 > _startTime){
      _startTime = now;
      _fps = _numberOfFrames;
      _numberOfFrames = 0;
    }
    _numberOfFrames++;
    
    drawFps();
  }
  
  function drawFps(){
    _drawingContext.fillStyle = "#FFFFFF";
    _drawingContext.font="20px Ariel";
    _drawingContext.fillText("fps: " + _fps,10,50);
  }
}
