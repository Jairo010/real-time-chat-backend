import connect from '../config/db.config.js';
import { ObjectId } from 'mongodb';
import { chatModelG, chatModelC } from '../models/chat.model.js';

const db = await connect();
const chatCollection = db.collection('Chats');
const userCollection = db.collection('Users');

export async function getAllChats() {
    try {
        const chatsData = await chatCollection.find().toArray();
        if (chatsData.length === 0) {
            return { message: 'No chats found', status: false };
        } else {
            const chats = chatsData.map(chatModelG);
            return chats;
        }
    } catch (error) {
        console.error('Error fetching chats:', error);
        throw error;
    }
}

export async function getChatById(id) {
    try {
        const chatData = await chatCollection.findOne({ _id: ObjectId.createFromHexString(id) });
        if (!chatData) {
            return { message: `No chat found with id: ${id}`, status: false };
        } else {
            return chatModelG(chatData);
        }
    } catch (error) {
        console.error('Error fetching chat:', error);
        throw error;
    }
}

export async function createChat(chatData) {
    try {
        const sender = await userCollection.findOne({ _id: ObjectId.createFromHexString(chatData.sender_id) });
        const receiver = await userCollection.findOne({ _id: ObjectId.createFromHexString(chatData.receiver_id) });

        if (!sender || !receiver) {
            return { message: `Sender or receiver does not exist with sender_id: ${chatData.sender_id} and  receiver_id: ${chatData.receiver_id}` , status: false };
        }

        const chatCreated = await chatCollection.insertOne(chatModelC(chatData));
        if (chatCreated.insertedCount === 0) {
            return { message: 'Chat creation failed', status: false };
        }
        return { message: 'Chat created successfully', status: true };
    } catch (error) {
        console.log('Error creating a new chat:', error);
        throw error;
    }
}

export async function updateChat(chatData) {
    try {
        const chat = await chatCollection.findOne({ _id: ObjectId.createFromHexString(chatData.id) });
        if (!chat) {
            return { message: `Chat does not exist with id: ${chatData.id}`, status: false };
        }
        const sender = await userCollection.findOne({ _id: ObjectId.createFromHexString(chatData.sender_id) });
        const receiver = await userCollection.findOne({ _id: ObjectId.createFromHexString(chatData.receiver_id) });

        if (!sender || !receiver) {
            return { message: `Sender or receiver does not exist with sender_id: ${chatData.sender_id} receiver_id ${chatData.receiver_id}`, status: false };
        }
        const result = await chatCollection.updateOne({ _id: chat._id }, { $set: chatModelC(chatData) });
        if (result.modifiedCount === 0) {
            return { message: 'No changes made to the chat', status: false };
        }
        return { message: 'Chat updated successfully', status: true };
    } catch (error) {
        console.log('Error updating chat:', error);
        throw error;
    }
}

export async function deleteChat(id) {
    try {
        const chat = await chatCollection.findOne({ _id: ObjectId.createFromHexString(id) });
        if (!chat) {
            return { message: `Chat does not exist with id: ${id}`, status: false };
        }
        const result = await chatCollection.deleteOne({ _id: chat._id });
        if (result.deletedCount === 0) {
            return { message: 'Chat deletion failed', status: false };
        }
        return { message: 'Chat deleted successfully', status: true };
    } catch (error) {
        console.log('Error deleting chat:', error);
        throw error;
    }
}

export async function getChatsBySenderReceiver(dataSenderReceiver) {
    try {
        const chatsData = await chatCollection.find({ 
            sender_id: ObjectId.createFromHexString(dataSenderReceiver.sender_id), 
            receiver_id: ObjectId.createFromHexString(dataSenderReceiver.receiver_id) 
        }).toArray();
        if (chatsData.length === 0) {
            return { message: `No chats found with sender_id: ${dataSenderReceiver.sender_id} and receiver_id: ${dataSenderReceiver.receiver_id}` , status: false };
        }

        const chats = chatsData.map(chatModelG);
        return chats;

    } catch (error) {
        console.error('Error fetching chats by sender and receiver:', error);
        throw error;
    }
}

export async function getChatsBySender(sender_id) {
    try {
        const chatsData = await chatCollection.find({ sender_id: ObjectId.createFromHexString(sender_id) }).toArray();
        if (chatsData.length === 0) {
            return { message: `No chats found with sender_id: ${sender_id}` , status: false };
        }

        const chats = chatsData.map(chatModelG);
        return chats;

    } catch (error) {
        console.error('Error fetching chats:', error);
        throw error;
    }
}

export async function getChatsByReceiver(receiver_id) {
    try {
        const chatsData = await chatCollection.find({ receiver_id: ObjectId.createFromHexString(receiver_id) }).toArray();
        if (chatsData.length === 0) {
            return { message: `No chats found with receiver_id: ${receiver_id}`, status: false };
        }
        const chats = chatsData.map(chatModelG);
        return chats;
    } catch (error) {
        console.error('Error fetching chats:', error);
        throw error;
    }
}


