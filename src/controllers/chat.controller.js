import { createChat, getAllChats, getChatById, updateChat, deleteChat, getChatsBySenderReceiver, getChatsByReceiver, getChatsBySender} from '../services/chats.services.js'


export async function createChats(req, res) {
    const chatData = req.body;
    try {
        const chat = await createChat(chatData);
        if (!chat.status) {
            res.status(404).json(chat);
        } else {
            res.status(201).json(chat);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error creating chat', error });
    }
}

export async function getChats(req, res) {
    try {
        const chats = await getAllChats();
        if (!chats.status) {
            res.status(404).json(chats);
        } else {
            res.status(200).json(chats);    
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving chats', error });
    }
}

export async function getChat(req, res) {
    const chatId = req.body.id;
    try {
        const chat = await getChatById(chatId);
        if (!chat.status) {
            res.status(404).json(chat);
        } else {
            res.status(200).json(chat);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving chat', error });
    }
}

export async function updateChats(req, res) {
    const chatData = req.body;
    try {
        const chat = await updateChat(chatData);
        if (!chat.status) {
            res.status(404).json(chat);
        } else {
            res.status(200).json(chat);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating chat', error });
    }
}

export async function deleteChatas(req, res) {
    const chatId = req.body.id;
    try {
        const chat = await deleteChat(chatId);
        if (!chat.status) {
            res.status(404).json(chat);
        } else {
            res.status(200).json(chat)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting chat', error });
    }
}

export async function getChatSender(req, res) {
    const chatId = req.body.sender_id;
    try {
        const chat = await getChatsBySender(chatId);
        if (!chat.status) {
            res.status(404).json(chat);
        } else {
            res.status(200).json(chat);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving chat by sender', error });
    }
}

export async function getChatReceiver(req, res) {
    const chatId = req.body.receiver_id;
    try {
        const chat = await getChatsByReceiver(chatId);
        if (!chat.status) {
            res.status(404).json(chat);
        } else {
            res.status(200).json(chat);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving chat by receiver', error });
    }
}

export async function getChatSenderReceiver(req, res) {
    const chatData = req.body;
    try {
        const chat = await getChatsBySenderReceiver(chatData);
        if (!chat.status) {
            res.status(404).json(chat);
        } else {
            res.status(200).json(chat);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving chat by sender and receiver', error });
    }
}