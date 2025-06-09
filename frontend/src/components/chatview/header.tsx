import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
export function Header(){
    return <div className="flex justify-between m-4   rounded"> 
    <div className="flex">
        <div className="size-14 bg-amber-300 rounded-full ml-4">
        </div>
        <div className="pl-2">
            <span className="text-xl">
                Name
            </span>
            <br />
            <span className="text-sm">
                status
            </span>
        </div>
    </div>
        <div className="flex  mt-2  items-center  h-auto w-auto">
            <div className="mr-5 cursor-pointer" >
            <IoIosCall size={'25px'}/>
            </div>
            <div className="mr-4 cursor-pointer">
            <FaVideo size={'25px'}/>
            </div>
            <div className="cursor-pointer">
            <BsThreeDotsVertical size={'25px'}/>
            </div>
        </div>
    </div>
}