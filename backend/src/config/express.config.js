const express = require("express"); 
const cors = require("cors");
const router = require("./route.config");
require("./db.config")

const app = express();

const allowedorigin = [
    'http://localhost:5173'
]
const corsOptions = {
    origin:(origin, callback)=>{
        if(!origin || allowedorigin.includes(origin)){
            callback(null, type);
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credential:true,
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization'],
    maxAge:60*60*24
}


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(router)


app.use((req, res, next)=>{
    next()
})
app.use((req, res, next) => {
    next({ status: 404, message: "Resource not found." });
});

app.use((error, req,res,next)=>{
    console.log(error)
    let statusCode = error.status || 500;
    let message = error.message || "Server error ...";
    let details = error.details || null;


    res.status(statusCode).json({
        result:details,
        message:message,
        meta:null
    })
})

module.exports = app;
