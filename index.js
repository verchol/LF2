var express = require('express');
var path = require('path');
var app = express();

app.set('port', 3000);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/ecs', function (req, res) {
  res.render('ECS/index.html');
});

app.get('/pixi', function (req, res) {
  res.render('pixijs/index.html');
});

/* useless and broken atm
app.get('/pixi_comp', function (req, res) {
  res.render('pixi_comp/index.html');
});
*/

app.get('/renderer', function (req, res) {
  res.render('renderer/index.html');
});

app.get('/', function (req, res) {
  res.render('index.html');
});

var server = app.listen(3000);
