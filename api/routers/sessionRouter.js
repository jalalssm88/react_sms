const express = require('express');
const router = express.Router();

const Session = require('../models/sessionModel');

router.post('/create', (req, res) => {
    const newSession = new Session(req.body);
    newSession.save().then(session => res.json(session));
});

router.get('/list/', (req, res)=>{
    Session.find().then(session=> res.json(session));
});




module.exports = router