import { Chatview } from "../components/chatview/chatview";
import { DefaultSidebar } from "../components/defaultMessage";
import { Sidebar } from "../components/sidebar"
import { IoIosSend } from "react-icons/io";
import { useChatAuth } from "../store/useChatStore";
export function Message(){

    const {selectedUser} = useChatAuth()
    return <div className="flex flex-row">
        <div >
            <Sidebar/>
        </div>
     {selectedUser?<Chatview/>: <DefaultSidebar/>}
    </div>
}