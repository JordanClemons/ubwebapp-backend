  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  UBIT: {type: String},
  email: {type: String}, 
  classes : { type : Array , "default" : []},
  /* Settings */
  classUpdates: {type: String},
  assignmentUpdates: {type: String}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;