//TODO - consider using mapping,
//OR keydrown.js, for better support and less headaches.

function UserInputReceiver() {
  document.addEventListener('keydown', function (evt) {
    switch(evt.keyCode) {
      // case 37: //'right arrow' key code
        // alert('left');
      // break;
      case 39: //'right arrow' key code
        radio(EVENTS.userInput.topic).broadcast(EVENTS.userInput.right);
      break;
      // case 38: //'right arrow' key code
        // alert('up');
      // break;
      // case 40: //'right arrow' key code
        // alert('down');
      // break;
    }
  });
}
