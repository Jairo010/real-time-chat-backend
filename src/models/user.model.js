const mongo = require('mongoose');

const UserModel = mongo.Schema ({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creatAt: {
        type: Date,
        default: Date.now()
    }
});

const users = mongo.model('users', UserModel);

module.exports = users;