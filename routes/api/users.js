const express = require('express');
const router = express.Router();

//Load input validation
const validateRegisterInput = require('../../validation/newUser');

//Load User model
const User = require('../../models/User');

//@route    GET api/users/test
//desc      Tests users route
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

//@route    POST api/users/add_new_user
//desc      ADD A NEW USER
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

//@route    GET api/users/
//desc      GET ALL USERS
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

//@route    GET api/users/id
//desc      GET ONE USER
router.get('/:id', (req, res) => {
  User.findOne(req.param.id)
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

//@route    DELETE api/users/id
//desc      DELETE ONE USER
router.delete('/:id', (req, res) => {
  User.findOneAndDelete(req.params.id)
    .then(() => res.send('user deleted'))
    .catch(err => res.send(err));
});

//@route    EDIT api/users/id
//desc      EDIT ONE USER
router.put('/:id', (req, res) => {
  User.findOneAndUpdate(req.params.id, { $set: { ...req.body } })
    .then(user => res.send(user))
    .catch(err => res.send(err));
});

module.exports = router;
