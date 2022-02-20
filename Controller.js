import user from './Schema/User.js';
import conversations from './Schema/Conversations.js';
import message from './Schema/Messages.js'

export const addUser = async (request, response) => {
    try {
        const userExist = await user.findOne({googleId: request.body.googleId})

        if (userExist)
        {
            response.status(200).json('User already exists!!');
            return
        }

        const newUser = new user(request.body);
        await newUser.save();
        response.status(200).json('New user added succesfully to the Database!!');
    }
    catch (error) {
        response.status(500).json('Error while adding user: ', error.message);
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await user.find({})
        response.status(200).json(users);
    }
    catch (error) {
        response.status(500).json('Error while fetching/getting users: ', error.message);
    }
}

export const addConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const conversationExist = await conversations.findOne({ members: {$all: [senderId, receiverId]}}); 
        
        if (conversationExist)
        {
            response.status(200).json('Conversation already exists!!');
            return
        }

        const newConversation = new conversations({
            members: [senderId, receiverId]
        });
        
        await newConversation.save();
        response.status(200).json('New conversation added succesfully to the Database!!');
    }
    catch (error) {
        response.status(500).json('Error while adding conversation: ', error.message);
    }
}

export const getConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const conversation = await conversations.findOne({ members: {$all: [senderId, receiverId]}});
        response.status(200).json(conversation);
    }
    catch (error) {
        response.status(500).json('Error while fetching/getting conversation: ', error.message);
    }
}

export const setMessage = async (request, response) => {
    try {
        const newMessage = new message(request.body);
        await newMessage.save();
        response.status(200).json('New message added succesfully to the Database!!');
    }
    catch (error) {
        response.status(500).json(error.message);
    }
}

export const getMessage = async (request, response) => {
    try {
        const messages = await message.find({ conversationId: request.params.id });
        response.status(200).json(messages);
    } catch (error) {
        response.status(500).json(error);
    }

}