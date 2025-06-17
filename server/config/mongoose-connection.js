const mongoose = require('mongoose');
const debg = require('debug')('development:mongoose');

const connectDB = async () =>{
    try{
       const conn = await mongoose.connect(process.env.MONGODB_URI);
        debg('MongoDB connected successfully');
    }catch (error) {
        debg('MongoDb connection error:', error.message);
        process.exit(1);      
}
}
module.exports = connectDB;