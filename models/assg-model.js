const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assgSchema = new Schema({
    //username required???
    courseID: {type: String},
    title: {type: String}, //what does this do??
    deadline:{type: Date},
    maxScore:{type: Number},
    scoreAchieved:{type: Number},
    //submissionPDF:{type: File} //store on a filesystem, able to submit and retrieve

}, {
    timestamps: true,
});

const Assg = mongoose.model('Assignment', assgSchema);

module.exports = Assg;