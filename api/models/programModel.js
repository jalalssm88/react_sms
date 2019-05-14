const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
    name:{
        type:String,
    },
    short_code:{
        type:String,
    },
    campus_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'campuses'
    }
});

module.exports = mongoose.model('programs', ProgramSchema);