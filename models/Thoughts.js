const {Schema, model} = require('mongoose');

//subdocument schema for reactions
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // define luego???
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);
// schema for thoughts
const thoughtSchema = new Schema({
    thoghtText: {
        type: String,
        required: true,
       minlength: 1,
         maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // define luego???
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]

},
{
toJSON: {
    virtuals: true,
    getters: true
},
id: false

}
);
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}
);
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;