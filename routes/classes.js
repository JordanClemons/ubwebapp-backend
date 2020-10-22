const router = require('express').Router();
let Class = require('../models/class-model');

router.route('/').get((req, res) => {
    Class.find()
      .then(classes => res.json(classes))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req,res) => {
    const className = req.body.className;
    const assignments = req.body.assignments;
    const grade = req.body.grade;
    const attendance = req.body.attendance;
    const meetingTime = req.body.meetingTime;

    const newClasses = new Class({className,assignments,grade,attendance,meetingTime});

    newClasses.save()
        .then(()=> res.json('Course added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
  