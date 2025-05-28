import { Request, Response } from "express";
import { user } from "../models/user.model";
import bcrypt from "bcrypt"
import { getVerificationCode } from "../utils/getverificationcode";

export const signup = async (req :Request,res :Response)=>{
    
    const {name,email,password}=req.body
    const hashedPassword = await bcrypt.hash(password,5)
    const verificationCode = getVerificationCode()
    try{

        if(!name || !email || !password){
            throw new Error("all fields are required !!")
        }

        const alreadyExist = await user.findOne({
            email:email
        })

        if(alreadyExist){
             res.status(400).json({success:false,message:"user already exist"})
        }

        const User = new user({
            email,
            password:hashedPassword ,
            name,
            verificationToken:verificationCode ,
            verificationTokenExpiresAt:Date.now()+ 24*60*60*1000
        })

        await User.save()
    }catch(e){
         res.status(400).json({success:false,message:e})
    }   
}


export const signin = async (req :Request,res :Response)=>{

}


export const signout = async (req :Request,res :Response)=>{

}