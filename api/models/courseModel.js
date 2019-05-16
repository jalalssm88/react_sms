const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name:{
        type:String,
    },
    short_code:{
        type:String,
    },
    compulsory:{
        type:Boolean,
    },
    course_teacher:{
        type:String,
    },
    course_session:{
        type:String,
    },
    course_program:{
        type:String,
    }
   
});

module.exports = mongoose.model('courses', CourseSchema);