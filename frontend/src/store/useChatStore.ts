import { create } from "zustand";
import toast from "react-hot-toast"; 
import { axiosInstance } from "../lib/store";

interface ChatStore{ //@ts-ignore
    messages :Array , //@ts-ignore
    users:Array ,
    selectedUser :any  , 
    isUsersLoading:boolean,
    isMessageLoading:boolean,
    getUsers :()=>void , 
    getMessages : (userId:string)=>void , 
    setSelectedUser : (selectedUser :string)=>void
}


export const useChatAuth = create<ChatStore>((set)=>({
    messages : [] ,
    users : [] , 
    selectedUser : null , 
    isUsersLoading  :false , 
    isMessageLoading:false ,
    getUsers : async()=>{
        set({isUsersLoading:true}) ; 
        try{
            const res = await axiosInstance.get('/message/users') ;
            set({users:res.data})
        }catch(e){
            toast.error(e as string) 
        }finally{
            set({isUsersLoading:false})
        }
    }  , 
    
    getMessages :async (userId :string)=>{
        set({isMessageLoading:true}) ;
        try{
            const res = await axiosInstance.get('/messages')
            set({messages:res.data})
        }catch(e){
            toast.error(e as string)
        }finally{
            set({isMessageLoading:false})
        }
    } , 
    setSelectedUser:(selectedUser)=>set({selectedUser})
    
}))