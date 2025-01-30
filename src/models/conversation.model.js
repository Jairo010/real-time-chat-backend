const mongo = require('mongoose')
const users = require('./user.model')

const ConversationModel = mongo.Schema({
    lastMessage: {
        type: String,
        required: true
    },
    sender_id: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    sender_name: {
        type: String,
        required: true
    },
    receiver_id: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    receiver_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const conversations = mongo.model('conversations', ConversationModel);

module.exports = conversations;