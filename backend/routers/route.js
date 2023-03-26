const express = require("express")

const routes = express.Router()

const {home,second,third,createUser,getUser,editUser,deleteUser} = require("../controllers/usercontroller")

routes.get("/",home)

routes.post("/createUser",createUser)

routes.get("/getUser",getUser)

routes.put("/editUser/:id",editUser)

routes.delete("/deleteUser/:id",deleteUser)

module.exports = routes