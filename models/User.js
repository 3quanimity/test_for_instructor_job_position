const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema Creation
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surName: {
    type: String,
    required: true
  },
  birthPlace: {
    type: String,
    required: true
  },
  birthYear: {
    type: Number,
    required: true
  },
  pictures: {
    type: Schema.Types.ObjectId,
    ref: 'pictures'
  }
});

module.exports = User = mongoose.model('users', UserSchema);
