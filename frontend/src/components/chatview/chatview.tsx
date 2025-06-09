import { Footer } from "./footer";
import { Header } from "./header";

export function Chatview(){
    return <div className="h-screen w-screen bg-indigo-200">
        <div className="flex flex-col">
            <Header/>
        </div>
        <hr className="text-gray-200 "/>
        <div className="size-9/12">
            chat
        </div> 
        <hr className="text-gray-200 "/>
        <div >
            <Footer/>
        </div>
    </div>
}