const router = require('express').Router();
let Noti = require('../models/noti.model');

router.route('/').get((req, res) => {
    Noti.find()
        .then(notis => res.json(notis))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const classname= req.body.classname;
    const classes = req.body.classes;
    const message = req.body.message;
    

    const newNoti = new Noti({classes,message,classname});

    newNoti.save()
        .then(()=> res.json('noti added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;