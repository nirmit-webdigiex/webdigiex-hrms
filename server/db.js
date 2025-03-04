const mongoose = require("mongoose");
const dotenv = require("dotenv")
const MONGODB_URI = process.env.MONGO_URI || "mongodb+srv://nirmitwebdigiex:Rz3gp4m8aV1alVpk@hrms.pkay2.mongodb.net/?retryWrites=true&w=majority&appName=hrms";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully!")
    } catch (error) {
        console.log("❌ MongoDB Connection Failed:",error.message)
    }
}

module.exports = connectDB;