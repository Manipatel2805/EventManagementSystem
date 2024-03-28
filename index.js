const express=require("express")
const router = require("./routes/routes")
require('dotenv').config();

const app=express()

app.use(express.json())
app.use("/events",router)
const port=process.env.PORT
console.log(port)
app.listen(port,()=>{
    console.log("success")
})