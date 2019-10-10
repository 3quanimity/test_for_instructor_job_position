const express = require('express');
const router = express.Router();

//Load input validation
const validateRegisterInput = require('../../validation/newUser');

//Load User model
const User = require('../../models/User');

//@route    GET api/users/test
//desc      Tests users route
//access    Public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

//@route    POST api/users/add_new_user
//desc      ADD A NEW USER
//access    Public
router.post('/add_new_user', (req, res) => {
  //input validation
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //check if surName exist already (can be used for email uniqueness check)
  User.findOne({ surName: req.body.surName }).then(user => {
    if (user) {
      errors.surName = 'Surname already exists';
      return res.status(400).json(errors);
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
