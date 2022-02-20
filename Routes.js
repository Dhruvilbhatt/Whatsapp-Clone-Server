import express from 'express';
import { addUser, getUsers, addConversation, getConversation, setMessage, getMessage } from './Controller.js';

const Routes = express.Router();

Routes.post('/add', addUser);
Routes.get('/users', getUsers);
Routes.post('/conversations/add', addConversation);
Routes.post('/conversations/get', getConversation);
Routes.post('/messages/add', setMessage);
Routes.get('/message/get/:id', getMessage);

export default Routes;