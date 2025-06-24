import { IoIosArrowRoundForward } from "react-icons/io";
import { useRef, useState} from "react";
import { IoMdEye } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import toast from 'react-hot-toast';
import { BsChatDots } from "react-icons/bs";
import { useAuthStore } from "../store/useAuthStore";
import { Link,  useNavigate } from "react-router-dom";
export  function  Signup(){ 

    const {signup,isSigningup } = useAuthStore()
    const navigate = useNavigate()
   
    const [visible,Setvisible] = useState(false)
    const userRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null) 
    const [checkRef ,setcheck] = useState(false)

   const data  = {
        name : userRef.current?.value , 
        password : passwordRef.current?.value , 
        email : emailRef.current?.value , 
    } ;
  
  
 function validate(){
        const password = passwordRef.current?.value 
        const email  = emailRef.current?.value 
        const username = userRef.current?.value 
    
        if (!username) return toast.error("Username can't be empty",{duration:2000}) ;
        if (!password) return toast.error("Password can't be empty",{duration:2000});
        if (password.length < 6) return toast.error("Password must be at least 6 characters",{duration:2000});
        if (!email?.includes('@')) return toast.error("Invalid email",{duration:2000});
        if(checkRef==false){return toast.error("agree terms and condition to continue")}
        return true
                      }

  async function submit (){
   const success =  validate()

        if(success===true){
                await signup(data)
                toast.success('account created succesfully !!',{duration:1500})
                navigate('/message')
        } ; 
    
  } ; 


    return <div className=" flex items-center justify-center bg-gray-100 h-screen w-screen flex-col">
        <div className=" h-auto w-auto flex flex-col items-center pb-5"> 
            <div className="flex">
            <BsChatDots className="text-indigo-600 " size={"45px"}/>
            </div>
            <div className="flex pt-4 flex-col items-center">
                <h1 className="font-bold text-black text-3xl">
                    Create Your Account
                </h1> 
                <span className="pt-1 text-gray-400 ">
                    already have an account ? <Link className="text-indigo-600 cursor-pointer"
                  to={'/login'}  >
                        sign in 
                    </Link>
                </span>
            </div>
        </div>
        <div className=" bg-white flex flex-col max-h-max w-1/3 rounded-md shadow-xs">
                    
                    
                    <fieldset className="fieldset m-5 ">
                        <legend className="fieldset-legend text-black font-normal text-sm ">Username</legend>
                        <input type="text" className="input-primary 
                        shadow-xs text-gray-500 border focus:ring-indigo-500 focus:border-indigo-500
                         border-gray-300 rounded-md h-9 text-base focus:outline-none  px-4 py-2 " placeholder="Yash"
                         ref={userRef}
                         />
                    </fieldset>
                    
                    
                    <fieldset className="fieldset mb-3">
                        <legend className="fieldset-legend text-black pl-5 font-normal text-sm ">Email</legend>
                        <input type="text" className="input-primary
                        focus:ring-indigo-500 focus:border-indigo-500  shadow-xs text-gray-500 border
                         border-gray-300 rounded-md h-9 ml-5 mb-2 mr-5 focus:outline-none text-base px-4 py-2"
                         ref={emailRef}
                         placeholder="xyz@gmail.com" />
                    </fieldset>
                


                    <fieldset className="fieldset">
                    <legend className="fieldset-legend text-black pl-5 font-normal text-sm ">Password</legend>
                       <div className="relative ml-5 mr-5">
                            <input
                            type={visible ? "text" : "password"}
                            className="input-primary shadow-xs text-gray-500 border border-gray-300 
                            focus:ring-indigo-500 focus:border-indigo-500 
                            rounded-md h-9 w-full focus:outline-none text-base px-2 py-2 pr-10"
                            placeholder="*****"
                            ref={passwordRef}
                            />
                            <button
                            type="button"
                            onClick={() => Setvisible(!visible)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
                            >
                            {visible ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                            </button>
                        </div>
                    </fieldset> 



                    <div className="flex items-center m-4">
                        <input type="checkbox"
                        className="checkbox checkbox-primary checkbox-xs mr-2"
                         onChange={()=>{
                            setcheck(c=>!c)
                         }}
                         checked={checkRef}
                        />
                        <span className="text-black pr-4 inline-block">
                            I agree to the <a className="text-indigo-600 cursor-pointer">
                             Terms of Service </a> 
                            and <a className="text-indigo-600 cursor-pointer">
                             Privacy Policy 
                                </a> 
                        </span>
                    </div>

                    <div className="m-2 flex justify-center items-center">
                    <button className="btn btn-wide btn-primary mb-4"
                        onClick={submit}
                    >
                       <FaUserPlus size={'18px'}/>
                       <span className="pl-2">
                       {isSigningup?"nothing":"Create Account"}
                       </span>
                       
                    </button>
                    </div>
            </div>
    </div>
}