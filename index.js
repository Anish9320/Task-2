const express = require("express")
const { Router } = require("./routes/router")
const { Auth } = require("./middleware/Auth")
const cors = require("cors")
const app = express()

app.use(cors({
    origin: ['http://localhost:3000,https://sspd-frontend.vercel.app'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
//body data
app.use(express.json({limit: '50mb'}))                         
app.use(express.urlencoded({limit: '50mb', extended:true}))
app.use(Auth)

app.use("/api",Router)
app.listen(5000,()=>{
    console.log("Server running at 5000!")
})