// This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)

var friends = require('./../controllers/friends.js');

module.exports = function(app){
	app.get('/friends', function(req,res){

		// calls backend controller method
		// see above require .. it will call the friends.js controller

		friends.index(req,res);
	});

	app.post('/friends', function(req,res){
		console.log("in post request: " + req.body.name);

		friends.create(req,res);
	});

	app.post('/delete/:id', function(req,res){
		console.log("in the delete route");
		friends.delete(req,res);
	});

};