const mongoose = require('mongoose')
const Scheema = mongoose.Schema

const CourseSchema = new Scheema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});



const Course=mongoose.model('Cource',CourseSchema)

module.exports=Course