const express = require('express');
const router = express.Router();

//Load User model
const User = require('../../models/User');

//@route    GET api/users/test
//desc      Tests users route
//access    Public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

//@route    GET api/users/add
//desc      Add a new user
//access    Public
router.post('/add_new_user', (req, res) => {
  //check if surName exist already (can be used for email uniqueness check)
  User.findOne({ surName: req.body.surName }).then(user => {
    if (user) {
      return res.status(400).json({ surName: 'Surname already exists' });
    } else {
      const newUser = new User({
        name: req.body.name,
        surName: req.body.surName,
        birthYear: req.body.birthYear,
        birthPlace: req.body.birthPlace
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
