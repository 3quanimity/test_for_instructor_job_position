const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema Creation
const PictureSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Picture = mongoose.model('pictures', PictureSchema);
