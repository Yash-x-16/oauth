import { CiSettings } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
export function NameTemplate(){
    return <div className="flex justify-center items-center mt-3 ">
        <div className="size-10 bg-indigo-400 rounded-full ">
        </div>
        <div className="pl-4 leading-4">
            <h1>
                Name
            </h1>
            <span className="text-xs">
                xyz@gmail.com
            </span>
        </div>

        <div className="bg-red-400 flex justify-center items-center rounded-full size-7 ml-4">
            <FaRegUser size={'20px'} className="cursor-pointer "/>
        </div>

        <div className="bg-red-400 flex justify-center items-center rounded-full size-7 ml-4">
            <CiSettings size={'20px'} className="cursor-pointer"/>
        </div>
        <div className="bg-red-400 flex justify-center items-center rounded-full size-7 ml-3">
            <IoIosLogOut size={'20px'} className="cursor-pointer" />
        </div>
    </div>
}