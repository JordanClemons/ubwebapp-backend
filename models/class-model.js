const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({

    className: {type: String},
    assignments: {type: Array}, //can this be array of assignment
    //data: {type: subSchema default: {}}
    grade: {type : Number},
    attendance: {type : Boolean},
    meetingTime: {type: String},
    courseDocuments: {type: Array},
    rooms: {type: Array},    //The different 'chats' each student can in
    messages: {type: Array}     //The actual messages a student sends
})
const Class = mongoose.model('Class', classSchema);

module.exports = Class;