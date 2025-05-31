import  Dotenv  from "dotenv"
import { Request,Response,NextFunction } from "express"
import jsonwebtoken ,{JwtPayload}from "jsonwebtoken"


Dotenv.config()
const jwt =process.env.JWT
export const verifyToken = async(req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies.token
    if(!token){
        res.status(401).json({
            message:"no token found !!"
        })
    }
    try{
        const decoded = jsonwebtoken.verify(token,jwt as string)
        if (!decoded || typeof decoded === 'string' || !('id' in decoded)) {
            res.status(401).json({ message: "invalid token" });
        }
        
        req._id = (decoded as JwtPayload).id;
        next()
    }catch(e){
        res.json({
            message:e
        })
    }
}