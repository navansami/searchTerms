const mongoose = require('mongoose')

const uri = "mongodb+srv://navansami:access123@terms.b5sftex.mongodb.net/search"
const dbOptions = {}

const connectMe = async () => {
    await mongoose
        .connect(uri,dbOptions)
        .then(data => console.log("db connected"))
        .catch(err => console.error(err))
}

module.exports = connectMe