import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
export function MessageTemplate(){
    return <div className="flex justify-center items-center m-3 cursor-pointer">
        <div className="size-10 bg-indigo-400 rounded-full ">
        </div>
        <div className="pl-4 leading-4">
            <h1>
                Name
            </h1>
            <div className="text-xs mt-2">
                xyz@gmail.com
            </div>
        </div> 
        <div>
        <div className="pl-8">
            <span className="text-xs">
                time
            </span>
        </div>
        <div className=" ml-8 rounded-full flex justify-center items-center bg-indigo-500">
            <span className="text-xs">
                1
                </span>          
        </div>
        </div>
       
    </div>
}