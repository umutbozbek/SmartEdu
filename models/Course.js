const mongoose = require('mongoose');
const slugify = require('slugify');
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
    },
    slug: {
        type: String,
        unique: true,

    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

});
CourseSchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        Strict: true,
    })
    next();
})


const Course = mongoose.model('Course', CourseSchema)

module.exports = Course     