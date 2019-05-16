const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionModel = new Schema({
    name:{
        type:String,
    },
    short_name:{
        type:String,
    },
    start_date:{
        type:Date,
    },
    end_date:{
        type:Date,
    },
    is_active:{
        type:Boolean
    }
});

module.exports = mongoose.model('sessions', SessionModel);