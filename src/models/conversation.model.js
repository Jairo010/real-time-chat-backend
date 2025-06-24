import { ObjectId } from 'mongodb';

export function conversationModelC(conversationData) {
    return {
        lastMessage: conversationData.lastMessage,
        sender_id: ObjectId.createFromHexString(conversationData.sender_id),
        sender_name: conversationData.sender_name,
        receiver_id: ObjectId.createFromHexString(conversationData.receiver_id),
        receiver_name: conversationData.receiver_name,
        date: Date.now()
    }
}

export function conversationModelG(conversationData) {
    return {
        _id: conversationData._id,
        lastMessage: conversationData.lastMessage,
        sender_id: conversationData.sender_id,
        sender_name: conversationData.sender_name,
        receiver_id: conversationData.receiver_id,
        receiver_name: conversationData.receiver_name,
        date: conversationData.date
    }
}