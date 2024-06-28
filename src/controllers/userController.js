const User=require('../models/User')

exports.postUser=async(req,res,next)=>{
    const {firstName,lastName,email,password,phoneNumber,role}=req.body;
    console.log(role)
    try{
        const existingUserId= await  User.findOne({email:email})
        if(!existingUserId){
          await User.create({firstName,lastName,email,password,phoneNumber,role})
          return res.status(201).json("Success")
        }
        return res.status(409).json("Error");
    }
    catch(error){
        return res.status(500).json("Error");
    }
}

exports.loginUser=(req,res,next)=>{
    const {email,password}=req.body;
    console.log("entering")
        User.findOne({email:email,password:password}).then(userData=>{
            if(userData){
                return res.status(200).json({id:userData._id,role:userData.role})
            }
                return res.status(401).json("Invalid crendentials")
        }).catch(error=>{
            res.status(500).json(error.message  )
        })
 
}



// User.findOne({email:email}).then(result=>{
//     console.log(result)
//     if(!result){
//         console.log("Entering")
//         User.create({firstName,lastName,email,password,phoneNumber,role}).then(result=>{
//             return res.status(201).json("Succes");
//         })
//     }
//     console.log("Not Entering")
//     return res.status(409).json("Error");
// })
// When the email is there i am throing error biy