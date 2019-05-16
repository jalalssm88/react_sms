const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
    name:{
        type:String,
    },
    short_code:{
        type:String,
    },
    session:{
        type:String,
    },
    program_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'programs'
    },
    students:{
        type:String,
    },
    course:{
        type:String
    }
});

module.exports = mongoose.model('sections', SectionSchema);