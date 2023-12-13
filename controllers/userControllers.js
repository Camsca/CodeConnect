const User = require('../models/User')

module.exports = {
    //Get All Users
    async getUsers(req,res){
        try{
            const users = await User.find()
            res.json(users)
        }catch(err){
            res.status(500).json(err);
        }
    },
    //Get One User by _id
    async getUser(req,res){
        try{
            const user = await User.findById(req.params.userId)
            .populate('thoughts')
            .populate('friends')

            if(!user){
                res.status(404).json({message: 'User not found'})
                
            }res.json(user)
        }catch(err){
            res.status(500).json(err);
        }
    },

//Create User
    async createUser(req,res){
        try{
            const user = await User.create(req.body)
            res.json(user)
        }catch(err){
            res.status(500).json(err);
        }
    },
}
