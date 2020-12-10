  
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const saltRounds = 10;
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

userSchema.pre('save',function( next ){
  var user = this;

  if(user.isModified('password')){
    bcrypt.genSalt(saltRounds,function(err,salt){
      if(err) return next(err);
  
      bcrypt.hash(user.password,salt, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next()
      })
    })
  }else{
    next()
  }

});

userSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err, false);
    }
    return cb(null, isMatch);
  });
};


const User = mongoose.model('User', userSchema);

module.exports = User;