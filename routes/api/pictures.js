const express = require('express');
const router = express.Router();

// @route GET api/pictures/test
//desc Tests pictures route
//access Public
router.get('/test', (req, res) => res.json({ msg: 'pictures works' }));

module.exports = router;
