const mongoose = require('mongoose')

const termSchema = new mongoose.Schema({
    term: {
        type:       String,
        required:   true
    },
    timestamps: Date
})

module.exports = mongoose.model('terms', termSchema)