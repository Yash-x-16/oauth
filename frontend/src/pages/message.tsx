import { DefaultSidebar } from "../components/defaultMessage";
import { Sidebar } from "../components/sidebar"
import { IoIosSend } from "react-icons/io";
export function Message(){
    return <div className="flex flex-row">
        <div >
            <Sidebar/>
        </div>
      <DefaultSidebar/>
    </div>
}