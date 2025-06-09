import { NameTemplate } from "./nameTemaplate";
import { SearchInput } from "./searchInput";
import { MessageTemplate } from "./messageTeamplate";
export function Sidebar(){
    return <div className="flex flex-col h-screen  w-60 bg-amber-500">
        <NameTemplate/>
        <hr className="pb-4 mt-4 text-gray-500"/>
        <SearchInput/>
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