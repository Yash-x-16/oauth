import { Request, Response } from "express";
import crypto from "crypto"
import bcrypt from "bcrypt"
import { getVerificationCode } from "../utils/getverificationcode";
import { Token } from "../utils/generateToken";
import mongoose, { ObjectId } from "mongoose";
import { getVerificationEmail ,getPasswordResetEmail} from "../mailtrap/emails";
import { user } from "../models/user.model";

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


export const verifyEmail=async (req:Request,res:Response)=>{
    const {code }= req.body
    try{
       const User= await user.findOne({
            verificationToken:code,
            verificationTokenExpiresAt:{$gt:Date.now()}
        })

        if(!User){
            res.send({
                message:"no user found !"
            })
        }
        if (User) {
            User.isVerified = true;
            User.verificationToken = undefined;
            User.verificationTokenExpiresAt = undefined;
          }
        await User?.save()
        res.json({
            message:"verification succesfull !!"
        })
    }catch(e){
        console.log(e)
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


export const forgotPassword = async(req :Request,res :Response)=>{
    const {email} = req.body ; 
    
    try{
        const User = await user.findOne({
            email
        })

        if(!user){
            res.status(401).send({success:false,message:"user not found"})
        }

        if(User){
            const resetToken = crypto.randomBytes(20).toString("hex")
            const resetTokenExpiresAt = new Date(Date.now() + 1 * 60 * 60* 1000) ; 
            User.resetPasswordToken =resetToken ; 
            User.resetPasswordTokenExpiresAt = resetTokenExpiresAt

            await User.save() 
           await getPasswordResetEmail(User.email,`${process.env.LINK}/forgotPassword/${resetToken}`)
           res.status(201).send({
            sucess :true ,
            message:"reset link is sent to the registered email"
           })

        }
    }catch(e){
        res.json({
            suceess:false ,
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