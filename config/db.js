const mongoose = require('mongoose')

// MongoDB Options
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false,
    dbName: "hackathon",
    poolSize: 10
};

// Connect to MongoDB
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URI, options)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB