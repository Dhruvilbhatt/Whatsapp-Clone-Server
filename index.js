import express from 'express';
import dotenv from 'dotenv';
import connection from './Database/Connection.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Route from './Routes.js';

dotenv.config();

const app = express();

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Route);

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USER;
const password = process.env.DB_PWD;
const database = process.env.DB_NAME;

connection(username, password, database);

app.listen(PORT, () => {
    try {
        console.log(`Server running succesfully on port: ${PORT}`);
    } catch(error) {
        console.log('Error: ', error.message);
    }
});

