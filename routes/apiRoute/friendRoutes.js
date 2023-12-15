const router = require('express').Router();

const {
    addfriend,
    removefriend
} = require('../../controllers/friendsControllers');

router.route('/:userId/friends/:friendId')
    .post(addfriend)
    .delete(removefriend);

module.exports = router;