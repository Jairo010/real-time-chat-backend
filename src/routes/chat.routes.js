import {express} from 'express';
import { createChats, getChats, getChat, updateChats, deleteChatas, getChatSender, getChatReceiver, getChatSenderReceiver } from '../controllers/chat.controller.js'

const router = express.Router();

//Get Method for chats
router.get('/', getChats);

//GET method for chat
router.get('/chat', getChat);

//GET method for sender chats 
router.get('/sender', getChatSender);

//GET method for receiver chats
router.get('/receiver', getChatReceiver);

//GET method for sender-receiver chats
router.get('/sender-receiver', getChatSenderReceiver);

//POST method for chats
router.post('/', createChats);

//PUT method for chats
router.put('/', updateChats);

//DELETR method for chats
router.delete('/', deleteChatas);

module.exports = router;