import  { Request, Response } from  "express" 
import { user } from "../models/user.model"
import { message } from "../models/message.model"
import cloudinary from "../utils/cludinary.config"

export const getUsers = async (req:Request,res:Response)=>{
    try{
        const loggedInUserId = req._id
        const filteredUsers = await user.find({_id:{$ne:loggedInUserId}}).select("-password")
        res.status(200).json({
            filteredUsers
        })
    }catch(e){
        res.status(400).json({
            e
        })
    }
}

export const getMessages = async (req:Request,res:Response)=>{
    try {
        const user = req.params
        const me = req._id
        const messages = await message.find({
             $or:[
                {
                    senderId:me,
                    receiverId:user
             },{
                senderId:user , 
                receiverId:me
             }
            ]
        })

        res.status(200).json(messages)
    } catch (error) {
        res.status(400).json({error,message:"error in message controller"})
    }
}

export const sendMessages = async (req:Request,res:Response)=>{
    try {
        const {text,image} = req.body
        const sender =req._id
        const reciever = req.params
        let imageUrl ;
        if(image){
            const uploadResponse = cloudinary.uploader.upload(image)
            imageUrl = (await uploadResponse).secure_url
        }
        const newMessage = new message({
            text,
            image:imageUrl , 
            senderId:sender,
            receiverId:reciever
        }) 

        await newMessage.save()
        res.status(200).json({
            newMessage
        })
    } catch (error) {
        res.status(400).json({
           error,
           message:"error in the sendMessage controller !! "
        })
    }
}