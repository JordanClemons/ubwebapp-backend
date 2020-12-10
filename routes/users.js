const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user-model');

router.route('/').get((req, res) => {
User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.get('/login/:id/:password', (req, res) => {
  var password = "";
  //res.json(req.params.password)

  User.findById(req.params.id)
    
    .then(user =>{
      

      //find user exist or not

            //if user exist than compare password
            //password comes from the user
            //user.password comes from the database
            bcrypt.compare(req.params.password, user.password, (err, data) => {
            //if error than throw error
            // if (err) throw err

            //if both match than you can do anything
            if (data) {
              return res.json({ msg: "Login success" })
            } else {
              return res.json({ msg: "Invalid credencial" })
            }

            })

    })

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

  router.route('/updatePassword/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(users => {
        users.password = req.body.password;
        
        users.save()
          .then(() => res.json('User updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;