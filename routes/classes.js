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
    const courseDocuments = req.body.courseDocuments;
    const rooms = req.body.rooms;
    const messages = req.body.messages;

    const newClasses = new Class({className,assignments,grade,attendance,meetingTime, courseDocuments, rooms, messages});

    newClasses.save()
        .then(()=> res.json('Course added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:id').post((req, res) => {
  Class.findById(req.params.id)
    .then(classes => {
      classes.className = req.body.className;
      classes.assignments = req.body.assignments;
      classes.grade = req.body.grade;
      classes.attendance = req.body.attendance;
      classes.meetingTime = req.body.meetingTime;
      classes.courseDocuments = req.body.courseDocuments;
      classes.rooms = req.body.rooms;
      classes.messages = req.body.messages;
      classes.save()
        .then(() => res.json('Class updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updatemessage/:id').post((req, res) => {
  Class.findById(req.params.id)
    .then(classes => {
      classes.messages = req.body.messages;
      classes.save()
        .then(() => res.json('Class updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateroom/:id').post((req, res) => {
  Class.findById(req.params.id)
    .then(classes => {
      classes.rooms = req.body.rooms;
      classes.messages = req.body.messages;
      classes.save()
        .then(() => res.json('Class updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
  