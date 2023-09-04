const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

const termsRouter = require('../routes/terms')

app.use(express.json())
app.use(cors('*'))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).json({
        message: "success",
        data: "waiting for data"
    })
})

app.use('/api/v1/terms', termsRouter)


module.exports = app;