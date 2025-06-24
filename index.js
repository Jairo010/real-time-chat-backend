import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {router as userRoutes} from './src/routes/user.routes.js'
import {router as chatRoutes} from './src/routes/chat.routes.js'
import {router as conversationRoutes} from './src/routes/conversation.routes.js'

dotenv.config({ path: '.env' });
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'ok', status: true, code: 200 });
});

app.use('/users', userRoutes);
app.use('/chats', chatRoutes);
app.use('/conversations', conversationRoutes);

app.listen(port, (error) => {
    if (error) {
        console.log('Error starting the server', error);
    }
    console.log('Server is running on port', port);
});

