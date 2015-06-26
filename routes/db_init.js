var db = require('../models')
var Sequelize = require('sequelize')
exports.initialize = function(){	
	new Sequelize.Utils.QueryChainer()
	.add(db.Message.destroy({},{truncate:true, cascade:true}))
	.runSerially()
	.done(function(){ 
		console.log("drop all data")
	})
}

