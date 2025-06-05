import { CiCamera,CiCalendar } from "react-icons/ci";
import { FiShield } from "react-icons/fi";
export  function ProfilePage(){
    return <div className="bg-gray-600 flex justify-center items-center h-screen w-screen flex-col">

        <h1 className="flex flex-col text-black text-2xl  pr-56 pb-4 ">
                Profile
                <span className="text-sm text-gray-400">
                    your profile Information
                </span>
            </h1>
               
        <div className="flex bg-white h-auto w-96 text-black flex-col rounded-lg shadow-2xl">
            <div className="flex items-center flex-col">
                 
                        <div className="bg-indigo-500  h-24 w-24 rounded-full mt-4 mb-2">  </div> 
                        <div className="absolute translate-x-10 translate-y-20 cursor-pointer bg-purple-500 rounded-full size-8 flex justify-center items-center">
                            <CiCamera className="size-6"/>
                            </div>
                        <span className="text-sm  text-gray-400">
                            click the camera icon to update your profile image 
                        </span>
            </div>
            <div className="w-80 m-5">
            <fieldset className="fieldset ">
                        <legend className="fieldset-legend text-black font-normal text-sm ">FullName</legend>
                        <input type="text" className="input-primary 
                        shadow-xs text-gray-500 border 
                         border-gray-300 rounded-md h-9 text-base focus:outline-none  px-4 py-2 " placeholder="Yash"
                         />
                    </fieldset>
            <fieldset className="fieldset ">
                        <legend className="fieldset-legend text-black font-normal text-sm ">Email</legend>
                        <input type="text" className="input-primary 
                        shadow-xs text-gray-500 border 
                         border-gray-300 rounded-md h-9 text-base focus:outline-none  px-4 py-2 " placeholder="xyz@gmail.com"
                         />
                    </fieldset>
            </div>
            <hr  className="m-3 text-gray-400"/>
            <div className="h-36  max-w-md  ">
                <h1 className="text-xl font-semibold text-gray-800 mb-4 pl-4">
                    Account Information 
                </h1>
                <div className="flex justify-between items-center m-4">
                    <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-xl"><CiCalendar /></span>
                        <span className="text-sm font-medium">Member Since</span>
                    </div>
                        <span className="text-sm text-gray-800 font-medium pl-20">March 2024</span>
                </div>
                <div className="flex justify-between items-center m-4">
                    <div className="flex  gap-2 text-gray-600">
                        <span className="text-xl"><FiShield className="text-gray-500"/></span>
                        <span className="text-sm font-medium">Account Status</span>
                    </div>
                        <span className="text-sm text-green-600 font-semibold">Active</span>
                    </div>
                </div>
        </div>
    </div>
    }