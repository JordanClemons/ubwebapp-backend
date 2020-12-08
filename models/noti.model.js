  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notiSchema = new Schema({

  classname: {type: String},
  message:{type: String},
classes : { type : Array , "default" : []}

}, {
  timestamps: true,
});

const Noti = mongoose.model('Noti', notiSchema);

module.exports = Noti;