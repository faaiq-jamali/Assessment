const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
	senderId : {
		type:mongoose.Schema.Types.ObjectId,
		ref : 'User'
	},
	messageContent : {
		type:String,
		required:true
	}
});

const Message = mongoose.model('Message', messageSchema);


exports.messageSchema = messageSchema;
exports.Message = Message; 