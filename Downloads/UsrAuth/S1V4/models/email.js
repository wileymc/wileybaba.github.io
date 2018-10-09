var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
});

EmailSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('You have already signed up!'));
  } else {
    next(error);
  }
});


var Email = mongoose.model('Email', EmailSchema);
module.exports = Email;
