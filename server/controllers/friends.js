// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function(){
	return {
		index: function(req,res){

			// calls to the database
			// retrieves the data
			// check for errors
			// sends a http response with JSON data

			Friend.find({}, function(err,results){
				console.log('looking for friends in the controller');
				if(err){
					console.log("error finding friends " + err);
				} else {
					res.json(results);
				}
			});
		},
		create: function(req,res){

			console.log("this is request to create: " + req.body.name);

			var friend =  new Friend({
				name: req.body.name,
				age: req.body.age
			});

			friend.save(function(err,data){
				if(err){
					console.log("Error saving friend " + req.body.name + " to the database.");
				} else {
					res.json(data);
				}
			});

		},
		delete: function(req,res){
			Friend.remove({_id: req.params.id}, function(err,data){
				if(err){
					console.log("couldn't delete _id: " + req.params.id);
				} else {
					console.log("friend with _id: " + req.params.id + "deleted");
					res.json(data);
				}
			});

		}
   };
})();


