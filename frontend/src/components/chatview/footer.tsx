import { CiCalendar } from "react-icons/ci";
import { GrAttachment } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
export function Footer(){
    return <div className="flex h-auto w-auto items-center justify-center">
        <div className="flex justify-center items-center"> 
            <CiCalendar className="mr-4 ml-4 size-9 cursor-pointer" />
            <GrAttachment className="size-7 mr-4 cursor-pointer"/>
        </div>
        <div className="w-8/12 focus:outline-none  outline-none focus:ring-0 focus:border-none   ">
        <input type="text" placeholder="Type a Message" className="textarea  focus:outline-none  border-none outline-none focus:ring-0 focus:border-none w-full bg-inherit" />
        </div>

        <div className="flex justify-center items-center">
            <BsEmojiSmile className="size-7 ml-4 cursor-pointer"/>
            <IoMicOutline className="size-7 ml-4 cursor-pointer"/>
            <div className="size-10 ml-4 flex justify-center items-center bg-green-500 rounded-full cursor-pointer">
            <BsSend size={'20px'}/>
            </div>
            
        </div>
    </div>
}