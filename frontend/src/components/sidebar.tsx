import { NameTemplate } from "./nameTemaplate";
import { SearchInput } from "./searchInput";
import { MessageTemplate } from "./messageTeamplate";
import { useChatAuth } from "../store/useChatStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";

export function Sidebar(){
    // const {getUsers,isUsersLoading,selectedUser,setSelectedUser,users} = useChatAuth()
    const onlineUsers = []

    // useEffect(()=>{
    //     getUsers()
    // },[getUsers])

    // if(isUsersLoading){
    //     return   <div className='flex items-center justify-center h-screen bg-white'>
    //     <Loader className="size-10 animate-spin text-indigo-600 "/>
    //   </div>
    // }

    return <div className="flex flex-col h-screen  w-72 bg-amber-500">

        <NameTemplate/>
        <hr className="pb-4 mt-4 text-gray-500"/>
        <div className="m-2">
        <SearchInput/>    
        </div>
        
        <hr className="pb-2 mt-4 text-gray-500"/>
        <MessageTemplate/>
        <hr className=" text-gray-500"/>
        <MessageTemplate/>
        <hr className=" text-gray-500"/>
        <MessageTemplate/>
        <hr className=" text-gray-500"/>
        <MessageTemplate/>
        <hr className=" text-gray-500"/>
        <MessageTemplate/>
        <hr className=" text-gray-500"/>
    </div>
}