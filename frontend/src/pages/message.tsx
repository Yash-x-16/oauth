import { Sidebar } from "../components/sidebar"
import { IoIosSend } from "react-icons/io";
export function Message(){
    return <div className="flex flex-row">
        <div>
            <Sidebar/>
        </div>
        <div className="bg-indigo-300 w-screen flex  justify-center items-center flex-col">
            <div className="size-12 bg-indigo-500 rounded-full flex justify-center items-center">
            <IoIosSend size={'30px'}/>
            </div>
            <span className="text-white font-bold text-lg">
             No conversation selected  
            </span>
       
                <span className="">
                select a conversation from the sidebar to start chatting 
            </span>
            
        </div>
    </div>
}