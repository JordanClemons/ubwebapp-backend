const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    className: {type: String},
    assignments: {type: Array},
    grade: {type : Number},
    attendance: {type : Boolean},
    meetingTime: {type: String}


})
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
