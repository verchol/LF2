function presentation(params) {
  var _arena;
  var _players;
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
    _players.forEach(drawPlayer);
        
        addFps();
        
        _onFinishDraw(drawGame);
  }
  
  function clearCanvas(){
    _drawingContext.clearRect(0, 0, _canvas.width, _canvas.height);
  }
  
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
    _drawingContext.fillRect(player.x, player.y, player.size, player.size);
  }

  function populatePresentationModel(params){
    if (!params.game)
       throw "presentation: how are you supposed to start a game without proper arguments?";
    
    _canvas = {
      width: 1024,   //TODO: why are these values not drawn from the canvas itself?
      height: 1280,  
      DOMElement: document.getElementById("game_canvas") //TODO get via params.
    };
    
    _drawingContext = _canvas.DOMElement.getContext("2d");
    
    _arena = params.game.arena;
    _players = params.game.players;
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