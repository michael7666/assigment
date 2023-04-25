const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();


const connectToMongo = async () => {
    try {
      await  mongoose.connect(process.env.MONGODB_URLS,{ useNewUrlParser: true,
        useUnifiedTopology: true}) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
    }
    module.exports = connectToMongo;