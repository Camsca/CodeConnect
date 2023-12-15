const router = require('express').Router();
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    removeThought,

} = require('../../controllers/thoughtsController');

router.route('/')
    .get(getThoughts)
    .post(createThought);

router.route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(removeThought); 

module.exports = router;