const express = require('express');
const router = express.Router();
// @route   GET api/boards
// @desc    Test route
// @access  Private

router.get('/', (req, res) => res.send('Boards route'));

module.exports = router;
