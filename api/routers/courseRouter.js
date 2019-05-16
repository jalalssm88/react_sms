const express = require('express');
const router = express.Router();

const Course = require('../models/courseModel');

router.post('/create', (req, res) => {
    const newCourse = new Course(req.body);
    newCourse.save().then(course => res.json(course));
});

router.get('/list', (req, res) => {
    Course.find().then(course => res.json(course));
});

// router.get('/list/:id', (req, res)=>{
//     var id = req.params.id
//     Course.findById(id).then(course=> res.json(course));
// });

module.exports = router