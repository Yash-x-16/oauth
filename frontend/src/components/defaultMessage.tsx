import { IoIosSend } from "react-icons/io";
export function DefaultSidebar(){
    return    <div className="bg-indigo-300 w-screen flex  justify-center items-center flex-col">
    <div className="size-12 bg-indigo-500 rounded-full flex justify-center items-center">
    <IoIosSend size={'30px'}/>
    </div>
    <span className="text-white font-bold text-lg mt-4">
     No conversation selected  
    </span>

        <span className="">
        select a conversation from the sidebar to start chatting 
    </span>
    
</div>
}