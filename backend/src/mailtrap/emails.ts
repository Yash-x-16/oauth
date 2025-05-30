import { mailTrapclient,sender } from "./mailtrap.config"
export const getVerificationEmail = async(email:String,code:Number)=>{
    const recipient= [{email}]

    try{
        const response = await mailTrapclient.send({
            from:sender ,
            to:recipient ,
            subject :"verify your email" ,
            text:"code :" + code
        })
       console.log(response)
    }catch(e){
     console.log("error occured ",e)   
    }
}