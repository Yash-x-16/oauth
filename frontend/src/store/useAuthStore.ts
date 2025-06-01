import {create} from "zustand" 
import { axiosInstance } from "../lib/store"
import toast from "react-hot-toast";
interface AuthStore {
    authUser: any; 
    isCheckingAuth: boolean;
    isSigningup: boolean;
    isLogininup: boolean;
    checkAuth: () => Promise<void>;
    signup: (data: object) => Promise<void>;
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
    }
}))