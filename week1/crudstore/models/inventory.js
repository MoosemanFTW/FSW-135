const mongoose = require("mongoose")
const schema = mongoose.Schema

const invSchema = new schema({
    itemName: {
        type: String,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true,
        min: 5
    }
})

module.exports = mongoose.model('inventory', invSchema)