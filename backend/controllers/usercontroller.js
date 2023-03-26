const User = require("../model/user")

exports.home = (req,res)=>{
    res.send("Hello from controllers")
}

exports.createUser= async (req,res)=>{
    try{
        const {name,email} = req.body

        if(!name || !email){
            res.send("email and name is required")
        }

        const Eemail = await User.findOne({email})

        if(Eemail){
            throw new Error("user Already exist")
        }

        const user = await User.create({
            name,
            email
        }) 

        res.status(200).json({
            success:true,
            message:"user created successfully",
            user
        })


    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"email already exist"
        })
    }
}

exports.getUser=async (req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json({
            success:true,
            users
        })
    }
    catch(error){
        console.log(error)
        res.status(401).json({
            success:false,
            mesaage: error.message
        })
    }
}

exports.editUser =async(req,res)=>{
    try{

        const email1 =  req.body.email

        const Uemail = await User.findOne({email1})

        console.log(Uemail)
        console.log(email1)

        if(email1 == Uemail.email){
            res.status(401).send("please enter different email id")
        }
        else{
            
        const user = await User.findByIdAndUpdate(req.params.id, req.body)

        res.status(200).json({
         success:true,
         message:"updated data "
        })
        }
    }
    catch(error){
        res.status(401).json({
            success:false,
            message:error.message
        })

    }
}

exports.deleteUser = async(req,res)=>{
    try{

        const duser = req.params.id
        const user = await User.findByIdAndDelete(duser)

        const suser = await User.findById(req.params.id)

        res.status(200).json({
            success:true,
            suser,
            message: "User Deleted Successfully"
        })
    }
    catch(error){
        res.status(401).json({
            success:true,
            message:error.message
        })
    }
}


