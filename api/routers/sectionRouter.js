const express = require('express');
const router = express.Router();

const Section = require('../models/sectionModel');

router.post('/create', (req, res) => {
    const newSection = new Section(req.body);
    newSection.save().then(section => res.json(section));
});

router.post('/assign', (req, res) => {
    const newCourse = new Section(req.body);
    newCourse.save().then(course => res.json(course));
});



router.get('/list/:id', (req, res)=>{
    var id = req.params.id
    console.log('iddd', id)
    var query ={
        "program_id":id
    }
    Section.find(query).then(section=> res.json(section));
});


module.exports = router