var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port  	 = process.env.PORT || 5000;

var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');



app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));



require('./app/routes.js')(app);



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
