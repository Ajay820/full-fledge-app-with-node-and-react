require("dotenv").config()

const connectToDb = require("./config/database")

const express = require("express")

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectToDb()



const userRoute = require("./routers/route")

app.use("/",userRoute)

// app.use("/second",userRoute)

// app.use("/third",userRoute)

// app.use("/createuser",userRoute)

// app.use("/getUser",userRoute)

// app.use("/edituser/:id",userRoute)

// app.use("/deleteuser/:id",userRoute)

module.exports = app