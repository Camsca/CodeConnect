const {Schema, model} = require('mongoose');

// schema for thoughts

const thoughtSchema = new Schema({
    thoghtText: {
        type: String,
        required: true,
       minlength: 1,
         maxlength: 280
    },
});