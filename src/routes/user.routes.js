import {express} from 'express';
import { createUsers, getUsers, getUser, updatedUsers, deleteUsers } from '../controllers/user.controller.js'

const router = express.Router();

//Get Method for users
router.get('/', getUsers);

//GET method for user
router.get('/user', getUser);

//POST method for users
router.post('/', createUsers);

//PUT method for users
router.put('/', updatedUsers);

//DELETR method for users
router.delete('/', deleteUsers);

module.exports = router;