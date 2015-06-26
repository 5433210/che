var db = require('../models')
exports.receive = function(req, res) {
        console.log(req.body.xml.Content);
	db.Message.create({ 
				received:new Date(), 
				content: req.body.xml.Content })
			.then(function(user){
				console.log('insert db ok');
				res.send('success');
			})
}

