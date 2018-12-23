const mongoose = require('mongoose'); 
const { Schema } = mongoose; // destructuring in JS 


const userSchema = new Schema({
    googleID: String 
}); 

mongoose.model('users', userSchema);