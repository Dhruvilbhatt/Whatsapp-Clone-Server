import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    members: {
        type: Array,
        required: true
    }
},
    {
        timestamps: true
    }
)

const conversations = mongoose.model('conversations', conversationSchema);

export default conversations;