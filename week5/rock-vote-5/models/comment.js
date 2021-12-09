const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    text: {
        type: String,
        required: true
    },
    commentAuthor: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    commentedON:{
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)