
const {User} = require('../models/index')

module.exports = {

    // add friend
    async addfriend(req, res){
    try{
const updatedUser = await User.findOneAndUpdate(
  { _id: req.body.userId},
    { 
         $addToSet: {
        friendsId: req.body.friendId },
    },
    {
        new: true,
    }
);
if(!updatedUser){
    return res.status(404).json({message: "User not found"})
    }
    res.json(updatedUser);
}catch(err){
        console.log(error)
        res.status(500).json(err);
    }
},
// remove friend
async removefriend(req, res){
    try{
const updatedUser = await User.findOneAndUpdate(
    { _id: req.body.userId},
        { 
             $pull: {
            friendsId: req.body.friendId },
        },
        {
            new: true
        }
    );
    if(!updatedUser){
        return res.status(404).json({message: "User not found"})
        }
        res.json(updatedUser);
    }catch(err){
        console.log(error)
        res.status(500).json(err);
    }
},
};