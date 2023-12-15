const { Thought, User } = require('../models/index');

module.exports = {
    // add reaction
    async createReaction(req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                {
                    $addToSet: {
                        reactions: req.body,
                        username: req.body.username

                    }
                },
                {
                    new: true,
            
                }
            );
            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(updatedThought);
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },
    // remove reaction
    async removeReaction(req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                {
                    $pull: {
                        reactions: { reactionId: req.params.reactionId }
                    }
                },
                {
                    new: true
                }
            );
            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(updatedThought);
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },
};