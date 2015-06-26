var db = require('./models')
var express = require('express')
var app = express()
var server = require('http').Server(app)
var signature = require('./routes/signature')
var message = require('./routes/message')
var bodyParser = require('body-parser')
var xmlParser = require('express-xml-bodyparser')

app.get('/', signature.check )
app.post('/', xmlParser({trim:false,explicitArray:false}), message.receive )

db.sequelize
	.sync({ force: false })
	.then(function(result){ 
		server.listen(80, function(){ 
			console.log('server listening on port 8080')
		})}, function(err){
			console.log(err);})
