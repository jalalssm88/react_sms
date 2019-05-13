const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampusSchema = new Schema({
    name:{
        type:String,
    },
    short_code:{
        type:String,
    },
    phone_no:{
        type:String,
    },
    country:{
        type:String,
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    postal_code:{
        type:String,
    },
    address:{
        type:String,
    },
    website:{
        type:String,
    },
    campus_type:{
        type:String,
    }
});

module.exports = mongoose.model('campuses', CampusSchema);