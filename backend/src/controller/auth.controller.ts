import { Request, Response } from "express";
import { user } from "../models/user.model";
import bcrypt from "bcrypt"
import { getVerificationCode } from "../utils/getverificationcode";
import { Token } from "../utils/generateToken";
import mongoose, { ObjectId } from "mongoose";
import { getVerificationEmail } from "../mailtrap/emails";
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
        const verificationCode = parseInt(getVerificationCode())


        const User = new user({
            email,
            password:hashedPassword ,
            name,
            verificationToken:verificationCode ,
            verificationTokenExpiresAt:Date.now()+ 24*60*60*1000
        })

        await User.save()
        Token(res,User._id as mongoose.Types.ObjectId) ; 
        res.send({
            success:true , 
            message:"user Created Succesfully" ,
            user:{...User,
            password:null}
        }) 
       await getVerificationEmail(User.email,verificationCode)
    }catch(e){
         res.status(400).json({success:false,message:e})
    }   
}


export const signin = async (req :Request,res :Response)=>{

}


export const signout = async (req :Request,res :Response)=>{

}