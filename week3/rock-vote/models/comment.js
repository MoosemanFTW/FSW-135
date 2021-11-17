const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },
    commentAuthor: {
        type: Number,
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    commentedON:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)