const express = require('express');
const router = express.Router();

const Campus = require('../models/campusModel');

router.post('/create', (req, res) => {
    const newCampus = new Campus(req.body);
    newCampus.save().then(campus => res.json(campus));
});

router.get('/list', (req, res) => {
    Campus.find().then(campus => res.json(campus));
});

router.get('/list/:id', (req, res)=>{
    var id = req.params.id
    Campus.findById(id).then(campus=> res.json(campus));
});

module.exports = router