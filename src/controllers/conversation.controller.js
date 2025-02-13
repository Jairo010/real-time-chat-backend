import { getAllConversations, getConversationById, createConversation, updateConversation, deleteConversation } from '../services/conversations.services.js'

export async function createConversations(req, res)  {
    const conversationData = req.body;
    try {
        const conversation = await createConversation(conversationData);
        if (!conversation.status) {
            res.status(404).json(conversation);
        } else {
            res.status(201).json(conversation)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error creating conversation', error });
    }
};

export async function getConversations(req, res) {
    try {
        const conversations = await getAllConversations();
        if (!conversations.status) {
            res.status(404).json(conversations);
        } else {
            res.status(200).json(conversations);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving conversations', error });
    }
};

export async function getConversation(req, res) {
    const conversationId = req.body.id;
    try {
        const conversation = await getConversationById(conversationId);
        if (!conversation.status) {
            res.status(404).json(conversation);
        } else {
            res.status(200).json(conversation)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving conversation', error });
    }
};

export async function updatedConversations(req, res) {
    const conversationData = req.body;
    try {
        const conversation = await updateConversation(conversationData);
        if (!conversation.status) {
            res.status(404).json(conversation)
        } else {
            res.status(200).json(conversation)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating conversation', error });
    }
};

export async function deleteConversations(req, res) {
    const conversationId = req.body.id;
    try {
        const conversation = await deleteConversation(conversationId);
        if (!conversation.status) {
            res.status(404).json(conversation);
        } else {
            res.status(200).json(conversation)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting conversation', error });
    }
};