import {express} from 'express';
import { createConversations, getConversations, getConversation, updatedConversations, deleteConversations } from '../controllers/conversation.controller.js'

const router = express.Router();

//Get Method for conversations
router.get('/', getConversations);

//GET method for conversation
router.get('/conversation', getConversation);

//POST method for conversations
router.post('/', createConversations);

//PUT method for conversations
router.put('/', updatedConversations);

//DELETR method for conversations
router.delete('/', deleteConversations);

module.exports = router;