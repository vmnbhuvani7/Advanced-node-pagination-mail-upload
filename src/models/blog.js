const mongoose = require('mongoose');
const validator = require('validator')
var mongoosePaginate = require('mongoose-paginate');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    }
}, { timestamps: true })

// pagination
blogSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Blog', blogSchema)