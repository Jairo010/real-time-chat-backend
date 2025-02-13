import connect from '../config/db.config.js';
import { ObjectId } from 'mongodb';
import { conversationModelG, conversationModelC } from '../models/conversation.model.js';

const db = await connect();
const conversationCollection = db.collection('Conversations');
const usersCollection = db.collection('Users');

export async function getAllConversations() {
    try {
        const conversationsData = await conversationCollection.find().toArray();
        if (conversationsData.length === 0) {
            return { message: 'No conversations found' };
        }

        const conversations = conversationsData.map(conversationModelG);
        return conversations;

    } catch (error) {
        console.error('Error fetching conversations:', error);
        throw error;
    }
}

export async function getConversationById(id) {
    try {
        const conversationData = await conversationCollection.findOne({ _id: ObjectId.createFromHexString(id) });
        if (!conversationData) {
            return { message: 'No conversation found' };
        }

        return conversationModelG(conversationData);
    } catch (error) {
        console.error('Error fetching conversation:', error);
        throw error;
    }
}

export async function createConversation(conversationData) {
    try {
        const sender = await usersCollection.findOne({ _id: ObjectId.createFromHexString(conversationData.sender_id) });
        const receiver = await usersCollection.findOne({ _id: ObjectId.createFromHexString(conversationData.receiver_id) });
        if (!sender || !receiver) {
            return { message: 'User does not exist', status: false };
        }
        const conversationExistsBySender = await conversationCollection.findOne({ sender_id: ObjectId.createFromHexString(conversationData.sender_id), receiver_id: ObjectId.createFromHexString(conversationData.receiver_id) });
        const conversationExistsByReceiver = await conversationCollection.findOne({ sender_id: ObjectId.createFromHexString(conversationData.receiver_id), receiver_id: ObjectId.createFromHexString(conversationData.sender_id) });
        if (conversationExistsBySender || conversationExistsByReceiver) {
            conversationData.id = (conversationExistsBySender ? conversationExistsBySender._id : conversationExistsByReceiver._id).toHexString();
            conversationData.sender_name = sender.name;
            conversationData.receiver_name = receiver.name;
            
            const result = await conversationCollection.updateOne({ _id: ObjectId.createFromHexString(conversationData.id) }, { $set: conversationModelC(conversationData) });
            if (result.matchedCount === 0) {
                return { message: 'Conversation created no updated', status: false };
            }
            return { message: 'Conversation created successfully', status: true };
        }
        conversationData.sender_name = sender.name;
        conversationData.receiver_name = receiver.name;
        const conversationCreated = await conversationCollection.insertOne(conversationModelC(conversationData));
        if (conversationCreated.insertedCount === 0) {
            return { message: 'Conversation creation failed', status: false };
        }
        return { message: 'Conversation created successfully', status: true };
    } catch (error) {
        console.log('Error creating a new conversation:', error);
        throw error;
    }
}

export async function updateConversation(conversationData) {
    try {
        const sender = await usersCollection.findOne({ _id: ObjectId.createFromHexString(conversationData.sender_id) });
        const receiver = await usersCollection.findOne({ _id: ObjectId.createFromHexString(conversationData.receiver_id) });
        if (!sender || !receiver) {
            return { message: 'User does not exist', status: false };
        }
        conversationData.sender_name = sender.name;
        conversationData.receiver_name = receiver.name;
        const conversation = await conversationCollection.findOne({ _id: ObjectId.createFromHexString(conversationData.id) });
        if (!conversation) {
            return { message: 'Conversation does not exist', status: false };
        }
        const result = await conversationCollection.updateOne({ _id: conversation._id }, { $set: conversationModelC(conversationData) });
        
        if (result.matchedCount === 0) {
            return { message: 'No conversation updated', status: false };
        }
        return { message: 'Conversation updated successfully', status: true };
    } catch (error) {
        console.log('Error updating conversation:', error);
        throw error;
    }
}

export async function deleteConversation(id) {
    try {
        const conversation = await conversationCollection.findOne({ _id: ObjectId.createFromHexString(id) });
        if (!conversation) {
            return { message: 'Conversation does not exist', status: false };
        }
        const result = await conversationCollection.deleteOne({ _id: conversation._id });
        if (result.deletedCount === 0) {
            return { message: 'No conversation deleted', status: false };
        }
        return { message: 'Conversation deleted successfully', status: true };
    } catch (error) {
        console.log('Error deleting conversation:', error);
        throw error;
    }
} 