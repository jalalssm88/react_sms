const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://jalal:jalal4488@cluster0-shard-00-00-vrbhz.mongodb.net:27017,cluster0-shard-00-01-vrbhz.mongodb.net:27017,cluster0-shard-00-02-vrbhz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true},()=>{
    console.log('connected to mongo db');
});

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

const Campus = require('./api/routers/campusRouter');
const Program = require('./api/routers/programRouter');
const Section = require('./api/routers/sectionRouter');
const Session = require('./api/routers/sessionRouter');
const Course = require('./api/routers/courseRouter');

app.use('/campus', Campus);
app.use('/program', Program);
app.use('/section', Section);
app.use('/session', Session);
app.use('/course', Course);


const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
