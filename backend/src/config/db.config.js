require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL,{
    dbName:process.env.MONGODB_NAME,
    autoCreate:true,
    autoIndex:true
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})