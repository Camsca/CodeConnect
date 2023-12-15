const {Thought} = require('../models/Thoughts');
const { User } = require('../models/User');

module.exports = {
    //Get All Thoughts
    async getThoughts(req,res){
        try{
            const thoughts = await Thought.find()
            res.json(thoughts)
        }catch(err){
            res.status(500).json(err);
        }
    },
//Get One Thought by _id
async getThought(req,res){
    try{
        const thought = await Thought.findById(req.params.thoughtId)
        if(!thought){
            return res.status(404).json({message: 'Thought not found'})
        }res.json(thought)
    }catch(err){
        res.status(500).json(err);
    }
},
//Create Thought
async createThought(req,res){
    try{
        const thought = await Thought.create(req.body);
 const user = await User.findOneAndUpdate(
        {_id: req.body.userId},
        {$push: {thoughts: thought._id}},
{ 
    new: 
    true
}
);
if(!user){
    return res.status(404).json({message: 'User not found'})
}
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
//Update Thought by _id
async updateThought(req,res){
    try{
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId, 
            req.body, {
            new: true,
        });
        if(!thought){
            return res.status(404).json({message: 'Thought not found'})
        }
        res.json(thought)
    }catch(err){
        res.status(500).json(err);
    }
},
};
