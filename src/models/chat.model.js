const mongo = require('mongoose');
const users = require('./user.model')

const ChatModel = mongo.Schema({
    message: {
        type: String,
        required: true
    },
    sender_id: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    receiver_id: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const chats = mongo.model('chats', ChatModel);

module.exports = chats;