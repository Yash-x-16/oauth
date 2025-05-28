import mongoose from "mongoose"; 
import dotenv from "dotenv"


dotenv.config()


export const connectDb = async()=>{
    try{
       await  mongoose.connect(process.env.URL as string)
        console.log("connected")
    }catch(e){
        console.log("error occured",e)
    }
}