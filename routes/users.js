const router = require('express').Router();
let User = require('../models/user-model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const UBIT = req.body.UBIT;
  const email = req.body.email;
  const classes = req.body.classes;
  const classUpdates = req.body.classUpdates;
  const assignmentUpdates = req.body.assignmentUpdates;

  const newUser = new User({username, password, UBIT, email, classes, 
    classUpdates, assignmentUpdates});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(users => {
        users.username = req.body.username;
        users.password = req.body.password;
        users.UBIT = req.body.UBIT;
        users.email = req.body.email;
        users.classes = req.body.classes;
        users.classUpdates = req.body.classUpdates;
        users.assignmentUpdates = req.body.assignmentUpdates;
  
        users.save()
          .then(() => res.json('User updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;