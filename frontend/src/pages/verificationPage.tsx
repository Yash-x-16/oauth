import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';


const VerificationPage: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Here you would verify the code with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <fieldset className="fieldset mb-3">
                        <legend className="fieldset-legend text-black pl-5 font-normal text-sm ">Email</legend>
                        <input type="text" className="input-primary
                        focus:ring-indigo-500 focus:border-indigo-500  shadow-xs text-gray-500 border
                         border-gray-300 rounded-md h-9 ml-5 mb-2 mr-5 focus:outline-none text-base px-4 py-2"
                     
                        placeholder="Enter your 6-digit code"/>
                    </fieldset>

            <button className="btn btn-wide btn-primary mb-4"
                               
                             >
                               verify-email
                 
                      
                             </button>
          </form>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Didn't receive the code?{' '}
              <button
                className="font-medium text-primary-600 hover:text-primary-500"
                onClick={() => {
                  // Here you would trigger resending the verification code
                  alert('New verification code sent!');
                }}
              >
                Resend code
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;