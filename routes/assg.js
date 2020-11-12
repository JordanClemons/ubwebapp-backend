const router = require('express').Router();
let Assg = require('../models/assg-model');

router.route('/').get((req, res) => {
    Assg.find()
        .then(assg => res.json(assg))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    //const username = req.body.username; //is this required???
   
    const courseID = req.body.courseID;
    const title = req.body.title;
    const deadline = req.body.deadline;
    const maxScore = req.body.maxScore;
    const scoreAchieved = req.body.scoreAchieved;
    //const submissionPDF = req.body.submissionPDF;

    const newAssg = new Assg({courseID,title,deadline,maxScore,scoreAchieved});

    newAssg.save()
        .then(()=> res.json('Assignment added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;