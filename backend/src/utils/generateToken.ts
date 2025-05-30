import {  Request, Response } from "express"
import jsonwebtoken from "jsonwebtoken"
import mongoose, { ObjectId } from "mongoose"
import dotenv from "dotenv"


const jwt = jsonwebtoken
dotenv.config()
const JWT = process.env.JWT


export const Token = (res:Response,userId :mongoose.Types.ObjectId)=>{
 const auth =   jwt.sign( {id:userId} ,JWT as string,{
        expiresIn:"7d" 
    })

    res.cookie("token",Token,{
        httpOnly:true ,
        sameSite:"strict" ,
        maxAge:7*24 *60*60 * 1000 

    })

    return auth
}