const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({

    className: {type: String},
    assignments: {type: Array}, //can this be array of assignment
    //data: {type: subSchema default: {}}
    grade: {type : Number},
    attendance: {type : Boolean},
    meetingTime: {type: String},
    courseDocuments: {type: Array}
})
const Class = mongoose.model('Class', classSchema);

module.exports = Class;