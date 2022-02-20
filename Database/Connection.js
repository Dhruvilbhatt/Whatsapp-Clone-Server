import mongoose from 'mongoose';

const connection = async (username, password, database) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.0yy2m.mongodb.net/${database}?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database connected succesfully!!!');
    }
    catch (error) {
        console.log('Error while connecting to Database: ', error.message);
    }
}

export default connection;