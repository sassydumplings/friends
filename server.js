// ****** Requires ****** //
var express		= require("express"),
	path		= require("path"),
	bodyParser = require("body-parser"),
	app			=  express();


// ******* Body Parser and Static Folder ********//
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));

// ********** Routes && MongoDB require *******//
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


// *********** Listening to Port **********//
app.listen(8000, function(){
	console.log('Listening on port 8000');
});