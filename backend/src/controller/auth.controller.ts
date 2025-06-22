import { Request, Response } from "express";
import crypto from "crypto"
import bcrypt from "bcrypt"
import { Token } from "../utils/generateToken";
import mongoose from "mongoose";
import { user } from "../models/user.model";
import cloudinary from "../utils/cludinary.config";


export const signup = async (req :Request,res :Response)=>{
    
    const {name,email,password}=req.body
    
    try{

        if(!name || !email || !password){
          res.status(400).send({
            message:"all fields are required !"
          })
        }

        const alreadyExist = await user.findOne({
            email:email
        })

        if(alreadyExist){
             res.status(400).json({success:false,message:"user already exist"})
        }

        const hashedPassword = await bcrypt.hash(password,5)
       


        const User = new user({
            email,
            password:hashedPassword ,
            name,
        })

        await User.save()
        Token(res,User._id as mongoose.Types.ObjectId) ; 
        res.send({
            success:true , 
            message:"user Created Succesfully" ,
            user:{...User,
            password:null}
        }) 
      
    }catch(e){
        console.log(e)
         res.status(400).json({success:false,message:e})
    }   
}




export const signin = async (req :Request,res :Response)=>{
    const {email,password} = req.body ; 
    try{
        const User = await user.findOne({
            email
        })

        if(!User){
            res.status(401).send({
                message:"unauthorize!"
            })
        } 
        if(User){
                    const isUserValid =await bcrypt.compare(password,User?.password)
                    if(isUserValid===false){
                        res.status(401).send({
                            message:"password didn't match !!"
                        })
                    }else{

                        Token(res,User._id) ;
                        User.lastLogin = new Date()
                        await User.save()

                        res.send({
                            success:true , 
                            message:"logged in !"
                        })
                    
                    }
        }

    }catch(e){
        console.log("error is : ",e)
        res.status(400).send({
            sucess:false ,
            message:e
        })
    }

}



export const signout = async (req :Request,res :Response)=>{


res.clearCookie("token")
res.send({
    message:"singout succesfull !"
})


}



export const checkAuth = async (req :Request,res :Response)=>{
    try{
        const User  = await user.findOne(req._id).select("-password")
        
        if (!User){res.status(401).json({
            message:"user not found" 
        })}

        if(User){
            res.status(201).json({
                success:true , 
                user : User
            })
        }
    }catch(e){
        res.status(402).json({
            message :e
        })
    }
}

export const updateProfile = async (req :Request,res :Response)=>{
     
    try{
    
        const {profileImage} = req.body
        if(!profileImage){
           res.status(401).json({
                message:"unable to upload the image "
            })
        }
        const userId = req._id

        const response= await cloudinary.uploader.upload(profileImage)
        const updatedUser = await user.findByIdAndUpdate(userId,{profileImage:response.secure_url},{new:true})
        res.status(200).json(updatedUser)

        }catch{
            res.status(401).json({
                message:"unable to upload the image "
            })
               }
}


