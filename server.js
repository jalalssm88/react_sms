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
app.use('/campus', Campus);

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
