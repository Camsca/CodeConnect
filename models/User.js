const {Schema, model} = require('mongoose');

// schema for user
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email:
});