const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  username: String,
  password: { type: String },
  profileImg: { type: String }, // allow user to upload image? Sort in front end
  boardType: { type: String, enum: [
    'OneWheel Original',
    'Onewheel Plus',
    'OneWheel XR'
  ]},
  boardImg: String,// allow user to upload image? Sort in front end
  ridingStyle: { type: String, enum: [
    'Street',
    'Off-Road',
    'Freestyle / Tricks'
  ]},
  boardMods: [
    {
      tagname: String
    }
  ],
  followers: [{ type: mongoose.Schema.ObjectId, ref: 'User'}],
  following: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
});

// Throw a validation error when duplicate emails are Created
userSchema.plugin(require('mongoose-unique-validator'));

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  next();
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
