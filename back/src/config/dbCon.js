const mongoose = require("mongoose");
require("dotenv").config();

const dbConfig = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI="mongodb+srv://DylanCorrea:7DxA5ZVPiOSrRo8F@cluster0.4bjkieq.mongodb.net/movies?retryWrites=true&w=majority")
}

module.exports = dbConfig