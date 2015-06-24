describe("UserInputReceiver", function () {
  var receiver;
  var eventFired;
  
  radio("user_action").subscribe(function(){
    eventFired = true;
  });
  
  beforeEach(function () {
    receiver = new UserInputReceiver();
    eventFired = false;
  });
  
  it("SHOULD publish UserActionEvent WHEN keydown is pressed", function () {
    simulateKeyPress('right');
    expect(eventFired).toEqual(true) ;
  });
  
  function simulateKeyPress(key){
    keyvent.down(key);
  }
});