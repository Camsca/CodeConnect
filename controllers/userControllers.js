const User = require('../models/index')

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
               return res.status(404).json({message: 'User not found'})
                
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
    //Update User by _id
    async updateUser(req,res){
        try{
 const user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true })
            res.json(user)
        }catch(err){
            res.status(500).json(err);
        }
    },
    //Delete User by _id
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.userId);
            
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            res.json({ message: 'User deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
//BONUS: Remove a user's associated thoughts when deleted.???
}
