import { Address } from "mailtrap"
import { mailTrapclient,sender } from "./mailtrap.config"
export const getVerificationEmail = async(email:String,code:Number)=>{
    const recipient= [{email}]

    try{
        const response = await mailTrapclient.send({
            from:sender ,
            to:recipient as Address[] ,
            subject :"verify your email" ,
            text:"code :" + code
        })
       console.log(response)
    }catch(e){
     console.log("error occured ",e)   
    }
}

export const getPasswordResetEmail = async(email:string,Link:string)=>{
    const recipient =[ {email}]
    try{
        const response = await mailTrapclient.send({
            from:sender ,
            to :recipient ,
            subject:"reset your password",
            text:`please click on this link to reset password: ${Link}`
        })
        console.log(response)
    }catch(e){
        console.log("error in getPasswordResetEmail is :" ,e)
    }
}