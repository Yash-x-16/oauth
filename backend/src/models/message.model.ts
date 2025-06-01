import mongoose, { model, mongo, Mongoose, Schema } from "mongoose"; 
const messageSchema = new Schema({
    senderId:{
        type:mongoose.Types.ObjectId , 
        ref:"user",
        required:true
    },
    receiverId:{
        type:mongoose.Types.ObjectId , 
        ref:"user",
        required:true
    },
    text:{
        type:String
    },
    image:{
        type:String
    }
})

export const message = model("message",messageSchema)