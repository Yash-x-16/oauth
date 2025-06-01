import {create} from "zustand" 
import { axiosInstance } from "../lib/store"

interface AuthStore {
    authUser: any; // Replace `any` with actual user type if known
    isCheckingAuth: boolean;
    isSigningup: boolean;
    isLogininup: boolean;
    checkAuth: () => Promise<void>;
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
    }
}))