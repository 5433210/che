exports.check = function(req, res) {
	console.log(req);
	console.log(req.param('signature'));
	res.send(req.param('echostr'))
}

