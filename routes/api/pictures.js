const express = require('express');
const router = express.Router();

//Load Input validation
const validatePictureInput = require('../../validation/newPicture');

// Load Picture Model
const Picture = require('../../models/Picture');

// @route GET api/pictures/test
//desc Tests pictures route
//access Public
router.get('/test', (req, res) => res.json({ msg: 'pictures works' }));

//@route    POST api/pictures/
//desc      ADD A NEW PICTURE
//access    Public
router.post('/', (req, res) => {
  //input validation
  const { errors, isValid } = validatePictureInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //check if picture exist already
  Picture.findOne({ url: req.body.url }).then(picture => {
    if (picture) {
      errors.url = 'Picture already exists';
      return res.status(400).json(errors);
    } else {
      const newPicture = new Picture({
        title: req.body.title,
        url: req.body.url
      });
      newPicture
        .save()
        .then(picture => res.json(picture))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
