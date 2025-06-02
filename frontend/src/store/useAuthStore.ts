import {create} from "zustand" 
import { axiosInstance } from "../lib/store"
import toast from "react-hot-toast";
interface AuthStore {
    authUser: any; 
    isVerified :any ;
    isCheckingAuth: boolean;
    isSigningup: boolean;
    isLogininup: boolean;
    checkAuth: () => Promise<void>;
    signup: (data: object) => Promise<void>;
    Verify:(code:string)=>Promise<void> ;
  }
  

export const useAuthStore = create<AuthStore>((set)=>({
    authUser :null ,
    isCheckingAuth : true , 
    isSigningup :false,
    isLogininup :false,
    
    
    checkAuth: async ()=>{
        try {
            const res = axiosInstance.get('/auth/checkAuth')

            set({authUser:(await res).data})
        } catch (error) {
            console.log("error in checkAuth is : ",error)
            set({authUser:false})
        }finally{
            set({isCheckingAuth:false})
        }
    },

    signup : async(data:object)=>{
        set({isSigningup:true})
        try {
            const res = await axiosInstance.post('/auth/signup',data)
            set({authUser:res.data})
            toast.success("account created succesfully !",{duration:1500})
        } catch (error) {
            console.log(error)
            toast.error("error in signup")
        }finally{
            set({isSigningup:false})
        }
    },

    isVerified :null ,

    Verify : async(code:string)=>{
        try {
        const code1 = JSON.parse(code)
            set({isSigningup:true})
            const response = await axiosInstance.post('/auth/verifyEmail',code1)
            set({authUser:response.data,isVerified:true})
            console.log(response)
            toast.success("account verified succesfully !!",{duration:1500})
        } catch (error) {
            console.log("error in verify is ; ",error)
            toast.error("invalid or expired code !!",{duration:1500})
        }
    }
}))