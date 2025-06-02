import { CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/useAuthStore';

const VerificationPage = async () => { 
const inputRef = useRef<HTMLInputElement>(null)
const inputValue = inputRef.current?.value
const {Verify } = useAuthStore()
function validate(){
    if(inputValue===""){
        return toast.error("code can't be empty !!")
    }
    
    return true
}

async function  submit(){
    const sucess =validate()

    if(sucess==true){
     
        await Verify(inputValue as string) 
        
    }
}

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <CheckCircle className="h-12 w-12 text-primary-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verify your email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We've sent a verification code to your email address.
          Please enter it below to complete your registration.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 flex justify-center">
          <form className="space-y-6" >
          <fieldset className="fieldset mb-3">
                        
                        <input type="text" className="input-primary
                        focus:ring-indigo-500 focus:border-indigo-500  shadow-xs text-gray-500 border
                         border-gray-300 rounded-md h-9 ml-5 mb-2 mr-5 focus:outline-none text-base px-4 py-2" 
                         ref={inputRef}
                         placeholder="Enter your 6-digit code"/>
                    </fieldset>

                   <button className="btn btn-wide btn-primary mb-4"
                   onClick={submit}
                   >verify-email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;