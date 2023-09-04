const server = require('./config/app')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 8000

connectDB()
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})