import { ObjectId } from 'mongodb';

export function chatModelC(chatData) {
    return {
        message: chatData.message,
        sender_id: ObjectId.createFromHexString(chatData.sender_id),
        receiver_id: ObjectId.createFromHexString(chatData.receiver_id),
        date: Date.now()
    }
}

export function chatModelG(chatData) {
    return {
        _id: chatData._id,
        message: chatData.message,
        sender_id: chatData.sender_id,
        receiver_id: chatData.receiver_id,
        date: chatData.date
    }
}