const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"this is required"],
        trim:true,
        maxlength:[20,"max character is 25"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    }
})

module.exports = mongoose.model("user",userSchema)
