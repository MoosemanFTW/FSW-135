const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    postAuthor: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)