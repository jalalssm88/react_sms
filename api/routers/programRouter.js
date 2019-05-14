const express = require('express');
const router = express.Router();

const Program = require('../models/programModel');

router.post('/create', (req, res) => {
    const newProgram = new Program(req.body);
    newProgram.save().then(program => res.json(program));
});

// router.get('/list', (req, res) => {
//     Program.find().then(program => res.json(program));
// });

router.get('/list/:id', (req, res)=>{
    var id = req.params.id
    console.log('iddd', id)
    var query ={
        "campus_id":id
    }
    Program.find(query).then(program=> res.json(program));
});

// router.get('/list/:id', (req, res) => {
//     const id = req.params.id;
//     Campus.findById(id).exec().then(doc => {res.json(doc)});
// });

// router.get('/list/:id', (req, res, next)=> {
//     const id = req.params.id;
//     Campus.findById(id).exec().then(doc =>{
//         res.status(200).json(doc)
//     }).catch(error =>{
//         console.log('error', error);
//         res.status(505).json({error:error})
//     }) 
// })

module.exports = router