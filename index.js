import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'ok', status: true, code: 200 });
});

app.listen(port, (error) => {
    if (error) {
        console.log('Error starting the server', error);
    }
    console.log('Server is running on port', port);
});

