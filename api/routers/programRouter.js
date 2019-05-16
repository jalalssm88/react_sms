const express = require('express');
const router = express.Router();

const Program = require('../models/programModel');

router.post('/create', (req, res) => {
    const newProgram = new Program(req.body);
    newProgram.save().then(program => res.json(program));
});

router.get('/list/:id', (req, res)=>{
    var id = req.params.id
    console.log('iddd', id)
    var query ={
        "campus_id":id
    }
    Program.find(query).then(program=> res.json(program));
});

router.get('/lists', (req, res)=>{
    Program.find().then(program=> res.json(program));
});



module.exports = router