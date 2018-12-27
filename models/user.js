const mongoose = require('mongoose'); 
const { Schema } = mongoose; // destructuring in JS 


const userSchema = new Schema({
    googleId: String 
}); 

mongoose.model('users', userSchema);