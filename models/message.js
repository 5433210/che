module.exports = function(sequelize, DataTypes) {
	var Message = sequelize.define('Message', {
		received:DataTypes.DATE,
		content:DataTypes.TEXT,  
	},{
		associate: function(models) { }
	})
	return Message
}
