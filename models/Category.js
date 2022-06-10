const mongoose = require('mongoose');
const slugify = require('slugify');
const Scheema = mongoose.Schema

const CategorySchema = new Scheema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    slug: {
        type: String,
        unique: true,
    }

});
CategorySchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        Strict: true,
    })
    next();
})


const Category = mongoose.model('Category', CategorySchema)

module.exports = Category     