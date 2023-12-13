const {Schema, model} = require('mongoose');

// schema for user
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

}
);
// crear friend
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
}
);

const User = model('User', userSchema);

module.exports = User;